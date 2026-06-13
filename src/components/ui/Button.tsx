import { type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'default' | 'sm';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primary text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.35)] hover:bg-brand-hover hover:scale-[1.02] active:bg-brand-active',
  secondary:
    'border border-white/20 text-white hover:bg-surface-1 hover:border-white/30',
  ghost:
    'text-text-secondary hover:text-text-primary',
};

const sizeStyles: Record<ButtonSize, string> = {
  default: 'h-[52px] px-4 text-base',
  sm: 'h-10 px-3 text-sm',
};

function Button({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-[12px] font-medium transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
