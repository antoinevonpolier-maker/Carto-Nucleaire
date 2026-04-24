import { Building2, Copy } from "lucide-react";
import type { Actor, MajorAccount, Project } from "../types/mapping";
import { getActorById, getProjectById } from "../data/nuclearMapping";
import { cn, copyText, priorityClass } from "../utils";

interface AccountZoomProps {
  accounts: MajorAccount[];
  onSelectActor: (actor: Actor) => void;
  onSelectProject: (project: Project) => void;
}

export default function AccountZoom({ accounts, onSelectActor, onSelectProject }: AccountZoomProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <div>
        <h2 className="flex items-center gap-2 text-xl font-bold text-night"><Building2 className="h-5 w-5 text-cyanAccent" /> Comptes majeurs</h2>
        <p className="mt-1 text-sm text-slate-600">Comptes demandés dans la consigne, avec importance, projets associés et angles de prospection.</p>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-2">
        {accounts.map((account) => {
          const actor = getActorById(account.actorId);
          const text = `${actor?.name ?? account.actorId}\nPourquoi important: ${account.whyImportant}\nProjets: ${account.projects.map((id) => getProjectById(id)?.name ?? id).join(", ") || "Non précisé dans les documents"}\nOpportunités: ${account.opportunities.join(", ")}`;
          return (
            <article key={account.actorId} className="rounded-3xl border border-slate-200 p-4 transition hover:border-orangeAccent hover:shadow-soft">
              <div className="flex items-start justify-between gap-3">
                <button type="button" onClick={() => actor && onSelectActor(actor)} className="text-left">
                  <span className="text-xs font-semibold uppercase tracking-wide text-orange-700">Compte</span>
                  <h3 className="text-lg font-bold text-night hover:text-orangeAccent">{actor?.name ?? account.actorId}</h3>
                </button>
                <span className={cn("rounded-full border px-2.5 py-1 text-xs font-bold", priorityClass(account.priority))}>{account.priority}</span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-700">{account.whyImportant}</p>

              {!!account.subsidiariesOrRelatedEntities?.length && (
                <div className="mt-3 rounded-2xl bg-cyan-50 p-3 text-sm text-cyan-950">
                  <span className="font-semibold">Filiales / entités liées : </span>{account.subsidiariesOrRelatedEntities.join(" · ")}
                </div>
              )}

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Projets associés</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {account.projects.length ? account.projects.map((projectId) => {
                    const project = getProjectById(projectId);
                    return (
                      <button key={projectId} type="button" onClick={() => project && onSelectProject(project)} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 hover:border-cyanAccent hover:text-night">
                        {project?.name ?? projectId}
                      </button>
                    );
                  }) : <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">Non précisé dans les documents</span>}
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Spécialités</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {account.specialties.map((item) => <span key={item} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">{item}</span>)}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Opportunités</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {account.opportunities.map((item) => <span key={item} className="rounded-full bg-orange-50 px-2.5 py-1 text-xs text-orange-800">{item}</span>)}
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-1 text-sm text-slate-600">
                {account.notes.map((note) => <p key={note}>• {note}</p>)}
              </div>

              <button type="button" onClick={() => void copyText(text)} className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-cyanAccent hover:text-night">
                <Copy className="h-4 w-4" /> Copier note compte
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
