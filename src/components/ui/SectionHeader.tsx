type SectionHeaderProps = {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'split';
  className?: string;
};

export default function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  if (align === 'split') {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-x-12 lg:gap-x-20 gap-y-5 lg:gap-y-6 items-end mb-12 md:mb-16 lg:mb-20 ${className}`}>
        <div>
          <p className="section-label mb-3">{label}</p>
          <h2 className="section-title text-3xl md:text-4xl lg:text-[2.75rem] col-measure">{title}</h2>
        </div>
        {description && (
          <p className="text-aurora-navy/65 text-base md:text-lg lg:text-xl leading-relaxed col-measure lg:justify-self-end lg:text-right">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`mb-12 md:mb-16 col-measure ${className}`}>
      <p className="section-label mb-3">{label}</p>
      <h2 className="section-title text-3xl md:text-[2.75rem]">{title}</h2>
      {description && (
        <p className="mt-4 text-aurora-navy/60 text-base leading-relaxed col-text">{description}</p>
      )}
    </div>
  );
}