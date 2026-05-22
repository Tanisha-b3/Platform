"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type FloatingCardVariant = "default" | "portal";

type FloatingCardColor = "blue" | "orange" | "dark" | "lavender";

interface FloatingCardBaseProps {
  variant?: "default";
  color: FloatingCardColor;
  rotation: number;
  icon: ReactNode;
  label: string;
  animationClass?: string;
  delay?: number;
  className?: string;
}

interface FloatingCardPortalProps {
  variant: "portal";
  rotation: number;
  name: string;
  message: string;
  tag: string;
  time: string;
  delay?: number;
  className?: string;
}

export type FloatingCardProps = FloatingCardBaseProps | FloatingCardPortalProps;

const colorMap: Record<
  FloatingCardColor,
  { bg: string; text: string; iconBg: string; shadow: string }
> = {
  blue: {
    bg: "bg-[#3B5BDB]",
    text: "text-white",
    iconBg: "bg-white/20",
    shadow: "shadow-[0_8px_32px_rgba(59,91,219,0.35)]",
  },
  orange: {
    bg: "bg-[#E87722]",
    text: "text-white",
    iconBg: "bg-white/20",
    shadow: "shadow-[0_8px_32px_rgba(232,119,34,0.35)]",
  },
  dark: {
    bg: "bg-[#1E1B3A] dark:bg-[#2e2b4a]",
    text: "text-white",
    iconBg: "bg-white/10",
    shadow: "shadow-[0_8px_32px_rgba(30,27,58,0.4)]",
  },
  lavender: {
    bg: "bg-[#C5CAF0] dark:bg-[#3a3870]",
    text: "text-[#2d2b5b] dark:text-white",
    iconBg: "bg-white/30",
    shadow: "shadow-[0_8px_32px_rgba(197,202,240,0.4)]",
  },
};

// Map rotation angle to a matching Tailwind float animation
function getFloatAnimation(rotation: number): string {
  if (rotation < -10) return "animate-float5";
  if (rotation < -5)  return "animate-float1";
  if (rotation < 2)   return "animate-float3";
  if (rotation < 8)   return "animate-float2";
  return "animate-float4";
}

export function FloatingCard(props: FloatingCardProps) {
  const floatAnim = getFloatAnimation(props.rotation);

  if (props.variant === "portal") {
    const { rotation, name, message, tag, time, delay = 0, className = "" } = props;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
        className={`absolute ${className}`}
        style={{ rotate: `${rotation}deg` }}
      >
        <div
          className={`
            ${floatAnim}
            bg-[#C5CAF0] dark:bg-[#3a3870]
            rounded-[20px] px-4 py-3 flex items-center gap-3 min-w-[260px]
            shadow-[0_8px_32px_rgba(197,202,240,0.4)]
            backdrop-blur-sm
            hover:scale-[1.04] hover:shadow-[0_12px_40px_rgba(197,202,240,0.55)]
            transition-all duration-300 cursor-pointer
          `}
        >
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-lg font-bold text-white overflow-hidden">
              <span>👨🏾</span>
            </div>
            {/* Online indicator */}
            <span className="absolute -right-0.5 -bottom-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#C5CAF0] dark:border-[#3a3870]" />
          </div>

          {/* Accent bar */}
          <div className="w-1 h-10 rounded-full bg-[#E87722] flex-shrink-0" />

          {/* Text */}
          <div className="flex flex-col min-w-0">
            <span className="font-700 text-[13px] text-[#2d2b5b] dark:text-white font-bold leading-tight">
              {name}
            </span>
            <span className="text-[12px] text-[#4a4880] dark:text-slate-300 mt-0.5 leading-snug">
              {message}
            </span>
            <span className="text-[10px] text-[#7b78b0] dark:text-slate-400 mt-1">
              {tag} · {time}
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  const { color, rotation, icon, label, delay = 0, className = "" } = props;
  const c = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      className={`absolute ${className}`}
      style={{ rotate: `${rotation}deg` }}
    >
      <div
        className={`
          ${floatAnim}
          ${c.bg} ${c.text} ${c.shadow}
          rounded-full px-5 py-3.5 flex items-center gap-3
          backdrop-blur-sm
          hover:scale-[1.06] hover:brightness-105
          transition-all duration-300 cursor-pointer
          whitespace-nowrap
        `}
      >
        <div className={`${c.iconBg} rounded-full p-1.5 flex-shrink-0`}>
          {icon}
        </div>
        <span className="font-bold text-[18px] tracking-tight">{label}</span>
      </div>
    </motion.div>
  );
}
