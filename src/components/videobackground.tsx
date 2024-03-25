import React from 'react';

const VideoBackground = () => {
    return (
        <video
            src="/epicvid.mp4"   // Path to your video file
            autoPlay                   // Auto play the video
            loop                       // Loop the video
            muted                      // Mute the video
            className="absolute w-full h-full object-cover z-1 brightness-50 opacity-25"
        />
    );
}

export default VideoBackground;
