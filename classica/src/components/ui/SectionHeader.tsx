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
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-end mb-12 md:mb-20 ${className}`}>
        <div>
          <p className="section-label mb-3">{label}</p>
          <h2 className="section-title text-3xl md:text-[2.75rem]">{title}</h2>
        </div>
        {description && (
          <p className="text-aurora-navy/65 text-lg md:text-2xl leading-relaxed md:pb-1">{description}</p>
        )}
      </div>
    );
  }

  return (
    <div className={`mb-12 md:mb-16 max-w-2xl ${className}`}>
      <p className="section-label mb-3">{label}</p>
      <h2 className="section-title text-3xl md:text-[2.75rem]">{title}</h2>
      {description && (
        <p className="mt-4 text-aurora-navy/60 text-sm md:text-base leading-relaxed max-w-lg">{description}</p>
      )}
    </div>
  );
}
