import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { debounce } from '../utils/debounce'

const STORAGE_KEY = 'basmalas-castle-archive'

function Archive() {
    const [content, setContent] = useState('')
    const [lastSaved, setLastSaved] = useState(null)
    const [wordCount, setWordCount] = useState(0)

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) {
            try {
                const data = JSON.parse(saved)
                setContent(data.content || '')
                setLastSaved(data.timestamp ? new Date(data.timestamp) : null)
            } catch (e) {
                setContent(saved) // Fallback for plain text
            }
        }
    }, [])

    // Debounced save function
    const saveToStorage = useCallback(
        debounce((text) => {
            const data = {
                content: text,
                timestamp: new Date().toISOString()
            }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
            setLastSaved(new Date())
        }, 500),
        []
    )

    // Update content and trigger save
    const handleChange = (e) => {
        const text = e.target.value
        setContent(text)
        setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0)
        saveToStorage(text)
    }

    // Format last saved time
    const formatTime = (date) => {
        if (!date) return null
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-6 sm:p-8"
        >
            {/* Header */}
            <div className="text-center mb-6">
                <h2 className="font-gothic text-3xl sm:text-4xl text-rose-gold gothic-glow mb-2">
                    The Nocturnal Archive
                </h2>
                <p className="text-moonlight/70 italic">
                    Your private grimoire of thoughts and dreams
                </p>
            </div>

            {/* Grimoire Container */}
            <div className="grimoire rounded-lg p-4 sm:p-6 min-h-[400px] relative">
                {/* Decorative Corner Flourishes */}
                <div className="absolute top-2 left-2 text-rose-gold/30 text-2xl">❧</div>
                <div className="absolute top-2 right-2 text-rose-gold/30 text-2xl rotate-90">❧</div>
                <div className="absolute bottom-2 left-2 text-rose-gold/30 text-2xl -rotate-90">❧</div>
                <div className="absolute bottom-2 right-2 text-rose-gold/30 text-2xl rotate-180">❧</div>

                {/* Journal Textarea */}
                <textarea
                    value={content}
                    onChange={handleChange}
                    placeholder="Begin writing your thoughts here, dear Queen...

Your words are saved automatically as you type. This is your sanctuary—a place for dreams, reflections, and midnight musings.

What weighs upon your heart tonight?"
                    className="w-full h-[350px] sm:h-[400px] ink-bleed px-4 py-2"
                    style={{ lineHeight: '2.2rem' }}
                />
            </div>

            {/* Footer Info */}
            <div className="flex flex-wrap justify-between items-center mt-4 text-sm text-moonlight/50 gap-2">
                <div className="flex items-center gap-4">
                    <span>📝 {wordCount} words</span>
                </div>
                <div className="flex items-center gap-2">
                    {lastSaved && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-rose-gold/70"
                        >
                            ✓ Saved at {formatTime(lastSaved)}
                        </motion.span>
                    )}
                </div>
            </div>

            {/* Inspirational Quote */}
            <motion.div
                className="mt-6 text-center"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                <p className="text-moonlight/40 italic text-sm">
                    "In the quiet hours, the pen becomes a wand, and words weave magic."
                </p>
            </motion.div>
        </motion.div>
    )
}

export default Archive
