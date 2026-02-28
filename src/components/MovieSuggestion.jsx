import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { movies } from '../data/movies'
import { soundManager } from '../hooks/useSound'

function MovieSuggestion() {
    const [revealed, setRevealed] = useState(false)
    const [currentMovie, setCurrentMovie] = useState(null)
    const [isAnimating, setIsAnimating] = useState(false)
    const [shownIndices, setShownIndices] = useState([])
    const allShown = shownIndices.length >= movies.length

    const revealMovie = useCallback(() => {
        if (isAnimating || allShown) return

        soundManager.init()
        setIsAnimating(true)
        setRevealed(false)

        // Pick a random movie from the ones not yet shown
        const remaining = movies
            .map((m, i) => i)
            .filter(i => !shownIndices.includes(i))
        const pick = remaining[Math.floor(Math.random() * remaining.length)]

        setTimeout(() => {
            soundManager.playOracle()
            setCurrentMovie(movies[pick])
            setShownIndices(prev => [...prev, pick])
            setRevealed(true)
            setIsAnimating(false)
        }, 600)
    }, [isAnimating, shownIndices, allShown])

    const resetMovies = useCallback(() => {
        setShownIndices([])
        setCurrentMovie(null)
        setRevealed(false)
    }, [])

    return (
        <div className="glass-panel p-6 sm:p-8 md:p-12 text-center">
            <h2 className="font-gothic text-2xl sm:text-3xl text-rose-gold gothic-glow mb-2">
                The Film Oracle
            </h2>
            <p className="font-elegant text-moonlight/80 italic mb-6 sm:mb-8 text-sm sm:text-base">
                Let the silver screen reveal your next watch...
            </p>

            {/* Film Reel Icon */}
            <div className="flex justify-center mb-6 sm:mb-8">
                <motion.div
                    onClick={revealMovie}
                    className={`${allShown ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                    whileHover={allShown ? {} : { scale: 1.05 }}
                    whileTap={allShown ? {} : { scale: 0.95 }}
                    animate={isAnimating ? {
                        rotate: [0, 360],
                    } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <svg
                        width="160"
                        height="160"
                        viewBox="0 0 160 160"
                        className="w-36 h-36 sm:w-44 sm:h-44 drop-shadow-[0_0_20px_rgba(241,180,187,0.4)] hover:drop-shadow-[0_0_40px_rgba(241,180,187,0.7)] transition-all"
                    >
                        <defs>
                            <linearGradient id="filmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#4a1942" />
                                <stop offset="100%" stopColor="#2D033B" />
                            </linearGradient>
                        </defs>

                        {/* Outer circle (film reel) */}
                        <circle cx="80" cy="80" r="70" fill="url(#filmGradient)" stroke="#F1B4BB" strokeWidth="2" />

                        {/* Inner circle */}
                        <circle cx="80" cy="80" r="25" fill="#0F0F0F" stroke="#F1B4BB" strokeWidth="1.5" />

                        {/* Film holes */}
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                            <circle
                                key={i}
                                cx={80 + 50 * Math.cos(angle * Math.PI / 180)}
                                cy={80 + 50 * Math.sin(angle * Math.PI / 180)}
                                r="8"
                                fill="#0F0F0F"
                                stroke="#F1B4BB"
                                strokeWidth="1"
                            />
                        ))}

                        {/* Center play icon */}
                        <polygon points="73,65 73,95 98,80" fill="#F1B4BB" opacity="0.8" />

                        {/* Shimmer */}
                        <motion.circle
                            cx="80" cy="80" r="70"
                            fill="transparent"
                            stroke="#F1B4BB"
                            strokeWidth="2"
                            opacity="0.3"
                            animate={{ opacity: [0.1, 0.4, 0.1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </svg>
                </motion.div>
            </div>

            <p className="text-moonlight/60 text-xs sm:text-sm mb-2 font-elegant">
                {isAnimating
                    ? "The reel is spinning..."
                    : allShown
                        ? "You've seen all the suggestions!"
                        : "Tap the reel to receive a suggestion"}
            </p>

            {/* Progress */}
            <p className="text-moonlight/40 text-xs mb-4 sm:mb-6">
                {shownIndices.length} / {movies.length} revealed
            </p>

            {/* Reset Button */}
            {allShown && (
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={resetMovies}
                    className="iron-button-small mb-6"
                >
                    ↻ Start Over
                </motion.button>
            )}

            {/* Movie Display */}
            <AnimatePresence mode="wait">
                {revealed && currentMovie && (
                    <motion.div
                        key={currentMovie.title}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="max-w-md mx-auto"
                    >
                        <div className="glass-panel p-4 sm:p-6 border-rose-gold/40 text-left">
                            <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                                <h3 className="font-gothic text-xl sm:text-2xl text-rose-gold">
                                    {currentMovie.title}
                                </h3>
                                <span className="text-xs bg-dark-cherry/50 px-2 py-1 rounded text-moonlight/80">
                                    {currentMovie.genre}
                                </span>
                            </div>
                            <p className="text-moonlight/60 text-sm italic mb-3">
                                {currentMovie.year}
                            </p>
                            <p className="font-elegant text-moonlight/90 leading-relaxed">
                                {currentMovie.brief}
                            </p>
                            <div className="mt-4 flex justify-center gap-2 text-rose-gold/60">
                                <span>✧</span>
                                <span>🎬</span>
                                <span>✧</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MovieSuggestion

