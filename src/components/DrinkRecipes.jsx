import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { recipes } from '../data/recipes'

function DrinkRecipes() {
    const [selectedRecipe, setSelectedRecipe] = useState(null)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-6 sm:p-8 md:p-12"
        >
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="font-gothic text-3xl sm:text-4xl text-rose-gold gothic-glow mb-2">
                    Drink Recipes
                </h2>
                <p className="text-moonlight/70 italic">
                    Warm potions for the soul
                </p>
            </div>

            {/* Recipe List */}
            <AnimatePresence mode="wait">
                {!selectedRecipe ? (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid gap-4"
                    >
                        {recipes.map((recipe) => (
                            <motion.button
                                key={recipe.id}
                                onClick={() => setSelectedRecipe(recipe)}
                                className="w-full p-4 sm:p-6 bg-gradient-to-r from-burgundy/30 to-obsidian/50 
                           border border-rose-gold/30 rounded-lg text-left
                           hover:border-rose-gold/60 transition-all duration-300"
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl">{recipe.emoji}</span>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl text-moonlight font-semibold">
                                            {recipe.name}
                                        </h3>
                                        <p className="text-moonlight/50 text-sm mt-1">
                                            Tap to view recipe
                                        </p>
                                    </div>
                                    <span className="ml-auto text-rose-gold text-2xl">→</span>
                                </div>
                            </motion.button>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="detail"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        {/* Back Button */}
                        <button
                            onClick={() => setSelectedRecipe(null)}
                            className="text-rose-gold hover:text-moonlight transition-colors flex items-center gap-2"
                        >
                            <span>←</span> Back to recipes
                        </button>

                        {/* Recipe Card */}
                        <div className="bg-gradient-to-b from-burgundy/20 to-obsidian/40 
                          border border-rose-gold/30 rounded-lg p-6 sm:p-8">
                            {/* Title */}
                            <div className="text-center mb-6">
                                <span className="text-5xl mb-4 block">{selectedRecipe.emoji}</span>
                                <h3 className="text-2xl sm:text-3xl text-rose-gold font-gothic">
                                    {selectedRecipe.name}
                                </h3>
                                {selectedRecipe.description && (
                                    <p className="text-moonlight/60 italic mt-2 text-sm">
                                        {selectedRecipe.description}
                                    </p>
                                )}
                            </div>

                            {/* Ingredients */}
                            <div className="mb-6">
                                <h4 className="text-lg text-rose-gold mb-3 flex items-center gap-2">
                                    <span>📋</span> Ingredients
                                </h4>
                                <ul className="space-y-2 pl-4">
                                    {selectedRecipe.ingredients.map((item, i) => (
                                        <li key={i} className="text-moonlight/90 flex items-center gap-2">
                                            <span className="text-rose-gold/60">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Instructions */}
                            <div className="mb-6">
                                <h4 className="text-lg text-rose-gold mb-3 flex items-center gap-2">
                                    <span>👩‍🍳</span> How to Make
                                </h4>
                                <p className="text-moonlight/90 leading-relaxed">
                                    {selectedRecipe.instructions}
                                </p>
                            </div>

                            {/* Tip */}
                            {selectedRecipe.tip && (
                                <div className="mt-6 p-4 bg-rose-gold/10 border border-rose-gold/20 rounded-lg">
                                    <p className="text-moonlight/80 italic text-center">
                                        💡 {selectedRecipe.tip}
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Decorative Footer */}
            <motion.p
                className="text-center text-moonlight/40 italic mt-8 text-sm"
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                More recipes coming soon...
            </motion.p>
        </motion.div>
    )
}

export default DrinkRecipes
