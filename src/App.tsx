import React, { useState } from 'react';

interface Skill {
    name: string;
    level: string;
}

const App: React.FC = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const skills: Skill[] = [
        { name: 'HTML', level: 'Expert' },
        { name: 'CSS', level: 'Expert' },
        { name: 'JavaScript', level: 'Expert' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'React', level: 'Expert' },
        { name: 'Node.js', level: 'Advanced' },
    ];

    return (
        <div className="container">
            <div className="header">
                <h1>👋 Hello, I'm Manik</h1>
                <p>Full-Stack Developer | Web Enthusiast</p>
            </div>

            <div className="skills-section">
                <h2>🛠️ My Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="skill-card"
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            title={skill.level}
                        >
                            <span>{skill.name}</span>
                            {hoveredSkill === skill.name && (
                                <div style={{ fontSize: '0.8rem', marginTop: '8px' }}>
                                    {skill.level}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer">
                <p>
                    📫 Let's connect on{' '}
                    <a
                        href="https://github.com/manik1337manik"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#667eea', textDecoration: 'none' }}
                    >
                        GitHub
                    </a>
                </p>
            </div>
        </div>
    );
};

export default App;
