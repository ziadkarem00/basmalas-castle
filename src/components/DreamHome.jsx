import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { dreamHomes } from '../data/dreamHomes'
import { soundManager } from '../hooks/useSound'

function DreamHome() {
    const [revealed, setRevealed] = useState(false)
    const [currentDream, setCurrentDream] = useState(null)
    const [isAnimating, setIsAnimating] = useState(false)

    const revealDream = useCallback(() => {
        if (isAnimating) return

        soundManager.init()
        setIsAnimating(true)
        setRevealed(false)

        const randomDream = dreamHomes[Math.floor(Math.random() * dreamHomes.length)]

        setTimeout(() => {
            soundManager.playOracle()
            setCurrentDream(randomDream)
            setRevealed(true)
            setIsAnimating(false)
        }, 800)
    }, [isAnimating])

    return (
        <div className="glass-panel p-6 sm:p-8 md:p-12 text-center">
            <h2 className="font-gothic text-2xl sm:text-3xl text-rose-gold gothic-glow mb-2">
                Dream Home Vision
            </h2>
            <p className="font-elegant text-moonlight/80 italic mb-6 sm:mb-8 text-sm sm:text-base">
                Envision your perfect sanctuary...
            </p>

            {/* Dream Home Icon */}
            <div className="flex justify-center mb-6 sm:mb-8">
                <motion.button
                    onClick={revealDream}
                    className="iron-button text-lg sm:text-xl px-8 py-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={isAnimating ? {
                        boxShadow: [
                            '0 0 20px rgba(241, 180, 187, 0.3)',
                            '0 0 40px rgba(241, 180, 187, 0.6)',
                            '0 0 20px rgba(241, 180, 187, 0.3)',
                        ],
                    } : {}}
                    transition={{ duration: 0.8, repeat: isAnimating ? Infinity : 0 }}
                >
                    🏡 Generate Dream Home 🏡
                </motion.button>
            </div>

            <p className="text-moonlight/60 text-xs sm:text-sm mb-4 sm:mb-6 font-elegant">
                {isAnimating ? "Building your dream..." : "Tap to envision a beautiful sanctuary"}
            </p>

            {/* Dream Display */}
            <AnimatePresence mode="wait">
                {revealed && currentDream && (
                    <motion.div
                        key={currentDream.id}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="glass-panel p-4 sm:p-6 border-rose-gold/40 text-left">
                            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                                <h3 className="font-gothic text-xl sm:text-2xl text-rose-gold">
                                    {currentDream.name}
                                </h3>
                                <span className="text-2xl">🏡</span>
                            </div>
                            <p className="font-elegant text-moonlight/90 leading-relaxed text-sm sm:text-base">
                                {currentDream.prompt}
                            </p>
                            <div className="mt-4 flex justify-center gap-2 text-rose-gold/60">
                                <span>✧</span>
                                <span>🌸</span>
                                <span>✧</span>
                            </div>
                            <p className="text-moonlight/50 text-xs mt-4 text-center italic">
                                Close your eyes and imagine this beautiful place...
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default DreamHome
