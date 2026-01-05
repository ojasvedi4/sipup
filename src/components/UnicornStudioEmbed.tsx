import { useEffect, useRef } from "react";

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized?: boolean;
      init?: () => void;
    };
  }
}

const UnicornStudioEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Unicorn Studio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.0/dist/unicornStudio.umd.js";
      script.onload = () => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    } else if (window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
      window.UnicornStudio.init();
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center py-24">
      <div 
        ref={containerRef}
        data-us-project="oINimf2j5jgYStJuLvco" 
        className="w-full max-w-[1440px] aspect-[1440/900]"
      />
    </section>
  );
};

export default UnicornStudioEmbed;
