import React, { useEffect, useState } from 'react';

export function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed right-1.5 top-0 bottom-0 w-1 z-[100] flex items-center justify-center pointer-events-none"
      aria-hidden="true"
    >
      <div className="h-[25vh] w-full bg-primary/10 rounded-full relative overflow-hidden backdrop-blur-[2px]">
        <div 
          className="absolute top-0 left-0 right-0 bg-primary rounded-full transition-all duration-200 ease-out shadow-[0_0_8px_rgba(37,99,235,0.4)]"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
}
