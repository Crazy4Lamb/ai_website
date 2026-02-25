import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function GlowButton({
  children,
  variant = 'primary',
  className,
  onClick,
  href,
}: GlowButtonProps) {
  const baseStyles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-[#8729ff] to-[#511999] text-white border-0'
      : 'bg-transparent text-white border border-white/30 hover:border-white/60';

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        'relative px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 inline-flex items-center justify-center',
        baseStyles,
        className
      )}
      whileHover={{
        scale: 1.05,
        boxShadow:
          variant === 'primary'
            ? '0 0 30px rgba(135, 41, 255, 0.5), 0 0 60px rgba(135, 41, 255, 0.3)'
            : '0 0 20px rgba(255, 255, 255, 0.2)',
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}
