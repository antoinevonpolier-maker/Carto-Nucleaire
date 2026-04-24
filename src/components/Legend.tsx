const items = [
  { label: "Domaine", color: "bg-night" },
  { label: "Projet", color: "bg-cyanAccent" },
  { label: "Acteur", color: "bg-orangeAccent" },
  { label: "Relation", color: "bg-slate-300" },
];

export default function Legend() {
  return (
    <div className="flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3 text-xs text-slate-600 shadow-sm">
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-2">
          <span className={`h-3 w-3 rounded-full ${item.color}`} />
          {item.label}
        </span>
      ))}
      <span className="text-slate-400">Cliquez un nœud pour ouvrir sa fiche.</span>
    </div>
  );
}
