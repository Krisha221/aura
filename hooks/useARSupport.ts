
import { useState, useEffect } from 'react';

export const useARSupport = () => {
  const [isARSupported, setIsARSupported] = useState(false);

  useEffect(() => {
    const checkARSupport = async () => {
      // Type assertion to any to bypass TypeScript error for non-standard navigator.xr property
      const nav = navigator as any;
      if (nav.xr && typeof nav.xr.isSessionSupported === 'function') {
        try {
          const supported = await nav.xr.isSessionSupported('immersive-ar');
          setIsARSupported(supported);
        } catch (e) {
          console.error("Error checking AR support:", e);
          setIsARSupported(false);
        }
      }
    };
    checkARSupport();
  }, []);

  return isARSupported;
};
