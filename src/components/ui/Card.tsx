type CardVariant = 'default' | 'interactive';

type CardProps = {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'section';
};

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-surface-1 border border-white/[0.05]',
  interactive:
    'bg-surface-1 border border-white/[0.05] hover:-translate-y-1 transition-all duration-300 hover:border-white/[0.1]',
};

function Card({
  variant = 'default',
  children,
  className = '',
  as: Tag = 'div',
}: CardProps) {
  return (
    <Tag
      className={`rounded-[20px] p-6 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Tag>
  );
}

export default Card;
