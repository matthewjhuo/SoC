import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Preload the large chapter JSON datasets before mounting the app
Promise.all([
    fetch('./svChapters.json').then(r => r.json()),
    fetch('./uvmChapters.json').then(r => r.json()),
    fetch('./socChapters.json').then(r => r.json()),
    fetch('./interviewData.json').then(r => r.json())
]).then(([svChapters, uvmChapters, socChapters, interviewData]) => {
    window.svChapters = svChapters;
    window.uvmChapters = uvmChapters;
    window.socChapters = socChapters;
    window.interviewData = interviewData;

    console.log(`[main.jsx] Data fetched successfully.`);
    console.log(`svChapters: ${svChapters?.length}, window.svChapters: ${window.svChapters?.length}`);

    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>,
    )
}).catch(err => {
    console.error('Failed to prefetch course/interview data:', err);
    window.svChapters = [];
    window.uvmChapters = [];
    window.socChapters = [];
    window.interviewData = { sv: [], uvm: [] };
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>,
    )
});
