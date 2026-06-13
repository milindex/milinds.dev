type BadgeVariant = 'default' | 'brand' | 'success' | 'warning' | 'error';

type BadgeProps = {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-surface-2 text-text-secondary',
  brand: 'bg-brand-primary/10 text-brand-primary',
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
  error: 'bg-error/10 text-error',
};

function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
