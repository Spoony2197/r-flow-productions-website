import React, { useRef } from 'react';
import { ExternalLink, Maximize } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ 
  videoId,
  className = ""
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const openInYouTube = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  const enterFullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="relative w-full group">
      <div className="aspect-video bg-black rounded-lg overflow-hidden">
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className={`absolute inset-0 w-full h-full ${className}`}
        />
      </div>
      
      {/* Overlay Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center justify-between">
          <button
            onClick={openInYouTube}
            className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
            title="Open in YouTube"
          >
            <ExternalLink className="w-5 h-5" />
            <span className="text-sm">Open in YouTube</span>
          </button>
          
          <button
            onClick={enterFullscreen}
            className="text-white hover:text-red-500 transition-colors"
            title="Fullscreen"
          >
            <Maximize className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default YouTubeEmbed;