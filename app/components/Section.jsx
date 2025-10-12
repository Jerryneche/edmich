export default function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 md:px-6 py-24 ${className}`}>
      {eyebrow && <div className="text-sm text-neutral-400 uppercase tracking-[0.2em]">{eyebrow}</div>}
      {title && <h2 className="mt-2 underline-gold">{title}</h2>}
      {subtitle && <p className="mt-4 max-w-2xl">{subtitle}</p>}
      <div className="mt-10 reveal">{children}</div>
    </section>
  );
}
