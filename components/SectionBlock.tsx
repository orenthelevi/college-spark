interface SectionBlockProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionBlock({ label, children, className = "" }: SectionBlockProps) {
  return (
    <section className={`py-8 md:py-12 ${className}`}>
      <p className="text-xs font-medium tracking-[0.2em] uppercase text-cream-muted mb-4">
        {label}
      </p>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
