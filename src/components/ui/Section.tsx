type SectionProps = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

function Section({ eyebrow, heading, subheading, children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-8 md:py-12 ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-center text-sm font-medium uppercase tracking-[0.2em] text-brand-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-center text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl">
        {heading}
      </h2>
      {subheading && (
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-text-secondary md:text-xl">
          {subheading}
        </p>
      )}
      <div className="mt-8">
        {children}
      </div>
    </section>
  );
}

export default Section;
