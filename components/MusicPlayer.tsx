"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 1. Coba Autoplay langsung saat web pertama di-load
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Jika browser memblokir autoplay, pasang listener interaksi pertama
          const handleFirstInteraction = () => {
            if (audioRef.current) {
              audioRef.current
                .play()
                .then(() => setIsPlaying(true))
                .catch((err) => console.log("Autoplay blocked:", err));
            }
            // Hapus event listener agar tidak bentrok dengan tombol Pause/Play
            window.removeEventListener("click", handleFirstInteraction);
            window.removeEventListener("touchstart", handleFirstInteraction);
            window.removeEventListener("scroll", handleFirstInteraction);
          };

          window.addEventListener("click", handleFirstInteraction, { once: true });
          window.addEventListener("touchstart", handleFirstInteraction, { once: true });
          window.addEventListener("scroll", handleFirstInteraction, { once: true });
        });
    }
  }, []); // [] kosong agar jalannya cuma sekali saat komponen dipasang (mount)

  const togglePlay = (e: React.MouseEvent) => {
    // Mencegah klik tombol memicu event listener global
    e.stopPropagation();

    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop src="/music/wedding-song.mp3" />

      {/* Floating Button Controller */}
      <motion.button
        onClick={togglePlay}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/80 text-text-color border border-text-color/40 backdrop-blur-md shadow-lg cursor-pointer"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{
            repeat: isPlaying ? Infinity : 0,
            duration: 4,
            ease: "linear",
          }}
          className="flex items-center justify-center"
        >
          {isPlaying ? (
            /* IKON PAUSE */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            /* IKON PLAY */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-current translate-x-[1px]"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.div>
      </motion.button>
    </>
  );
}