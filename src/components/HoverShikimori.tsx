import { useState } from "react";

const HoverImageVideo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => {
    window.location.href = "https://www.instagram.com/p/C0OTPihLtxl";
  };
  
  

  return (
    <div
      className="w-full max-w-lg h-64 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {!isHovered ? (
        <img
          src="/shikimori.png" 
          alt="Thumbnail"
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          src="/shikimori.mp4" 
          autoPlay
          loop
          className="absolute w-full h-full object-bottom bottom-[44px] scale-[1.05] object-cover"
        />
      )}
    </div>
  );
};

export default HoverImageVideo;