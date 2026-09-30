import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle, Zap } from 'lucide-react';
import { HERO_IMAGE } from '../data/mockData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimPass: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onClaimPass }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    if (!isOpen) return;

    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0f1015] rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col">
        
        {/* Header / Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0b0c10]/90">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#CEF72E] flex items-center justify-center text-black font-black">
              <Zap className="w-3.5 h-3.5 fill-black" />
            </div>
            <span className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              STRIVE // THE HIGHLIGHT REEL
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen Area */}
        <div className="relative aspect-video bg-black overflow-hidden group">
          <img
            src={HERO_IMAGE}
            alt="Strive gym workout video reel"
            className="w-full h-full object-cover filter brightness-75 contrast-110"
            referrerPolicy="no-referrer"
          />

          {/* Dynamic Video HUD Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-6">
            <div className="flex items-center justify-between">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-[#CEF72E] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>REC 4K HDR · 60FPS</span>
              </div>
              <div className="text-xs text-white/80 font-mono">
                00:{progress < 10 ? `0${progress}` : progress} / 01:24
              </div>
            </div>

            {/* Centered Big Play/Pause Action */}
            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-[#CEF72E] text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
              >
                {isPlaying ? <Pause className="w-7 h-7 fill-black" /> : <Play className="w-7 h-7 fill-black ml-1" />}
              </button>
            </div>

            {/* Bottom Controls */}
            <div>
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mb-3 cursor-pointer">
                <div
                  className="bg-[#CEF72E] h-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-[#CEF72E] transition-colors cursor-pointer font-medium"
                  >
                    {isPlaying ? 'Pause' : 'Play'}
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="flex items-center gap-1 hover:text-[#CEF72E] transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    <span>{isMuted ? 'Muted' : 'Sound On'}</span>
                  </button>
                </div>

                <div className="text-neutral-300 font-medium hidden sm:block">
                  High Performance Training Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Call To Action */}
        <div className="p-6 bg-[#0b0c10] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-neutral-300 text-center sm:text-left">
            Ready to experience world-class coaching & modern amenities?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onClaimPass();
              }}
              className="w-1/2 sm:w-auto btn-liquid-metal text-black font-extrabold text-xs px-5 py-2.5 rounded-xl cursor-pointer shadow-lg shadow-[#CEF72E]/20 flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Claim Free 1-Day Pass</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
