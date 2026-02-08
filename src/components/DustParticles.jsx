import { useMemo } from 'react'

function DustParticles() {
    const particles = useMemo(() => {
        return Array.from({ length: 30 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 20,
            duration: 15 + Math.random() * 10,
            size: 2 + Math.random() * 4,
        }))
    }, [])

    return (
        <div className="dust-container">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="dust-particle"
                    style={{
                        left: `${particle.left}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`,
                    }}
                />
            ))}
        </div>
    )
}

export default DustParticles
