import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { quotes } from '../data/quotes'
import { soundManager } from '../hooks/useSound'

function Oracle() {
    const [revealed, setRevealed] = useState(false)
    const [currentQuote, setCurrentQuote] = useState('')
    const [isAnimating, setIsAnimating] = useState(false)

    const revealQuote = useCallback(() => {
        if (isAnimating) return

        // Initialize sound on first click
        soundManager.init()

        setIsAnimating(true)
        setRevealed(false)

        // Pick random quote
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

        // Animate
        setTimeout(() => {
            // Play oracle sound
            soundManager.playOracle()

            setCurrentQuote(randomQuote)
            setRevealed(true)
            setIsAnimating(false)
        }, 600)
    }, [isAnimating])

    return (
        <div className="glass-panel p-6 sm:p-8 md:p-12 text-center">
            {/* Oracle Header */}
            <h2 className="font-gothic text-2xl sm:text-3xl text-rose-gold gothic-glow mb-2">
                The Daily Inspiration Oracle
            </h2>
            <p className="font-elegant text-moonlight/80 italic mb-6 sm:mb-8 text-sm sm:text-base">
                Gaze into the crystal and receive your message...
            </p>

            {/* Crystal Ball */}
            <div className="flex justify-center mb-6 sm:mb-8">
                <motion.div
                    onClick={revealQuote}
                    className="crystal-ball cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={isAnimating ? {
                        scale: [1, 1.2, 0.9, 1.1, 1],
                        rotate: [0, -5, 5, -3, 0],
                    } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <svg
                        width="180"
                        height="180"
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-40 h-40 sm:w-48 sm:h-48"
                    >
                        <defs>
                            {/* Crystal gradient */}
                            <radialGradient id="crystalGradient" cx="30%" cy="30%" r="70%">
                                <stop offset="0%" stopColor="#F1B4BB" stopOpacity="0.4" />
                                <stop offset="40%" stopColor="#A91D3A" stopOpacity="0.3" />
                                <stop offset="70%" stopColor="#2E0249" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#0F0F0F" stopOpacity="0.9" />
                            </radialGradient>

                            {/* Glow effect */}
                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>

                            {/* Inner shimmer */}
                            <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#F1B4BB" stopOpacity="0.6">
                                    <animate attributeName="offset" values="0;0.5;0" dur="3s" repeatCount="indefinite" />
                                </stop>
                                <stop offset="50%" stopColor="transparent">
                                    <animate attributeName="offset" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
                                </stop>
                            </linearGradient>
                        </defs>

                        {/* Base/Stand */}
                        <ellipse cx="100" cy="180" rx="60" ry="15" fill="#2D033B" stroke="#F1B4BB" strokeWidth="1" />
                        <path
                            d="M50 175 Q50 165 60 160 L80 155 Q100 152 120 155 L140 160 Q150 165 150 175"
                            fill="#1a0a1f"
                            stroke="#F1B4BB"
                            strokeWidth="1"
                        />

                        {/* Main Crystal Ball */}
                        <circle
                            cx="100"
                            cy="95"
                            r="70"
                            fill="url(#crystalGradient)"
                            stroke="#F1B4BB"
                            strokeWidth="2"
                            filter="url(#glow)"
                        />

                        {/* Inner glow orb */}
                        <motion.circle
                            cx="100"
                            cy="95"
                            r="40"
                            fill="url(#shimmer)"
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Highlight reflection */}
                        <ellipse
                            cx="75"
                            cy="65"
                            rx="20"
                            ry="15"
                            fill="rgba(255,255,255,0.15)"
                            transform="rotate(-30 75 65)"
                        />

                        {/* Mystical symbols */}
                        <motion.g
                            opacity="0.3"
                            animate={{ opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <text x="85" y="90" fill="#F1B4BB" fontSize="20" fontFamily="serif">✧</text>
                            <text x="105" y="105" fill="#F1B4BB" fontSize="16" fontFamily="serif">☽</text>
                            <text x="90" y="115" fill="#F1B4BB" fontSize="14" fontFamily="serif">⚝</text>
                        </motion.g>
                    </svg>
                </motion.div>
            </div>

            {/* Instruction */}
            <p className="text-moonlight/60 text-xs sm:text-sm mb-4 sm:mb-6 font-elegant">
                {isAnimating ? "The spirits are speaking..." : "Tap the crystal to receive wisdom"}
            </p>

            {/* Quote Display */}
            <AnimatePresence mode="wait">
                {revealed && currentQuote && (
                    <motion.div
                        key={currentQuote}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="max-w-md mx-auto"
                    >
                        <div className="glass-panel p-4 sm:p-6 border-rose-gold/40">
                            <p className="font-elegant text-lg sm:text-xl text-moonlight italic leading-relaxed">
                                "{currentQuote}"
                            </p>
                            <div className="mt-3 sm:mt-4 flex justify-center gap-2 text-rose-gold/60">
                                <span>✧</span>
                                <span>☽</span>
                                <span>✧</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Oracle
