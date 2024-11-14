import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// ReactDOM.render(<App /> , document.getElementById('root')); render is not valid now in latest react.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)