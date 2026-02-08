import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { books } from '../data/books'
import { soundManager } from '../hooks/useSound'

function BookSuggestion() {
    const [revealed, setRevealed] = useState(false)
    const [currentBook, setCurrentBook] = useState(null)
    const [isAnimating, setIsAnimating] = useState(false)

    const revealBook = useCallback(() => {
        if (isAnimating) return

        soundManager.init()
        setIsAnimating(true)
        setRevealed(false)

        const randomBook = books[Math.floor(Math.random() * books.length)]

        setTimeout(() => {
            soundManager.playOracle()
            setCurrentBook(randomBook)
            setRevealed(true)
            setIsAnimating(false)
        }, 600)
    }, [isAnimating])

    return (
        <div className="glass-panel p-6 sm:p-8 md:p-12 text-center">
            <h2 className="font-gothic text-2xl sm:text-3xl text-rose-gold gothic-glow mb-2">
                The Book Oracle
            </h2>
            <p className="font-elegant text-moonlight/80 italic mb-6 sm:mb-8 text-sm sm:text-base">
                Let the spirits guide your next literary journey...
            </p>

            {/* Book Icon */}
            <div className="flex justify-center mb-6 sm:mb-8">
                <motion.div
                    onClick={revealBook}
                    className="cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={isAnimating ? {
                        rotateY: [0, 180, 360],
                    } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <svg
                        width="140"
                        height="160"
                        viewBox="0 0 140 160"
                        className="w-32 h-36 sm:w-40 sm:h-44 drop-shadow-[0_0_20px_rgba(241,180,187,0.4)] hover:drop-shadow-[0_0_40px_rgba(241,180,187,0.7)] transition-all"
                    >
                        <defs>
                            <linearGradient id="bookCover" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#4a1942" />
                                <stop offset="100%" stopColor="#2D033B" />
                            </linearGradient>
                            <linearGradient id="bookPages" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#E5E5E5" />
                                <stop offset="100%" stopColor="#c4c4c4" />
                            </linearGradient>
                        </defs>

                        {/* Book spine */}
                        <rect x="10" y="15" width="20" height="130" rx="3" fill="url(#bookCover)" stroke="#F1B4BB" strokeWidth="1" />

                        {/* Pages */}
                        <rect x="30" y="18" width="95" height="124" fill="url(#bookPages)" rx="2" />

                        {/* Book cover */}
                        <rect x="32" y="15" width="98" height="130" rx="3" fill="url(#bookCover)" stroke="#F1B4BB" strokeWidth="1.5" />

                        {/* Decorative elements */}
                        <rect x="42" y="30" width="78" height="2" fill="#F1B4BB" opacity="0.6" />
                        <rect x="42" y="128" width="78" height="2" fill="#F1B4BB" opacity="0.6" />

                        {/* Gothic symbol */}
                        <text x="81" y="85" textAnchor="middle" fill="#F1B4BB" fontSize="28" fontFamily="serif">📖</text>

                        {/* Shimmer effect */}
                        <motion.rect
                            x="32" y="15" width="98" height="130" rx="3"
                            fill="url(#bookCover)"
                            opacity="0.3"
                            animate={{ opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </svg>
                </motion.div>
            </div>

            <p className="text-moonlight/60 text-xs sm:text-sm mb-4 sm:mb-6 font-elegant">
                {isAnimating ? "The pages are turning..." : "Tap the tome to receive a suggestion"}
            </p>

            {/* Book Display */}
            <AnimatePresence mode="wait">
                {revealed && currentBook && (
                    <motion.div
                        key={currentBook.title}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="max-w-md mx-auto"
                    >
                        <div className="glass-panel p-4 sm:p-6 border-rose-gold/40 text-left">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="font-gothic text-xl sm:text-2xl text-rose-gold">
                                    {currentBook.title}
                                </h3>
                                <span className="text-xs bg-dark-cherry/50 px-2 py-1 rounded text-moonlight/80">
                                    {currentBook.genre}
                                </span>
                            </div>
                            <p className="text-moonlight/60 text-sm italic mb-3">
                                by {currentBook.author}
                            </p>
                            <p className="font-elegant text-moonlight/90 leading-relaxed">
                                {currentBook.brief}
                            </p>
                            <div className="mt-4 flex justify-center gap-2 text-rose-gold/60">
                                <span>✧</span>
                                <span>📚</span>
                                <span>✧</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default BookSuggestion
