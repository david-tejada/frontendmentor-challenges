import { useEffect, useState } from "react";

export default function useMediaQuery(mediaQueryString: string) {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);

    const listener = () => setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", listener);

    // Call the listener() function immediately to set the local
    // state as soon as possible.
    listener();

    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [mediaQueryString]);

  return matches;
}
