export default function TabHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-widest text-[#377f45]">{eyebrow}</span>
      <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-gray-600">{description}</p>}
    </div>
  );
}
