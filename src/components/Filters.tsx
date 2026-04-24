import type { ActorType, FilterState, Horizon, OpportunityLevel, Project } from "../types/mapping";
import { allActorTypes, allHorizons, allOpportunityLevels, allSkills } from "../data/nuclearMapping";
import { cn } from "../utils";

interface FiltersProps {
  filters: FilterState;
  domains: string[];
  projects: Project[];
  onChange: (filters: FilterState) => void;
}

function toggle<T extends string>(list: T[], value: T) {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

function FilterGroup<T extends string>({
  title,
  values,
  selected,
  onToggle,
  maxHeight = "max-h-40",
}: {
  title: string;
  values: T[];
  selected: T[];
  onToggle: (value: T) => void;
  maxHeight?: string;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
      <div className={cn("space-y-1 overflow-auto pr-1 scrollbar-thin", maxHeight)}>
        {values.map((value) => (
          <label key={value} className="flex cursor-pointer items-center gap-2 rounded-xl px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50">
            <input
              type="checkbox"
              checked={selected.includes(value)}
              onChange={() => onToggle(value)}
              className="h-4 w-4 rounded border-slate-300 text-cyanAccent focus:ring-cyanAccent"
            />
            <span>{value}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default function Filters({ filters, domains, projects, onChange }: FiltersProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-night">Filtres</h2>
        <button
          type="button"
          onClick={() =>
            onChange({
              domains: [],
              actorTypes: [],
              projectIds: [],
              skills: [],
              opportunityLevels: [],
              priorities: [],
              horizons: [],
              onlyMajorAccounts: false,
            })
          }
          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-orangeAccent hover:text-orangeAccent"
        >
          Réinitialiser
        </button>
      </div>

      <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-orange-200 bg-orange-50 px-3 py-3 text-sm font-semibold text-orange-800">
        <span>Comptes prioritaires uniquement</span>
        <input
          type="checkbox"
          checked={filters.onlyMajorAccounts}
          onChange={(event) => onChange({ ...filters, onlyMajorAccounts: event.target.checked })}
          className="h-4 w-4 rounded border-orange-300 text-orangeAccent focus:ring-orangeAccent"
        />
      </label>

      <FilterGroup
        title="Domaine"
        values={domains}
        selected={filters.domains}
        onToggle={(value) => onChange({ ...filters, domains: toggle(filters.domains, value) })}
      />
      <FilterGroup<ActorType>
        title="Type d'acteur"
        values={allActorTypes as ActorType[]}
        selected={filters.actorTypes}
        onToggle={(value) => onChange({ ...filters, actorTypes: toggle(filters.actorTypes, value) })}
      />
      <FilterGroup
        title="Projet"
        values={projects.map((project) => project.id)}
        selected={filters.projectIds}
        onToggle={(value) => onChange({ ...filters, projectIds: toggle(filters.projectIds, value) })}
        maxHeight="max-h-52"
      />
      <div className="text-xs text-slate-500 -mt-4">
        {filters.projectIds.length ? filters.projectIds.map((id) => projects.find((project) => project.id === id)?.name ?? id).join(", ") : "Sélection par identifiant projet"}
      </div>
      <FilterGroup
        title="Compétence métier"
        values={allSkills.slice(0, 120)}
        selected={filters.skills}
        onToggle={(value) => onChange({ ...filters, skills: toggle(filters.skills, value) })}
        maxHeight="max-h-52"
      />
      <FilterGroup<OpportunityLevel>
        title="Niveau d'opportunité"
        values={[...allOpportunityLevels] as OpportunityLevel[]}
        selected={filters.opportunityLevels}
        onToggle={(value) => onChange({ ...filters, opportunityLevels: toggle(filters.opportunityLevels, value) })}
      />
      <FilterGroup<OpportunityLevel>
        title="Priorité compte"
        values={[...allOpportunityLevels] as OpportunityLevel[]}
        selected={filters.priorities}
        onToggle={(value) => onChange({ ...filters, priorities: toggle(filters.priorities, value) })}
      />
      <FilterGroup<Horizon>
        title="Horizon de charge"
        values={[...allHorizons] as Horizon[]}
        selected={filters.horizons}
        onToggle={(value) => onChange({ ...filters, horizons: toggle(filters.horizons, value) })}
      />
    </div>
  );
}
