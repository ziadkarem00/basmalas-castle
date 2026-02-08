import { motion } from 'framer-motion'

function Header({ activeTab, setActiveTab }) {
    const tabs = [
        { id: 'chess', icon: '♛', label: 'Chess' },
        { id: 'oracle', icon: '✧', label: 'Oracle' },
        { id: 'archive', icon: '📜', label: 'Archive' },
        { id: 'books', icon: '📚', label: 'Books' },
        { id: 'movies', icon: '🎬', label: 'Movies' },
        { id: 'drinks', icon: '☕', label: 'Drinks' },
    ]

    return (
        <header className="py-6 sm:py-8 px-4 text-center">
            {/* Title */}
            <h1 className="font-gothic text-4xl sm:text-5xl md:text-6xl text-rose-gold gothic-glow mb-2">
                Basmala's Castle
            </h1>
            <p className="font-elegant italic text-lg sm:text-xl text-moonlight/80 mb-6 sm:mb-8">
                Queen of the Board
            </p>

            {/* Tab Navigation */}
            <nav className="flex justify-center gap-2 sm:gap-3 flex-wrap max-w-2xl mx-auto">
                {tabs.map(tab => (
                    <motion.button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`tab-button text-xs sm:text-sm ${activeTab === tab.id ? 'active' : ''}`}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 20px rgba(183, 110, 121, 0.6), 0 0 30px rgba(183, 110, 121, 0.4)'
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                        <span className="mr-1">{tab.icon}</span>
                        <span className="hidden sm:inline">{tab.label}</span>
                    </motion.button>
                ))}
            </nav>
        </header>
    )
}

export default Header
