import React from 'react';
import './App.css';
import PostForm from './PostForm';
import PutForm from './PutForm';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>API Demo</h1>
            </header>
            <div className="forms-container">
                <PostForm />
                <PutForm />
            </div>
        </div>
    );
}

export default App;

