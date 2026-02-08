function MoveHistory({ moves }) {
    return (
        <div className="glass-panel p-3 sm:p-4 w-full lg:w-48 max-h-80 overflow-y-auto">
            <h3 className="font-gothic text-lg text-rose-gold mb-2 text-center">
                Moves
            </h3>
            {moves.length === 0 ? (
                <p className="text-moonlight/50 text-sm text-center italic">
                    No moves yet
                </p>
            ) : (
                <div className="space-y-1">
                    {moves.reduce((acc, move, index) => {
                        const moveNumber = Math.floor(index / 2) + 1

                        if (move.color === 'w') {
                            acc.push(
                                <div key={index} className="flex items-center gap-2 text-sm">
                                    <span className="text-rose-gold/60 w-6">{moveNumber}.</span>
                                    <span className="text-moonlight">{move.move}</span>
                                    {moves[index + 1] && (
                                        <span className="text-moonlight/60">{moves[index + 1].move}</span>
                                    )}
                                </div>
                            )
                        }
                        return acc
                    }, [])}
                </div>
            )}
        </div>
    )
}

export default MoveHistory
