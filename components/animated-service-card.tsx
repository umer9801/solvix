'use client';

import { ReactNode, useState } from 'react';

interface AnimatedServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
}

export default function AnimatedServiceCard({
  title,
  description,
  icon,
  href,
}: AnimatedServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-110' : 'opacity-0'
        }`}
      />

      {/* Card content */}
      <div
        className={`relative bg-card border border-border rounded-xl p-8 transition-all duration-300 ${
          isHovered
            ? 'border-primary shadow-2xl shadow-primary/30 transform scale-105'
            : 'shadow-lg'
        }`}
      >
        {/* Icon with animation */}
        <div
          className={`text-primary mb-4 transition-all duration-300 ${
            isHovered ? 'scale-125 animate-bounce-smooth' : ''
          }`}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className={`text-xl font-bold transition-all duration-300 ${
            isHovered ? 'text-primary' : 'text-foreground'
          } mb-3`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`transition-all duration-300 ${
            isHovered
              ? 'text-foreground/90 translate-y-1'
              : 'text-foreground/70'
          } mb-6`}
        >
          {description}
        </p>

        {/* Link arrow */}
        <div
          className={`inline-flex items-center gap-2 text-primary font-semibold transition-all duration-300 ${
            isHovered ? 'gap-4' : ''
          }`}
        >
          Learn More
          <span
            className={`transition-transform duration-300 ${
              isHovered ? 'translate-x-2' : ''
            }`}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}
