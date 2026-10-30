import { useRef, useState } from 'react';
import { Play, Volume2 } from 'lucide-react';

const VIDEO_SRC = '/assets/aistudio/Operax___Destravar_I.A_551e3f04.mp4';

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleStartWithSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setHasInteracted(true);
    video.play().catch(() => {
      setHasInteracted(true);
    });
  };

  return (
    <div className="w-full max-w-[980px] mx-auto rounded-[22px] bg-[#07110b] border border-[#1d3a26] p-2 sm:p-2.5 shadow-[0_24px_64px_rgba(0,0,0,0.65)]">
      <div className="relative w-full bg-black rounded-[16px] overflow-hidden flex items-center justify-center sm:h-[680px]">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          controls
          playsInline
          preload="metadata"
          onPlay={() => setHasInteracted(true)}
          className="w-full max-w-[382px] sm:max-w-none sm:h-full sm:w-auto object-contain bg-black"
        >
          Seu navegador não suporta a reprodução de vídeo.
        </video>

        {!hasInteracted && (
          <button
            type="button"
            onClick={handleStartWithSound}
            aria-label="Reproduzir vídeo com som"
            className="group absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/35 hover:bg-black/20 transition-opacity duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5bf547]"
          >
            <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full operax-btn-primary text-[#041207] transition-transform duration-150 group-hover:scale-105">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#041207] ml-1" />
            </div>
            <span className="mt-3.5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#09160e]/90 border border-[#24482f] text-xs sm:text-sm font-bold text-[#f7fff6] whitespace-nowrap">
              <Volume2 className="w-4 h-4 text-[#5bf547] shrink-0" />
              Clique para assistir com som
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
