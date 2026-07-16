"use client";

import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface SpotlightCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  glowColor?: string;
  enableTilt?: boolean;
}

export default function SpotlightCard({
  children,
  className = "",
  glowColor = "rgba(120, 119, 198, 0.15)",
  enableTilt = true,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCoords({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -(y - centerY) / (rect.height / 10); // max 10 degrees
      const rotateY = (x - centerX) / (rect.width / 10);
      setRotate({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setIsFocused(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
      className={`relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-6 backdrop-blur-xl transition-shadow duration-300 ${className}`}
      {...props}
    >
      {/* Background Spotlight glow */}
      {isFocused && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
          }}
        />
      )}
      {/* Border Spotlight glow */}
      {isFocused && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(120px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.08), transparent 80%)`,
          }}
        />
      )}
      {/* Card Content with 3D depth */}
      <div style={{ transform: "translateZ(10px)" }} className="relative z-20 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
