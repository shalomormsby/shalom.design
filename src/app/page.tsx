export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">shalom.design</h1>
      <p className="text-[var(--color-text-secondary)]">
        The design practice of Shalom Ormsby.
      </p>
      <a
        href="mailto:shalom@shalomormsby.com"
        className="text-[var(--color-primary)] hover:underline"
      >
        shalom@shalomormsby.com
      </a>
    </main>
  );
}
