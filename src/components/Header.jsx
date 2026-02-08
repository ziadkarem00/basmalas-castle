function Header({ activeTab, setActiveTab }) {
    const tabs = [
        { id: 'chess', icon: '♛', label: 'Chess' },
        { id: 'oracle', icon: '✧', label: 'Oracle' },
        { id: 'books', icon: '📚', label: 'Books' },
        { id: 'movies', icon: '🎬', label: 'Movies' },
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
            <nav className="flex justify-center gap-2 sm:gap-3 flex-wrap max-w-xl mx-auto">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`tab-button text-xs sm:text-sm ${activeTab === tab.id ? 'active' : ''}`}
                    >
                        <span className="mr-1">{tab.icon}</span>
                        <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                ))}
            </nav>
        </header>
    )
}

export default Header
