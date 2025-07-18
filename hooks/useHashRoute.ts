
import { useState, useEffect } from 'react';

export const useHashRoute = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    // If the hash is empty or just '#', redirect to the home page route.
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = '#/';
    }
    
    // Ensure the initial state is correct after a potential redirect.
    setRoute(window.location.hash);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return route;
};
