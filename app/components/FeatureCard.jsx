export default function FeatureCard({ title, desc, icon }) {
  return (
    <div className="group rounded-2xl border border-neutral-800 bg-neutral-950/70 p-6 backdrop-blur-md transition hover:border-neutral-700 hover:bg-neutral-900/70">
      <div className="mb-4 text-2xl text-yellow-300">{icon}</div>
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="mt-2 text-neutral-400">{desc}</p>
    </div>
  );
}
