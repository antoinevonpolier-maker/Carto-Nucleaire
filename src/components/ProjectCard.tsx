import { Copy, Download, Target } from "lucide-react";
import type { Actor, Project } from "../types/mapping";
import { copyText, exportAsJson, makeProjectSummary, priorityClass } from "../utils";
import { actorTypeClass, cn } from "../utils";
import { getActorById } from "../data/nuclearMapping";

interface ProjectCardProps {
  project?: Project;
  onSelectActor: (actor: Actor) => void;
}

export default function ProjectCard({ project, onSelectActor }: ProjectCardProps) {
  if (!project) {
    return (
      <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="text-lg font-bold text-night">Fiche détaillée</h2>
        <p className="mt-2 text-sm text-slate-600">Cliquez sur un projet ou un acteur dans la cartographie pour afficher sa fiche commerciale.</p>
      </aside>
    );
  }

  const summary = makeProjectSummary(project);

  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Projet</span>
          <h2 className="mt-1 text-xl font-bold text-night">{project.name}</h2>
          <p className="mt-1 text-sm text-slate-600">{project.domain} · {project.category}</p>
        </div>
        <span className={cn("rounded-full border px-3 py-1 text-xs font-bold", priorityClass(project.opportunityLevel))}>{project.opportunityLevel}</span>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-700">{project.description}</p>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase text-slate-500">Horizon</p>
          <p className="font-semibold text-night">{project.horizon}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase text-slate-500">Statut</p>
          <p className="font-semibold text-night">{project.status}</p>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="flex items-center gap-2 text-sm font-bold text-night"><Target className="h-4 w-4 text-orangeAccent" /> Objectifs</h3>
        <ul className="mt-2 space-y-1 text-sm text-slate-700">
          {project.objectives.map((objective) => <li key={objective}>• {objective}</li>)}
        </ul>
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-bold text-night">Acteurs et rôles</h3>
        <div className="mt-2 space-y-2">
          {project.actors.map((relation) => {
            const actor = getActorById(relation.actorId);
            return (
              <button
                key={`${project.id}-${relation.actorId}-${relation.roleType}`}
                type="button"
                onClick={() => actor && onSelectActor(actor)}
                className="block w-full rounded-2xl border border-slate-200 p-3 text-left transition hover:border-cyanAccent hover:bg-cyan-50/40"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-night">{actor?.name ?? relation.actorId}</span>
                  <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-bold", actorTypeClass(relation.roleType))}>{relation.roleType}</span>
                </div>
                <p className="mt-1 text-xs leading-5 text-slate-600">{relation.roleDescription}</p>
                {relation.notes && <p className="mt-1 text-xs italic text-slate-500">{relation.notes}</p>}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-bold text-night">Métiers / compétences</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.skills.map((skill) => <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{skill}</span>)}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-orange-200 bg-orange-50 p-4">
        <h3 className="text-sm font-bold text-orange-900">Angle de prospection recommandé</h3>
        <p className="mt-1 text-sm leading-6 text-orange-900/90">{project.recommendedProspectingAngle}</p>
      </div>

      <div className="mt-4 space-y-1 text-sm text-slate-700">
        {project.commercialNotes.map((note) => <p key={note}>• {note}</p>)}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button type="button" onClick={() => exportAsJson(`${project.id}.json`, project)} className="inline-flex items-center gap-2 rounded-full bg-night px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
          <Download className="h-4 w-4" /> Exporter JSON
        </button>
        <button type="button" onClick={() => void copyText(summary)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-cyanAccent hover:text-night">
          <Copy className="h-4 w-4" /> Copier résumé commercial
        </button>
      </div>
    </aside>
  );
}
