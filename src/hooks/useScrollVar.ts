import { useEffect, useState } from "react";

export const useScrollVar = () => {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const getScrollVar = () => {
      const scrollA = document.documentElement.style.getPropertyValue("--scroll");
      setScroll(Number(scrollA));
      console.log(scrollA)
    };
    window.addEventListener("scroll", getScrollVar);
    window.addEventListener("resize", getScrollVar);

    return () => {
      window.removeEventListener("scroll", getScrollVar);
      window.removeEventListener("resize", getScrollVar);
    };
  }, []);

  return scroll;
};
