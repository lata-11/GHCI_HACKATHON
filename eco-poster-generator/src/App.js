import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [region, setRegion] = useState('');
    const [language, setLanguage] = useState('');
    const [issue, setIssue] = useState('');
    const [additionalDetails, setAdditionalDetails] = useState('');
    const [poster, setPoster] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGeneratePoster = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Update the API URL to include the correct port for your Flask backend
            const response = await fetch('http://localhost:5000/generate-image', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ region, language, issue, additionalDetails }),
            });

            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setPoster(data.image_path);  // Assuming your backend sends back the image path as 'image_path'
        } catch (err) {
            setError('Failed to generate poster. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <nav className="navbar">
                <h1>GreenVision</h1>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#generate">Generate Poster</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <header className="hero">
                <h1>Welcome to GreenVision</h1>
                <p>AI-Powered Environmental Campaign Poster Generation</p>
                <p>Empower your community with localized awareness!</p>
            </header>

            <section className="info-section" id="about">
                <h2>What is GreenVision?</h2>
                <p>GreenVision is a platform that leverages AI technology to create customized environmental campaign posters tailored to local communities.</p>
            </section>

            <section className="form-section" id="generate">
                <h2>Generate Your Custom Poster</h2>
                <form onSubmit={handleGeneratePoster}>
                    <input
                        type="text"
                        placeholder="Enter region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        required
                    />
                    <select value={language} onChange={(e) => setLanguage(e.target.value)} required>
                        <option value="">Select language</option>
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                    </select>
                    <select value={issue} onChange={(e) => setIssue(e.target.value)} required>
                        <option value="">Select an issue</option>
                        <option value="waste">Waste Management</option>
                        <option value="pollution">Pollution</option>
                        <option value="deforestation">Deforestation</option>
                        <option value="water">Water Conservation</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Additional Details"
                        value={additionalDetails}
                        onChange={(e) => setAdditionalDetails(e.target.value)}
                    />
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

            <footer id="contact">
                <p>&copy; 2024 GreenVision. All rights reserved.</p>
                <p>Join us in making a difference!</p>
            </footer>
        </div>
    );
};

export default App;
