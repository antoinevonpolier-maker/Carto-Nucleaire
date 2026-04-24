import { Copy, Download, Landmark } from "lucide-react";
import type { Actor, Project } from "../types/mapping";
import { getProjectById } from "../data/nuclearMapping";
import { actorTypeClass, cn, copyText, exportAsJson, makeActorSummary, priorityClass } from "../utils";

interface ActorCardProps {
  actor?: Actor;
  onSelectProject: (project: Project) => void;
}

export default function ActorCard({ actor, onSelectProject }: ActorCardProps) {
  if (!actor) return null;
  const summary = makeActorSummary(actor);

  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-orange-700">Acteur</span>
          <h2 className="mt-1 text-xl font-bold text-night">{actor.name}</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {actor.actorTypes.map((type) => <span key={type} className={cn("rounded-full px-2.5 py-1 text-[11px] font-bold", actorTypeClass(type))}>{type}</span>)}
          </div>
        </div>
        <span className={cn("rounded-full border px-3 py-1 text-xs font-bold", priorityClass(actor.commercialPriority))}>{actor.commercialPriority}</span>
      </div>

      <div className="mt-5 rounded-2xl bg-slate-50 p-4">
        <h3 className="flex items-center gap-2 text-sm font-bold text-night"><Landmark className="h-4 w-4 text-cyanAccent" /> Domaines associés</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {actor.domains.map((domain) => <span key={domain} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">{domain}</span>)}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-bold text-night">Projets associés</h3>
        <div className="mt-2 space-y-2">
          {actor.relatedProjects.length ? actor.relatedProjects.map((projectId) => {
            const project = getProjectById(projectId);
            return (
              <button
                key={projectId}
                type="button"
                onClick={() => project && onSelectProject(project)}
                className="block w-full rounded-2xl border border-slate-200 p-3 text-left transition hover:border-orangeAccent hover:bg-orange-50/50"
              >
                <span className="font-semibold text-night">{project?.name ?? projectId}</span>
                {project && <span className="mt-1 block text-xs text-slate-500">{project.domain} · {project.status}</span>}
              </button>
            );
          }) : <p className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-500">Non précisé dans les documents.</p>}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-bold text-night">Spécialités</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {actor.specialties.map((specialty) => <span key={specialty} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{specialty}</span>)}
        </div>
      </div>

      {!!actor.subsidiariesOrRelatedEntities?.length && (
        <div className="mt-5 rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
          <h3 className="text-sm font-bold text-cyan-900">Filiales / entités liées mentionnées</h3>
          <p className="mt-1 text-sm text-cyan-900/90">{actor.subsidiariesOrRelatedEntities.join(" · ")}</p>
        </div>
      )}

      <div className="mt-5 rounded-2xl border border-orange-200 bg-orange-50 p-4">
        <h3 className="text-sm font-bold text-orange-900">Opportunités commerciales possibles</h3>
        <ul className="mt-2 space-y-1 text-sm text-orange-950/90">
          {actor.specialties.slice(0, 8).map((specialty) => <li key={specialty}>• {specialty}</li>)}
        </ul>
      </div>

      <div className="mt-4 space-y-1 text-sm text-slate-700">
        {actor.commercialNotes.map((note) => <p key={note}>• {note}</p>)}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button type="button" onClick={() => exportAsJson(`${actor.id}.json`, actor)} className="inline-flex items-center gap-2 rounded-full bg-night px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
          <Download className="h-4 w-4" /> Exporter JSON
        </button>
        <button type="button" onClick={() => void copyText(summary)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-cyanAccent hover:text-night">
          <Copy className="h-4 w-4" /> Copier note de prospection
        </button>
      </div>
    </aside>
  );
}
