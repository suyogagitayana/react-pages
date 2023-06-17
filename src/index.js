import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/main.css';
import './assets/css/tailwind/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* Add your own components here */}
        {/* References for Tailwind classes: https://tailwind.build/classes */}
        <h1 className='flex text-black text-3xl justify-center'>React Pages</h1>
    </>
);
