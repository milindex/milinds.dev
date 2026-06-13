type ContainerVariant = 'site' | 'content' | 'reading';

type ContainerProps = {
  variant?: ContainerVariant;
  children: React.ReactNode;
  className?: string;
};

const maxWidths: Record<ContainerVariant, string> = {
  site: 'max-w-[1440px]',
  content: 'max-w-[1200px]',
  reading: 'max-w-[760px]',
};

function Container({ variant = 'content', children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-4 ${maxWidths[variant]} ${className}`}>
      {children}
    </div>
  );
}

export default Container;
