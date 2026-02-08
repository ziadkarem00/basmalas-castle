import { useState, useCallback, useEffect } from 'react'
import { Chess } from 'chess.js'
import { soundManager } from './useSound'

export function useChessGame() {
    const [game, setGame] = useState(null) // null = not started
    const [selectedSquare, setSelectedSquare] = useState(null)
    const [possibleMoves, setPossibleMoves] = useState([])
    const [gameStatus, setGameStatus] = useState('Press Start to begin your match.')
    const [isThinking, setIsThinking] = useState(false)
    const [moveHistory, setMoveHistory] = useState([])
    const [showHistory, setShowHistory] = useState(false)
    const [lastMove, setLastMove] = useState(null)
    const [showLastMove, setShowLastMove] = useState(false)

    // Initialize sound on first interaction
    useEffect(() => {
        const initSound = () => {
            soundManager.init()
            document.removeEventListener('click', initSound)
        }
        document.addEventListener('click', initSound)
        return () => document.removeEventListener('click', initSound)
    }, [])

    // Update game status
    const updateStatus = useCallback((chess) => {
        if (!chess) {
            setGameStatus('Press Start to begin your match.')
            return
        }
        if (chess.isCheckmate()) {
            setGameStatus(chess.turn() === 'w' ? 'Checkmate! The shadows have won...' : '👑 Checkmate! Victory is yours, Basmala!')
        } else if (chess.isDraw()) {
            setGameStatus('A draw... the battle continues another day.')
        } else if (chess.isCheck()) {
            setGameStatus(chess.turn() === 'w' ? '⚠️ You are in check!' : '⚔️ Check! Press your advantage!')
        } else if (chess.turn() === 'w') {
            setGameStatus('Your move, Queen.')
        } else {
            setGameStatus('The shadows are thinking...')
        }
    }, [])

    // AI Move (Simple evaluation)
    const makeAIMove = useCallback((chess) => {
        setIsThinking(true)

        setTimeout(() => {
            const moves = chess.moves({ verbose: true })
            if (moves.length === 0) {
                setIsThinking(false)
                return
            }

            // Simple evaluation: prefer captures and checks
            let bestMove = moves[0]
            let bestScore = -Infinity

            for (const move of moves) {
                let score = Math.random() * 10

                if (move.captured) {
                    const pieceValues = { p: 1, n: 3, b: 3, r: 5, q: 9 }
                    score += (pieceValues[move.captured] || 0) * 10
                }

                chess.move(move)
                if (chess.isCheck()) score += 5
                if (chess.isCheckmate()) score += 1000
                chess.undo()

                if (['d4', 'd5', 'e4', 'e5'].includes(move.to)) score += 2

                if (score > bestScore) {
                    bestScore = score
                    bestMove = move
                }
            }

            const newGame = new Chess(chess.fen())
            // Auto-promote to queen
            const moveWithPromotion = { ...bestMove, promotion: 'q' }
            const madeMove = newGame.move(moveWithPromotion)

            // Play sound
            soundManager.playMove()

            setGame(newGame)
            setLastMove({ from: madeMove.from, to: madeMove.to })
            setMoveHistory(prev => [...prev, {
                move: madeMove.san,
                color: 'b',
                fen: newGame.fen()
            }])
            updateStatus(newGame)
            setIsThinking(false)
        }, 800)
    }, [updateStatus])

    // Handle square click
    const handleSquareClick = useCallback((square) => {
        if (!game) return // Game not started
        if (isThinking) return
        if (game.turn() !== 'w') return

        const piece = game.get(square)

        if (selectedSquare) {
            const moves = game.moves({ square: selectedSquare, verbose: true })
            const move = moves.find(m => m.to === square)

            if (move) {
                const newGame = new Chess(game.fen())
                // Auto-promote to queen
                const moveWithPromotion = { ...move, promotion: 'q' }
                const madeMove = newGame.move(moveWithPromotion)

                // Play sound
                soundManager.playMove()

                setGame(newGame)
                setSelectedSquare(null)
                setPossibleMoves([])
                setLastMove({ from: madeMove.from, to: madeMove.to })
                setMoveHistory(prev => [...prev, {
                    move: madeMove.san,
                    color: 'w',
                    fen: newGame.fen()
                }])
                updateStatus(newGame)

                if (!newGame.isGameOver()) {
                    setTimeout(() => makeAIMove(newGame), 500)
                }
                return
            }

            if (piece && piece.color === 'w') {
                setSelectedSquare(square)
                const moves = game.moves({ square, verbose: true })
                setPossibleMoves(moves.map(m => m.to))
                return
            }

            setSelectedSquare(null)
            setPossibleMoves([])
            return
        }

        if (piece && piece.color === 'w') {
            setSelectedSquare(square)
            const moves = game.moves({ square, verbose: true })
            setPossibleMoves(moves.map(m => m.to))
        }
    }, [game, selectedSquare, isThinking, makeAIMove, updateStatus])

    // Start a new game
    const startGame = useCallback(() => {
        const newGame = new Chess()
        setGame(newGame)
        setSelectedSquare(null)
        setPossibleMoves([])
        setMoveHistory([])
        setLastMove(null)
        setShowLastMove(false)
        setGameStatus('Your move, Queen.')
        setIsThinking(false)
        soundManager.init()
    }, [])

    // Reset game
    const resetGame = useCallback(() => {
        setGame(null)
        setSelectedSquare(null)
        setPossibleMoves([])
        setMoveHistory([])
        setLastMove(null)
        setShowLastMove(false)
        setGameStatus('Press Start to begin your match.')
        setIsThinking(false)
    }, [])

    // Toggle history panel
    const toggleHistory = useCallback(() => {
        setShowHistory(prev => !prev)
    }, [])

    // Toggle show last move highlight
    const toggleShowLastMove = useCallback(() => {
        setShowLastMove(prev => !prev)
    }, [])

    // Get board state
    const getBoard = useCallback(() => {
        if (!game) return Array(8).fill(null).map(() => Array(8).fill(null))
        return game.board()
    }, [game])

    return {
        game,
        board: getBoard(),
        selectedSquare,
        possibleMoves,
        gameStatus,
        isThinking,
        moveHistory,
        showHistory,
        lastMove,
        showLastMove,
        gameStarted: game !== null,
        handleSquareClick,
        startGame,
        resetGame,
        toggleHistory,
        toggleShowLastMove,
    }
}
