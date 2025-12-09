"use client"

import { useEffect, useRef, useState, ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export interface ParallaxProps {
  children: (isInView: boolean) => ReactNode
  className?: string
  fromY?: number
  toY?: number
  bgColors? : string[]
  threshold?: number
}

export function ParallaxSection({
  children,
  bgColors = ["#E8E4DE", "#D4CFC7", "#E8E4DE"],
  className = "",
  fromY = 100,
  toY = -100,
  threshold = 0.2,
}: ParallaxProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [fromY, toY]);
  
  const backgroundColor = useTransform(
    scrollYProgress,
    bgColors.length === 3
      ? [0, 0.5, 1]
      : Array.from({ length: bgColors.length }, (_, i) => i / (bgColors.length - 1)),
    bgColors
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) =>  
        entry.isIntersecting && setIsInView(true), 
      { threshold }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor }}
      className={`relative min-h-[120vh] flex items-center justify-center overflow-hidden z-10 ${className}`}
    >
      <motion.div style={{ y }} className="w-full">
        {children(isInView)}
      </motion.div>
    </motion.section>
  );
}
