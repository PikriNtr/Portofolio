import { useState, useRef, useEffect } from "react";

const HoverImageVideo4 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleClick = () => {
    window.location.href = "https://www.instagram.com/reel/C9jtvgqP7CJ";
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.controls = false;
    }
  }, []);

  return (
    <div
      className="w-full max-w-lg h-64 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {!isHovered ? (
        <img
          src="/yrlplyz.png" 
          alt="Thumbnail"
        />
      ) : (
        <video
          ref={videoRef}
          src="/yrlplyz.mp4" 
          autoPlay
          loop
        />
      )}
    </div>
  );
};

export default HoverImageVideo4;