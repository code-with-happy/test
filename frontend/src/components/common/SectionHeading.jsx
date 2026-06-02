export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h1>
      {description ? <p className="max-w-2xl text-slate-300">{description}</p> : null}
    </div>
  );
}
