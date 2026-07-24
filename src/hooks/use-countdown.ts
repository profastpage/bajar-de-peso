"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

// Countdown que se resetea cada 24h y persiste en localStorage
// para que cada visitante vea su propia cuenta regresiva
export function useCountdown(hoursFromNow: number = 24) {
  const STORAGE_KEY = "nps_offer_deadline_v1";

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: hoursFromNow,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    let deadline = localStorage.getItem(STORAGE_KEY);
    if (!deadline) {
      deadline = (Date.now() + hoursFromNow * 60 * 60 * 1000).toString();
      localStorage.setItem(STORAGE_KEY, deadline);
    }

    const tick = () => {
      const now = Date.now();
      const diff = parseInt(deadline!) - now;

      if (diff <= 0) {
        // Reset cycle: create new 24h deadline so urgency persists
        const newDeadline = (Date.now() + hoursFromNow * 60 * 60 * 1000).toString();
        localStorage.setItem(STORAGE_KEY, newDeadline);
        setTimeLeft({ hours: hoursFromNow, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
      setIsExpired(false);
    };

    tick();
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { timeLeft, isExpired, mounted };
}
