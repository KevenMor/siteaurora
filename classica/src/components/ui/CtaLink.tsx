import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type CtaLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: 'text' | 'primary' | 'inverse';
  className?: string;
};

export default function CtaLink({ to, children, variant = 'text', className = '' }: CtaLinkProps) {
  if (variant === 'primary') {
    return (
      <Link
        to={to}
        className={`inline-flex items-center gap-2.5 bg-aurora-navy text-white px-7 py-3.5 text-sm md:text-base font-medium rounded-lg hover:bg-aurora-navy-dark transition-colors duration-200 ${className}`}
      >
        {children}
        <ArrowRight className="w-4 h-4 text-aurora-gold" />
      </Link>
    );
  }

  if (variant === 'inverse') {
    return (
      <Link
        to={to}
        className={`inline-flex items-center gap-2.5 bg-white text-aurora-navy px-7 py-3.5 text-sm md:text-base font-medium rounded-lg hover:bg-aurora-gold-muted transition-colors duration-200 ${className}`}
      >
        {children}
        <ArrowRight className="w-4 h-4 text-aurora-gold-dark" />
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2.5 text-aurora-navy font-medium text-sm md:text-base group ${className}`}
    >
      <span className="border-b border-aurora-gold/50 pb-0.5 group-hover:border-aurora-gold transition-colors">
        {children}
      </span>
      <ArrowRight className="w-4 h-4 text-aurora-gold transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
