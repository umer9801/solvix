import Link from 'next/link';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function AnimatedButton({
  children,
  href,
  variant = 'primary',
  className = '',
}: AnimatedButtonProps) {
  const baseClasses =
    'font-bold text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 rounded-lg px-8 py-4 relative overflow-hidden group';

  const variantClasses =
    variant === 'primary'
      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl hover:shadow-primary/50'
      : 'border border-primary text-primary hover:bg-primary/10';

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      )}
    </Link>
  );
}
