"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function InteractiveFrame() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;

    const handleMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;

        if (leftRef.current) {
          leftRef.current.style.transform = `translate(${x * -10}px, ${y * -6}px)`;
        }
        if (rightRef.current) {
          rightRef.current.style.transform = `translate(${x * 10}px, ${y * -6}px)`;
        }
        if (spotlightRef.current) {
          spotlightRef.current.style.background = `radial-gradient(520px circle at ${event.clientX}px ${event.clientY}px, var(--spotlight-color), transparent 70%)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={spotlightRef} className={styles.spotlight} aria-hidden="true" />
      <div ref={leftRef} className={styles.bracketLeft} aria-hidden="true" />
      <div ref={rightRef} className={styles.bracketRight} aria-hidden="true" />
    </>
  );
}
