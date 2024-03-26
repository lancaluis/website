import { useEffect, useMemo, useState } from "react";

const useMediaQuery = (query) => {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return match;
};

export const useBreakPoints = () => {
  const sm = useMediaQuery("(max-width: 768px)");
  const md = useMediaQuery("(max-width: 1024px)");
  const lg = useMediaQuery("(max-width: 1366px)");

  return { sm, md, lg };
};
