import { useRef, useState } from 'react';
import { Play, X, Maximize } from 'lucide-react';

interface CloudinaryVideoProps {
  videoUrl: string;
  poster?: string;
}

export default function CloudinaryVideo({
  videoUrl,
  poster,
}: CloudinaryVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isZoom, setIsZoom] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* Video Card */}
      <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={poster}
          preload="metadata"
          playsInline
          className="w-full aspect-video object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Play Overlay */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40"
          >
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
              <Play className="w-8 h-8 text-black ml-1" />
            </div>
          </button>
        )}

        {/* Zoom Button */}
        <button
          onClick={() => setIsZoom(true)}
          className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full hover:bg-black transition"
        >
          <Maximize size={18} />
        </button>
      </div>

      {/* Zoom Modal */}
      {isZoom && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={() => setIsZoom(false)}
            className="absolute top-4 right-4 text-white p-2 bg-black/60 rounded-full"
          >
            <X size={22} />
          </button>

          <video
            src={videoUrl}
            autoPlay
            controls
            playsInline
            className="w-full max-w-6xl max-h-[90vh] rounded-xl"
          />
        </div>
      )}
    </>
  );
}
