import { Atom, Download, GitBranch, ShieldCheck } from "lucide-react";
import type { TabId } from "../types/mapping";
import { cn } from "../utils";

const tabs: Array<{ id: TabId; label: string }> = [
  { id: "global", label: "Vue globale" },
  { id: "civil", label: "Nucléaire civil" },
  { id: "defense", label: "Défense / propulsion navale" },
  { id: "projects", label: "Grands projets" },
  { id: "actors", label: "Acteurs" },
  { id: "accounts", label: "Comptes majeurs" },
  { id: "opportunities", label: "Opportunités commerciales" },
  { id: "loadplan", label: "Plan de charge" },
  { id: "data", label: "Données" },
];

interface HeaderProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-[1800px] px-4 py-4 lg:px-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-start gap-3">
            <div className="rounded-2xl bg-night p-3 text-white shadow-soft">
              <Atom className="h-7 w-7" aria-hidden="true" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight text-night md:text-3xl">Cartographie commerciale du nucléaire</h1>
                <span className="inline-flex items-center gap-1 rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700">
                  <ShieldCheck className="h-3.5 w-3.5" /> B2B prospection
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-600">Outil de lecture des projets, acteurs, comptes et opportunités commerciales</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2">
              <GitBranch className="h-4 w-4" /> Déployable GitHub Pages
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2">
              <Download className="h-4 w-4" /> Export fiches JSON / texte
            </span>
          </div>
        </div>

        <nav className="mt-4 flex gap-2 overflow-x-auto pb-1" aria-label="Navigation principale">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition",
                activeTab === tab.id
                  ? "border-night bg-night text-white shadow-soft"
                  : "border-slate-200 bg-white text-slate-600 hover:border-cyanAccent hover:text-night",
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
