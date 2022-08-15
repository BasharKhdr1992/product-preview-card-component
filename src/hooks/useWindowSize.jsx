import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const adjustWindowSize = (e) => {
    setWidth(e.target.innerWidth);
    setHeight(e.target.innerHeight);
  };

  useEffect(() => {
    document.addEventListener("resize", adjustWindowSize);

    return () => document.removeEventListener("resize", adjustWindowSize);
  });

  return [width, height];
};
