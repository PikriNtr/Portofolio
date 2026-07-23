import {useState, useRef, useEffect} from 'react';
import Link from 'next/link';

interface HoverVideoPlayerProps {
    thumbnailSrc: string;
    videoSrc: string;
    linkUrl?: string;
    containerClassName?: string;
    videoClassName?: string;
    imageClassName?: string;
    title?: string;
    software?: string;
    description?: string;
}

const HoverVideoPlayer = ({
    thumbnailSrc,
    videoSrc,
    linkUrl,
    title,
    software,
    description,
    containerClassName = 'w-full relative overflow-hidden cursor-pointer',
    videoClassName = "w-full h-full object-cover",
    imageClassName = "w-full h-full object-cover"
}: HoverVideoPlayerProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleClick = () => {
        if (linkUrl) {
            window.location.href = linkUrl;
        }
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.controls = false;
        }
    }, []);

     return (
        <div className="flex flex-col group relative text-base sm:text-sm">
        {/* Video / Image Container */}
        <div
            className={`relative aspect-video overflow-hidden rounded-lg scale-[1.05px] bg-white dark:bg-gray-900 group-hover:opacity-75 ${containerClassName}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
        >
            {!isHovered ? (
            <img src={thumbnailSrc} alt={title || "Thumbnail"} className={imageClassName} />
            ) : (
            <video ref={videoRef} src={videoSrc} autoPlay loop muted className={videoClassName} />
            )}
        </div>
        {/* Text Content Below the Video */}
        <div className="mt-3 flex flex-col">
            {/* Software Name (Small & subtle) */}
            {software && (
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {software}
            </span>
            )}
            
            {/* Video Name (Bold & prominent) */}
            {title && (
            <Link href={linkUrl} className="block font-medium text-gray-900 dark:text-gray-100 text-lg">
                {title}
            </Link>
            )}
            {/* Description (Gray text) */}
            {description && (
            <p className="text-gray-500 dark:text-gray-400">
                {description}
            </p>
            )}
        </div>
        </div>
    );
};
export default HoverVideoPlayer;