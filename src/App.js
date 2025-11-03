import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Docker App</h1>
        <p>Welcome to a production-ready React application with Docker!</p>
        <div className="docker-info">
          <h2>🐳 Docker Multi-Stage Build</h2>
          <p>This app is containerized using:</p>
          <ul>
            <li><strong>Build Stage:</strong> Node.js Alpine for building the React app</li>
            <li><strong>Production Stage:</strong> Nginx Alpine for serving static files</li>
          </ul>
          <p><code>Image Size: Significantly smaller than including all dev dependencies!</code></p>
        </div>
        <div className="features">
          <h2>✨ Features</h2>
          <ul>
            <li>Multi-stage Docker build for optimized image size</li>
            <li>Production-ready with Nginx web server</li>
            <li>Optimized build configuration</li>
            <li>Gzip compression enabled</li>
            <li>React 18 with modern features</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
