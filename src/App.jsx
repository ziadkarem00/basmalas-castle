import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import ChessArena from './components/ChessArena'
import Oracle from './components/Oracle'
import Archive from './components/Archive'
import BookSuggestion from './components/BookSuggestion'
import MovieSuggestion from './components/MovieSuggestion'
import DustParticles from './components/DustParticles'

function App() {
    const [activeTab, setActiveTab] = useState('chess')

    const renderTab = () => {
        switch (activeTab) {
            case 'chess':
                return <ChessArena />
            case 'oracle':
                return <Oracle />
            case 'archive':
                return <Archive />
            case 'books':
                return <BookSuggestion />
            case 'movies':
                return <MovieSuggestion />
            default:
                return <ChessArena />
        }
    }

    return (
        <div className="min-h-screen relative">
            {/* Floating Dust Particles */}
            <DustParticles />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header activeTab={activeTab} setActiveTab={setActiveTab} />

                <main className="flex-1 flex items-center justify-center p-4 md:p-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="w-full max-w-4xl"
                        >
                            {renderTab()}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    )
}

export default App
