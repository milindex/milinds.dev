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
    'bg-surface-1 border border-white/[0.05] hover:-translate-y-[2px] hover:scale-[1.01] transition-all duration-300 hover:border-[rgba(253,87,53,0.3)] hover:bg-surface-2',
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
