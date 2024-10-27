import React, { useState } from 'react';
import './App.css'; // Ensure this file is updated with new styles

const App = () => {
    const [region, setRegion] = useState('');
    const [language, setLanguage] = useState('');
    const [issue, setIssue] = useState('');
    const [poster, setPoster] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGeneratePoster = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Simulated API call
        try {
            const response = await fetch('/api/generate-poster', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ region, language, issue }),
            });

            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setPoster(data.posterUrl);
        } catch (err) {
            setError('Failed to generate poster. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <header className="hero">
                <h1>GreenVision</h1>
                <p>AI-Powered Environmental Campaign Poster Generation</p>
                <p>Empower your community with localized awareness!</p>
            </header>

            <section className="info-section">
                <h2>What is GreenVision?</h2>
                <p>GreenVision is a platform that leverages AI technology to create customized environmental campaign posters tailored to local communities.</p>
                <h3>What We Do</h3>
                <p>We generate visually engaging posters that address region-specific environmental issues, ensuring the message resonates with the local audience.</p>
                <h3>How It Works</h3>
                <p>Users provide details about their region, preferred language, and specific environmental issues. Our AI generates a unique poster that communicates effectively with the community.</p>
            </section>

            <section className="form-section">
                <h2>Generate Your Custom Poster</h2>
                <form onSubmit={handleGeneratePoster}>
                    <input
                        type="text"
                        placeholder="Enter region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Enter language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        required
                    />
                    <select value={issue} onChange={(e) => setIssue(e.target.value)} required>
                        <option value="">Select an issue</option>
                        <option value="waste">Waste Management</option>
                        <option value="pollution">Pollution</option>
                        <option value="deforestation">Deforestation</option>
                        <option value="water">Water Conservation</option>
                    </select>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Generating...' : 'Generate Poster'}
                    </button>
                </form>
                {error && <p className="error">{error}</p>}
            </section>

            {poster && (
                <section className="poster-section">
                    <h2>Your Generated Poster</h2>
                    <img src={poster} alt="Generated Poster" />
                </section>
            )}

            <footer>
                <p>&copy; 2024 GreenVision. All rights reserved.</p>
                <p>Join us in making a difference!</p>
            </footer>
        </div>
    );
};

export default App;
