import { useEffect, useState } from "react";

export const useMousePosition = () => {
  const [position, setPostion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = e => setPostion({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mosemove", handleMouseMove);
    };
  }, []);

  return position;
};
