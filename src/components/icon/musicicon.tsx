import React from 'react';

const MusicIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" className="w-10 h-10" fill="none" style={{filter: "drop-shadow(4px 4px 2px rgba(0, 0, 0, 1))"}}>
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B"/>
                    <stop offset="35%" stopColor="#F59E0B"/>
                    <stop offset="65%" stopColor="#EC4899"/>
                </linearGradient>
            </defs>
            <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)"
                  d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.660a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.660A2.25 2.25 0 0 0 9 15.553Z"/>
        </svg>
    );
};

export default MusicIcon;