// Audio utility for playing sound effects
// Uses Web Audio API with base64-encoded sounds for reliability

// Simple move sound - short wooden tap
const MOVE_SOUND_DATA = 'data:audio/wav;base64,UklGRl4DAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YToDAAB/f39/f39/f4CAgICBgYKCg4OEhIWFhoaHh4eIiIiJiYmKioqLi4uMjIyMjY2NjY2Ojo6Ojo6Ojo6NjY2NjY2MjIyLi4uKioqJiYmIiIeHhoaFhYSEg4OCgoGBgIB/f35+fX19fHx7e3p6eXl5eHh3d3Z2dXV0dHNzcnJxcXBwb29ubm1tbGxra2pqaWlpaGhoZ2dnZmZlZWVkZGNjY2NiYmFhYWFgYGBfX19fXl5eXl5dXV1dXV1cXFxcXFxbW1tbW1tbW1tbW1tbW1tbW1tbXFxcXFxcXV1dXV1eXl5eX19fYGBgYWFhYmJjY2RkZWVmZmdnaGhpaWpqa2tsbG1tbm9vcHBxcnJzc3R1dXZ2d3d4eHl5enp7e3x8fX1+fn9/gICBgYKCg4OEhIWFhoaHh4iIiImJioqLi4uMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampqbm5ucnJycnZ2dnZ6enp6fn5+foKCgoKChoaGhoqKioqOjo6OkpKSkpaWlpaampqanp6enp6ioqKipqamqqqqqqqqrq6urq6ysrKysrKysra2tra2tra2tra2urq6urq6urq6urq6urq6urq6urq6urq6urq6tra2tra2tra2tra2sra2srKysrKysrKurq6urq6qqqqqqqampp6eop6enpqampqWlpaSkpKOjo6KioqGhoaCgn5+enp6dnZ2cnJubm5qampmZmJiYl5eWlpaVlZSUk5OSkpGRkJCPj4+Ojo2NjIyLi4qKiYmIiIeHhoaFhYSEg4OCgoGBgIB/f35+fX18fHt7enp5eXh4d3d2dnV1dHRzc3JycXFwcG9vbm5tbWxsa2tqamlpaGhoZ2dmZmVlZGRjY2JiYWFgYF9fXl5dXVxcW1taWllZWFhXV1ZWVVVUVFNTU1JSUVFQUFBPT05OTU1NTExMS0tLS0pKSkpKSUlJSUlJSElJSUlJSUlJSUlJSUlJSUlJSUpKSkpKS0tLS0xMTExNTU1OTk9PT1BQUVFSU1NUVFVVVldXWFlaWltbXF1dXl9fYGFhYmNjZGVlZmdoaGlqa2tsbW5ub3BxcXJzc3R1dXZ3d3h5eXp7e3x9fX5/f4CAgYGCgoODhISFhYaGh4eIiImJioqKi4uMjI2NjY6Ojo+Pj5CQkA=='

// Oracle reveal sound - magical chime
const ORACLE_SOUND_DATA = 'data:audio/wav;base64,UklGRl4DAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YToDAAB/f4B/f4CAgICAgYGBgYGCgoKCgoODg4ODhISEhISFhYWFhYaGhoaGh4eHh4eIiIiIiImJiYmJioqKioqLi4uLi4yMjIyMjY2NjY2Ojo6Ojo+Pj4+PkJCQkJCRkZGRkZKSkpKSk5OTk5OUlJSUlJWVlZWVlpaWlpaXl5eXl5iYmJiYmZmZmZmampqamqurq6urq6ysrKysra2tra2urq6urq+vr6+vsLCwsLCxsbGxsbKysrKys7Ozs7O0tLS0tLW1tbW1tra2tre3t7e3uLi4uLi5ubm5ubq6urq6u7u7u7u8vLy8vL29vb29vr6+vr6/v7+/v8DAwMDAwcHBwcHCwsLCwsPDw8PDxMTExMTFxcXFxcbGxsbGx8fHx8fIyMjIyMnJycnJysrKysrLy8vLy8zMzMzMzc3Nzc3Ozs7OztDQ0NDQ0dHR0dHS0tLS0tPT09PT1NTU1NTV1dXV1dbW1tbW19fX19fY2NjY2NnZ2dnZ2tra2trb29vb29zc3Nzc3d3d3d3e3t7e3t/f39/f4ODg4ODh4uLi4uLj4+Pj4+Tk5OTk5eXl5eXm5ubm5ufn5+fn6Ojo6Ojp6enp6erq6urq6+vr6+vs7Ozs7O3t7e3t7u7u7u7v8PDw8PHx8fHx8vLy8vLz8/Pz8/T09PT09fX19fX29vb29vf39/f3+Pj4+Pj5+fn5+fr6+vr6+/v7+/v8/Pz8/P39/f39/v7+/v7///////////////////////////////////////////9/f39/f39/fn5+fn59fX19fXx8fHx8e3t7e3t6enp6enl5eXl5eHh4eHh3d3d3d3Z2dnZ2dXV1dXV0dHR0dHNzc3NzcnJycnJxcXFxcXBwcHBwb29vb29ubm5ubm1tbW1tbGxsbGxra2tra2pqampqaWlpamloaGhoaGdnZ2dnZmZmZmZlZWVlZWRkZGRkY2NjY2NiYmJiYmFhYWFhYGBgYGBfX19fX15eXl5eXV1dXV1cXFxcXFtbW1tbWlpaWlpZWVlZWVhYWFhYV1dXV1dWVlZWVlVVVVVVVFRUVFRTU1NTU1JSUlJS'

class SoundManager {
    constructor() {
        this.audioContext = null
        this.moveBuffer = null
        this.oracleBuffer = null
        this.initialized = false
        this.enabled = true
    }

    async init() {
        if (this.initialized) return

        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)()

            // Decode sounds
            this.moveBuffer = await this.decodeAudio(MOVE_SOUND_DATA)
            this.oracleBuffer = await this.decodeAudio(ORACLE_SOUND_DATA)

            this.initialized = true
        } catch (e) {
            console.log('Sound init failed:', e)
        }
    }

    async decodeAudio(dataUrl) {
        const response = await fetch(dataUrl)
        const arrayBuffer = await response.arrayBuffer()
        return await this.audioContext.decodeAudioData(arrayBuffer)
    }

    play(buffer, volume = 0.3) {
        if (!this.initialized || !this.enabled || !buffer) return

        try {
            const source = this.audioContext.createBufferSource()
            const gainNode = this.audioContext.createGain()

            source.buffer = buffer
            gainNode.gain.value = volume

            source.connect(gainNode)
            gainNode.connect(this.audioContext.destination)

            source.start(0)
        } catch (e) {
            console.log('Sound play failed:', e)
        }
    }

    playMove() {
        this.play(this.moveBuffer, 0.4)
    }

    playOracle() {
        this.play(this.oracleBuffer, 0.5)
    }

    toggle() {
        this.enabled = !this.enabled
        return this.enabled
    }
}

export const soundManager = new SoundManager()
