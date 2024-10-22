import { useState, useRef, useEffect } from "react";

const HoverImageVideo4 = () => {
    const [setIsHovered, isHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const handleClick = () => {
        window.location.href = 'https://'
    }

    useEffect(() {
        if (videoRef.current) {
            videoRef.current.controls = false;
        }
    }, []);

    return (
        <div 
        className="w-full max-w-lg h-64 relative overflow-hidden"
        onMouseEnter={() => setIsHovered(True)}
        onMouseLeave={() => setIsHovered(False)}
        onClick={handleClick}
        
        >
            
        </div>
    )
}