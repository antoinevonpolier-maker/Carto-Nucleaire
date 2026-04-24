import { BriefcaseBusiness, Copy } from "lucide-react";
import type { Actor, CommercialOpportunity, Project } from "../types/mapping";
import { getActorById, getProjectById } from "../data/nuclearMapping";
import { cn, copyText, priorityClass } from "../utils";

interface OpportunityPanelProps {
  opportunities: CommercialOpportunity[];
  onSelectProject: (project: Project) => void;
  onSelectActor: (actor: Actor) => void;
}

export default function OpportunityPanel({ opportunities, onSelectProject, onSelectActor }: OpportunityPanelProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold text-night"><BriefcaseBusiness className="h-5 w-5 text-orangeAccent" /> Opportunités commerciales</h2>
          <p className="mt-1 text-sm text-slate-600">Transformation des besoins techniques en angles de prospection exploitables.</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{opportunities.length} compétences</span>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-2">
        {opportunities.map((opportunity) => {
          const summary = `${opportunity.skill}\nProjets: ${opportunity.projects.map((id) => getProjectById(id)?.name ?? id).join(", ")}\nActeurs: ${opportunity.actors.map((id) => getActorById(id)?.name ?? id).join(", ")}\nAngle: ${opportunity.angle}`;
          return (
            <article key={opportunity.id} className="rounded-3xl border border-slate-200 p-4 transition hover:border-cyanAccent hover:shadow-soft">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-night">{opportunity.skill}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{opportunity.description}</p>
                </div>
                <span className={cn("shrink-0 rounded-full border px-2.5 py-1 text-xs font-bold", priorityClass(opportunity.opportunityLevel))}>{opportunity.opportunityLevel}</span>
              </div>

              <div className="mt-4 rounded-2xl bg-orange-50 p-3 text-sm text-orange-950">
                <span className="font-semibold">Angle commercial : </span>{opportunity.angle}
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Projets</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {opportunity.projects.map((projectId) => {
                      const project = getProjectById(projectId);
                      return (
                        <button key={projectId} type="button" onClick={() => project && onSelectProject(project)} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 hover:border-cyanAccent hover:text-night">
                          {project?.name ?? projectId}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Acteurs</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {opportunity.actors.map((actorId) => {
                      const actor = getActorById(actorId);
                      return (
                        <button key={actorId} type="button" onClick={() => actor && onSelectActor(actor)} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 hover:border-orangeAccent hover:text-night">
                          {actor?.name ?? actorId}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Prospects types :</span>
                {opportunity.prospectTypes.map((type) => <span key={type} className="rounded-full bg-slate-100 px-2.5 py-1">{type}</span>)}
                <button type="button" onClick={() => void copyText(summary)} className="ml-auto inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 font-semibold text-slate-600 hover:border-cyanAccent hover:text-night">
                  <Copy className="h-3.5 w-3.5" /> Copier
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
