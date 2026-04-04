import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';

interface ScrollExpandMediaProps {
  videoId: string;
  title?: string;
  subtitle?: string;
}

const ScrollExpandMedia: React.FC<ScrollExpandMediaProps> = ({
  videoId,
  title = 'See Our Work In Action',
  subtitle,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Media container dimensions
  const mediaWidth = useTransform(
    scrollYProgress,
    [0, 0.6],
    isMobile ? ['80%', '100%'] : ['55%', '100%']
  );
  const mediaHeight = useTransform(
    scrollYProgress,
    [0, 0.6],
    isMobile ? ['45%', '100%'] : ['55%', '100%']
  );
  const borderRadius = useTransform(scrollYProgress, [0, 0.6], [20, 0]);

  // Split text animation
  const textLeftX = useTransform(
    scrollYProgress,
    [0.05, 0.35],
    isMobile ? [0, -120] : [0, -250]
  );
  const textRightX = useTransform(
    scrollYProgress,
    [0.05, 0.35],
    isMobile ? [0, 120] : [0, 250]
  );
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.4], [1, 0]);

  // Subtitle
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Scroll indicator
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Overlay darkening fades out as video expands
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0]);

  // Play button appears after expansion
  const playButtonOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const firstWord = title.split(' ').slice(0, 3).join(' ');
  const restOfTitle = title.split(' ').slice(3).join(' ');

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (prefersReducedMotion) {
    return (
      <section className="relative bg-dark-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-white/60 text-lg">{subtitle}</p>
            )}
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-800">
              {isPlaying ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                  title="Video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <button onClick={handlePlay} className="block w-full h-full relative group">
                  <img
                    src={thumbnailUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-brand-bright/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: isMobile ? '150vh' : '200vh' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-dark-900">
        {/* Animated media container */}
        <motion.div
          className="absolute top-1/2 left-1/2 overflow-hidden"
          style={{
            width: mediaWidth,
            height: mediaHeight,
            borderRadius,
            x: '-50%',
            y: '-50%',
            boxShadow: '0 8px 40px rgba(0, 0, 0, 0.5)',
          }}
        >
          {isPlaying ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              onClick={handlePlay}
              className="block w-full h-full relative group cursor-pointer"
              aria-label="Play video"
            >
              <img
                src={thumbnailUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay that fades as you scroll */}
              <motion.div
                className="absolute inset-0 bg-black"
                style={{ opacity: overlayOpacity }}
              />
              {/* Play button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ opacity: playButtonOpacity }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-bright/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-strong">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                </div>
              </motion.div>
            </button>
          )}
        </motion.div>

        {/* Split text overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="flex flex-col items-center gap-2">
            <motion.h2
              className="font-display text-3xl md:text-4xl lg:text-6xl text-white whitespace-nowrap"
              style={{ x: textLeftX, opacity: textOpacity }}
            >
              {firstWord}
            </motion.h2>
            {restOfTitle && (
              <motion.h2
                className="font-display text-3xl md:text-4xl lg:text-6xl text-white whitespace-nowrap"
                style={{ x: textRightX, opacity: textOpacity }}
              >
                {restOfTitle}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                className="text-white/60 text-lg mt-4"
                style={{ opacity: subtitleOpacity }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-white/50 text-sm font-medium tracking-wider uppercase">
            Scroll to expand
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-6 h-6 text-brand-bright" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollExpandMedia;
