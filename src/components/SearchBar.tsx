import { Search } from "lucide-react";
import type { SearchResult } from "../types/mapping";

interface SearchBarProps {
  query: string;
  results: SearchResult[];
  onQueryChange: (query: string) => void;
  onSelect: (result: SearchResult) => void;
}

export default function SearchBar({ query, results, onQueryChange, onSelect }: SearchBarProps) {
  return (
    <div className="relative">
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">Recherche rapide</label>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="EDF, RJH, CIGEO, HVAC, tuyauterie..."
          className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-cyanAccent focus:ring-4 focus:ring-cyan-100"
        />
      </div>
      {query.trim() && (
        <div className="absolute z-30 mt-2 max-h-80 w-full overflow-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-soft">
          {results.length ? (
            results.map((result) => (
              <button
                key={`${result.type}-${result.id}`}
                type="button"
                onClick={() => onSelect(result)}
                className="block w-full rounded-xl px-3 py-2 text-left hover:bg-slate-50"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-cyan-700">{result.type}</span>
                <span className="block font-semibold text-night">{result.label}</span>
                <span className="block truncate text-xs text-slate-500">{result.description}</span>
              </button>
            ))
          ) : (
            <p className="px-3 py-4 text-sm text-slate-500">Aucun résultat. Essayez une entreprise, un projet ou une compétence.</p>
          )}
        </div>
      )}
    </div>
  );
}
