import { useState, useRef, useEffect } from "react";

const HoverImageVideo3 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleClick = () => {
    window.location.href = "https://www.instagram.com/p/Ck4ukbnr2pi";
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
          src="/nianely.jpg" 
          alt="Thumbnail"
        />
      ) : (
        <video
          ref={videoRef}
          src="/nianely.mp4" 
          autoPlay
          loop
        />
      )}
    </div>
  );
};

export default HoverImageVideo3;