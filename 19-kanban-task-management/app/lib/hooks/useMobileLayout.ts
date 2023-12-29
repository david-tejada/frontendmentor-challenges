import { useEffect, useState } from "react";

export default function useMobileLayout() {
  const mediaQueryList = window.matchMedia("(max-width: 768px)");
  const [isMobile, setIsMobile] = useState(mediaQueryList.matches);

  const handleMediaQueryChange = (event: MediaQueryListEvent) => {
    setIsMobile(event.matches);
  };

  useEffect(() => {
    mediaQueryList.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
    };
  }, [mediaQueryList]);

  return isMobile;
}
