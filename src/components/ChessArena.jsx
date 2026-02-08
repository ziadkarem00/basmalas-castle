import { useChessGame } from '../hooks/useChessGame'
import ChessBoard from './ChessBoard'
import MoveHistory from './MoveHistory'

function ChessArena() {
    const {
        board,
        selectedSquare,
        possibleMoves,
        gameStatus,
        isThinking,
        moveHistory,
        showHistory,
        lastMove,
        showLastMove,
        gameStarted,
        handleSquareClick,
        startGame,
        resetGame,
        toggleHistory,
        toggleShowLastMove,
    } = useChessGame()

    return (
        <div className="glass-panel p-4 sm:p-6 md:p-8">
            {/* Arena Header */}
            <div className="text-center mb-4 sm:mb-6">
                <h2 className="font-gothic text-2xl sm:text-3xl text-rose-gold gothic-glow mb-2">
                    Chess Arena
                </h2>
                <p className="font-elegant text-moonlight/80 italic text-sm sm:text-base">
                    {gameStatus}
                </p>
                {isThinking && (
                    <div className="mt-2 flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-rose-gold rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-rose-gold rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-rose-gold rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                )}
            </div>

            {/* Chess Board */}
            <div className="flex flex-col lg:flex-row justify-center items-start gap-4">
                <div className="flex justify-center w-full lg:w-auto">
                    {gameStarted ? (
                        <ChessBoard
                            board={board}
                            selectedSquare={selectedSquare}
                            possibleMoves={possibleMoves}
                            lastMove={showLastMove ? lastMove : null}
                            onSquareClick={handleSquareClick}
                        />
                    ) : (
                        <div
                            className="flex items-center justify-center border-2 border-rose-gold/30 rounded-lg bg-midnight-purple/30"
                            style={{
                                width: 'min(85vw, 400px)',
                                height: 'min(85vw, 400px)'
                            }}
                        >
                            <div className="text-center p-4">
                                <p className="font-gothic text-2xl text-rose-gold/60 mb-4">♛</p>
                                <p className="font-elegant text-moonlight/60 italic">
                                    Await your command...
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Move History Panel */}
                {showHistory && gameStarted && (
                    <MoveHistory moves={moveHistory} />
                )}
            </div>

            {/* Control Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
                {!gameStarted ? (
                    <button onClick={startGame} className="iron-button text-sm sm:text-base px-4 sm:px-6">
                        ⚔ Start Match ⚔
                    </button>
                ) : (
                    <>
                        <button
                            onClick={toggleShowLastMove}
                            className={`iron-button-small ${showLastMove ? 'active' : ''}`}
                            disabled={!lastMove}
                            title="Show Last Move"
                        >
                            👁 Last Move
                        </button>
                        <button
                            onClick={toggleHistory}
                            className={`iron-button-small ${showHistory ? 'active' : ''}`}
                            title="Move History"
                        >
                            📜 History
                        </button>
                        <button onClick={resetGame} className="iron-button-small">
                            ✕ End
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default ChessArena
