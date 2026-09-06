// components/CountdownTimer.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); 

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isMounted) return null;

  const timeBlocks = [
    {  value: timeLeft.days },
    {  value: timeLeft.hours },
    {  value: timeLeft.minutes },
    {  value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 md:gap-4 justify-center items-center my-6">
      {timeBlocks.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-black/60 backdrop-blur-md border border-white/20 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center shadow-lg">
            <motion.span
              key={item.value} 
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-white font-mono"
            >
              {String(item.value).padStart(2, "0")}
            </motion.span>
          </div>
        </div>
      ))}
    </div>
  );
}