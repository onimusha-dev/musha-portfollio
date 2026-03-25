"use client";

import { useEffect } from "react";

export default function BackendWarmup() {
  useEffect(() => {
    // URL to the Zerra backend to "wake it up"
    const backendUrl = "https://zerra-backend-378c.onrender.com";

    // Call it 3 times to ensure the server starts and is ready for traffic
    const warmup = async () => {
      try {
        await Promise.all([
          fetch(backendUrl, { mode: 'no-cors' }),
          fetch(backendUrl, { mode: 'no-cors' }),
          fetch(backendUrl, { mode: 'no-cors' })
        ]);
        console.log("Backend warmup initiated");
      } catch (error) {
        // Silently fail as the data is not significant
        console.error("Backend warmup failed", error);
      }
    };

    warmup();
  }, []);

  return null;
}
