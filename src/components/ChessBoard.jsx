import { getPieceSVG } from '../assets/pieces'

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const ranks = [8, 7, 6, 5, 4, 3, 2, 1]

function ChessBoard({ board, selectedSquare, possibleMoves, lastMove, onSquareClick }) {
    return (
        <div className="relative">
            {/* Board Container */}
            <div
                className="grid grid-cols-8 border-2 border-rose-gold/30 rounded-lg overflow-hidden shadow-lg"
                style={{
                    width: 'min(85vw, 400px)',
                    height: 'min(85vw, 400px)'
                }}
            >
                {ranks.map((rank, rankIndex) =>
                    files.map((file, fileIndex) => {
                        const square = `${file}${rank}`
                        const isLight = (rankIndex + fileIndex) % 2 === 0
                        const piece = board[rankIndex]?.[fileIndex]
                        const isSelected = selectedSquare === square
                        const isPossible = possibleMoves.includes(square)
                        const isLastMove = lastMove && (lastMove.from === square || lastMove.to === square)
                        const hasPiece = !!piece

                        return (
                            <div
                                key={square}
                                onClick={() => onSquareClick(square)}
                                className={`
                  relative flex items-center justify-center cursor-pointer
                  transition-all duration-200
                  ${isLight ? 'square-light' : 'square-dark'}
                  ${isSelected ? 'square-highlight' : ''}
                  ${isLastMove ? 'square-last-move' : ''}
                  ${isPossible && !hasPiece ? 'square-possible' : ''}
                  ${isPossible && hasPiece ? 'ring-2 ring-inset ring-dark-cherry' : ''}
                  active:scale-95
                `}
                                style={{ aspectRatio: '1/1' }}
                            >
                                {piece && (
                                    <div
                                        className="w-[80%] h-[80%] sm:w-[85%] sm:h-[85%] transition-transform duration-150 pointer-events-none"
                                        dangerouslySetInnerHTML={{ __html: getPieceSVG(piece) }}
                                    />
                                )}
                            </div>
                        )
                    })
                )}
            </div>

            {/* File Labels (a-h) - hidden on very small screens */}
            <div className="hidden sm:flex justify-around mt-1 px-2" style={{ width: 'min(85vw, 400px)' }}>
                {files.map(file => (
                    <span key={file} className="text-moonlight/50 text-xs font-elegant">
                        {file}
                    </span>
                ))}
            </div>

            {/* Rank Labels (1-8) - hidden on very small screens */}
            <div
                className="hidden sm:flex absolute left-[-20px] top-0 flex-col justify-around h-full py-1"
                style={{ height: 'min(85vw, 400px)' }}
            >
                {ranks.map(rank => (
                    <span key={rank} className="text-moonlight/50 text-xs font-elegant">
                        {rank}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default ChessBoard
