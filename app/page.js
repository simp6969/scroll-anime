"use client";

import { useEffect, useRef, useState } from "react";

export default function MainPage() {
  const myRef = useRef();
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setOpacity(1);
      } else {
        setOpacity(0);
      }
    });
    observer.observe(myRef.current);
  }, []);
  return (
    <div className="flex h-[300vh] w-[100vw] items-center justify-center">
      <h1
        ref={myRef}
        style={{ opacity: opacity, scale: opacity + 0.3 }}
        className="anime"
      >
        i cant find the lorem text :/
      </h1>
    </div>
  );
}
