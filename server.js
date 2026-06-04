const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());

// API Routes
app.get('/api/skills', (req, res) => {
    const skills = [
        { id: 1, name: 'HTML', level: 'Expert', category: 'Frontend' },
        { id: 2, name: 'CSS', level: 'Expert', category: 'Frontend' },
        { id: 3, name: 'JavaScript', level: 'Expert', category: 'Frontend' },
        { id: 4, name: 'TypeScript', level: 'Advanced', category: 'Frontend' },
        { id: 5, name: 'React', level: 'Expert', category: 'Frontend' },
        { id: 6, name: 'Node.js', level: 'Advanced', category: 'Backend' },
    ];
    res.json(skills);
});

app.get('/api/about', (req, res) => {
    res.json({
        name: 'Manik',
        title: 'Full-Stack Developer',
        bio: 'Passionate about building dynamic, responsive web applications with modern technologies.',
        github: 'https://github.com/manik1337manik',
    });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
});

// Fallback to index.html for React routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
