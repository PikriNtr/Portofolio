import { useState, useRef, useEffect } from "react";

const HoverImageVideo5 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleClick = () => {
    window.location.href = "https://www.instagram.com/p/DBWRIYhPrfd";
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
          src="/feb.png" 
          alt="Thumbnail"
        />
      ) : (
        <video
          ref={videoRef}
          src="/feb.mp4" 
          autoPlay
          loop
          className="absolute w-full h-full object-bottom bottom-[34px] scale-[1.05] object-cover"
        />
      )}
    </div>
  );
};

export default HoverImageVideo5;