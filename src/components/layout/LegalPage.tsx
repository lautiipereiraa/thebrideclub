interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  updatedAt: string;
  children: React.ReactNode;
}

export function LegalPage({
  eyebrow,
  title,
  intro,
  updatedAt,
  children,
}: LegalPageProps) {
  return (
    <main className="flex-1 bg-tone-100">
      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="title-xl mt-4 text-wine-deep">{title}</h1>
          <p className="lead mt-6">{intro}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted">
            Última actualización: {updatedAt}
          </p>

          <div className="mt-14 space-y-10 text-sm leading-relaxed text-ink">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-tone-300 pt-8">
      <h2 className="font-display text-2xl text-wine-deep">{title}</h2>
      <div className="mt-4 space-y-3">{children}</div>
    </section>
  );
}
