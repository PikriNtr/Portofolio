import { useState, useRef, useEffect } from "react";

const HoverImageVideo2 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    >
      {!isHovered ? (
        <img
          src="/caredit.jpg" 
          alt="Thumbnail"
        />
      ) : (
        <video
          ref={videoRef}
          src="/caredit.mp4" 
          autoPlay
          loop
        />
      )}
    </div>
  );
};

export default HoverImageVideo2;