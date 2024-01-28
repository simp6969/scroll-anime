"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MainPage() {
  const myRef = useRef();
  const mySecondRef = useRef();
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
    observer.observe(mySecondRef.current);
  }, []);
  return (
    <div className="flex h-[300vh] w-[100vw] items-center justify-around flex-col gap-[50px]">
      <h1
        ref={myRef}
        style={{
          opacity: opacity,
          transform: "translateY(" + opacity * 40 + "px)",
        }}
        className="anime"
      >
        i cant find the lorem text :/
      </h1>
      <Image
        ref={mySecondRef}
        style={{
          opacity: opacity,
          transform: "translateX(" + opacity * 40 + "px)",
        }}
        height="200"
        width="150"
        src="/bg.jpg"
        className="photo"
        alt="idk"
      ></Image>
    </div>
  );
}
