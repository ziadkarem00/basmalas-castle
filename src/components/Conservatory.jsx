import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ambientSounds = [
    { id: 'rain', icon: '🌧️', label: 'Rain', description: 'Gentle rainfall on castle windows' },
    { id: 'fire', icon: '🔥', label: 'Fireplace', description: 'Crackling hearth warmth' },
    { id: 'piano', icon: '🎹', label: 'Piano', description: 'Soft melancholic melodies' },
]

// Base64 encoded ambient sound loops (short placeholder tones)
const AMBIENT_DATA = {
    rain: null,
    fire: null,
    piano: null,
}

function Conservatory() {
    const [activeSound, setActiveSound] = useState(null)
    const [volume, setVolume] = useState(0.5)
    const audioRef = useRef(null)

    useEffect(() => {
        // Cleanup on unmount
        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }
        }
    }, [])

    const toggleSound = (soundId) => {
        if (activeSound === soundId) {
            // Stop current sound
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }
            setActiveSound(null)
        } else {
            // Stop previous sound
            if (audioRef.current) {
                audioRef.current.pause()
            }

            // For now, we'll use Web Audio API to generate ambient tones
            // In production, these would be audio files
            setActiveSound(soundId)

            // Create ambient sound using Web Audio API
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)()
                const oscillator = ctx.createOscillator()
                const gainNode = ctx.createGain()

                // Different frequencies for different sounds
                const frequencies = {
                    rain: 220, // Low rumble
                    fire: 150, // Crackling base
                    piano: 440, // A4 note
                }

                oscillator.type = soundId === 'piano' ? 'sine' : 'sawtooth'
                oscillator.frequency.setValueAtTime(frequencies[soundId], ctx.currentTime)
                gainNode.gain.setValueAtTime(volume * 0.1, ctx.currentTime)

                oscillator.connect(gainNode)
                gainNode.connect(ctx.destination)
                oscillator.start()

                audioRef.current = { ctx, oscillator, gainNode }
            } catch (e) {
                console.log('Audio not available')
            }
        }
    }

    useEffect(() => {
        // Update volume when slider changes
        if (audioRef.current?.gainNode) {
            audioRef.current.gainNode.gain.setValueAtTime(volume * 0.1, audioRef.current.ctx.currentTime)
        }
    }, [volume])

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-6 sm:p-8 md:p-12"
        >
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="font-gothic text-3xl sm:text-4xl text-rose-gold gothic-glow mb-2">
                    The Conservatory
                </h2>
                <p className="text-moonlight/70 italic">
                    Immerse yourself in atmospheric soundscapes
                </p>
            </div>

            {/* Decorative Music Note */}
            <motion.div
                className="text-6xl sm:text-7xl text-center mb-8 opacity-50"
                animate={{
                    scale: activeSound ? [1, 1.05, 1] : 1,
                    opacity: activeSound ? [0.5, 0.8, 0.5] : 0.3
                }}
                transition={{
                    duration: 2,
                    repeat: activeSound ? Infinity : 0,
                    ease: 'easeInOut'
                }}
            >
                🎶
            </motion.div>

            {/* Ambient Sound Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {ambientSounds.map((sound) => (
                    <motion.button
                        key={sound.id}
                        onClick={() => toggleSound(sound.id)}
                        className={`ambient-btn text-center ${activeSound === sound.id ? 'active' : ''}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="text-3xl mb-2">{sound.icon}</div>
                        <div className="text-lg font-semibold text-moonlight">{sound.label}</div>
                        <div className="text-sm text-moonlight/60 mt-1">{sound.description}</div>
                        {activeSound === sound.id && (
                            <motion.div
                                className="mt-2 text-xs text-rose-gold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                ♪ Now Playing ♪
                            </motion.div>
                        )}
                    </motion.button>
                ))}
            </div>

            {/* Volume Control */}
            <AnimatePresence>
                {activeSound && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center justify-center gap-4 mb-6"
                    >
                        <span className="text-moonlight/60">🔈</span>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                            className="w-32 sm:w-48 accent-rose-gold"
                        />
                        <span className="text-moonlight/60">🔊</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Spotify Placeholder */}
            <div className="mt-8 p-4 border border-dashed border-rose-gold/30 rounded-lg text-center">
                <p className="text-moonlight/50 text-sm">
                    🎧 Connect your Spotify for curated Whimsigoth playlists
                </p>
                <p className="text-moonlight/30 text-xs mt-2">
                    (Coming soon)
                </p>
            </div>

            {/* Atmosphere Description */}
            <motion.p
                className="text-center text-moonlight/50 italic mt-8"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                {activeSound
                    ? "Let the ambience carry you to distant realms..."
                    : "Select a soundscape to begin your journey"}
            </motion.p>
        </motion.div>
    )
}

export default Conservatory
