import type { Actor, Project } from "../types/mapping";
import Legend from "./Legend";
import { cn, priorityClass } from "../utils";

interface InteractiveMapProps {
  title: string;
  projects: Project[];
  actors: Actor[];
  selectedProjectId?: string;
  selectedActorId?: string;
  onSelectProject: (project: Project) => void;
  onSelectActor: (actor: Actor) => void;
}

type Point = { x: number; y: number };

function pointOnCircle(index: number, total: number, radius: number, center: Point, offset = -Math.PI / 2): Point {
  const angle = offset + (index / Math.max(total, 1)) * Math.PI * 2;
  return { x: center.x + Math.cos(angle) * radius, y: center.y + Math.sin(angle) * radius };
}

function shortLabel(label: string, max = 24) {
  return label.length > max ? `${label.slice(0, max - 1)}…` : label;
}

function actorTypeLabel(actor: Actor) {
  if (actor.actorTypes.includes("Compte prioritaire")) return "Compte prioritaire";
  if (actor.actorTypes.includes("Donneur d'ordre / MOA")) return "MOA";
  if (actor.actorTypes.includes("MOE")) return "MOE";
  if (actor.actorTypes.includes("AMO")) return "AMO";
  if (actor.actorTypes.includes("Intégrateur")) return "Intégrateur";
  if (actor.actorTypes.includes("Fournisseur")) return "Fournisseur";
  if (actor.actorTypes.includes("Sous-traitant")) return "Sous-traitant";
  return actor.actorTypes[0] ?? "Acteur";
}

export default function InteractiveMap({
  title,
  projects,
  actors,
  selectedProjectId,
  selectedActorId,
  onSelectProject,
  onSelectActor,
}: InteractiveMapProps) {
  const center = { x: 650, y: 390 };
  const selectedProject = projects.find((project) => project.id === selectedProjectId);

  const projectPositions = new Map<string, Point>();
  projects.forEach((project, index) => {
    projectPositions.set(project.id, pointOnCircle(index, projects.length, 260, center));
  });

  const selectedActors = selectedProject
    ? selectedProject.actors
        .map((relation) => actors.find((actor) => actor.id === relation.actorId))
        .filter(Boolean) as Actor[]
    : [];

  const actorPositions = new Map<string, Point>();
  selectedActors.forEach((actor, index) => {
    actorPositions.set(actor.id, pointOnCircle(index, selectedActors.length, 245, center, -Math.PI / 2 + 0.15));
  });

  const skillNodes = selectedProject?.skills.slice(0, 18) ?? [];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
      <div className="mb-3 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-bold text-night">Cartographie interactive progressive</h2>
          <p className="text-sm text-slate-600">
            1. Choisis un projet autour du centre · 2. Les acteurs du projet apparaissent · 3. Clique un acteur pour la fiche
          </p>
        </div>
        <Legend />
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
        <svg viewBox="0 0 1300 820" role="img" aria-label="Cartographie progressive" className="h-[570px] w-full min-w-[900px]">
          <defs>
            <filter id="softShadowProgressive" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#020617" floodOpacity="0.35" />
            </filter>

            <radialGradient id="centerGradient" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#0e7490" />
              <stop offset="100%" stopColor="#0f172a" />
            </radialGradient>

            <linearGradient id="projectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>

            <linearGradient id="actorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>

          <circle cx={center.x} cy={center.y} r="330" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4 10" opacity="0.7" />
          <circle cx={center.x} cy={center.y} r="245" fill="none" stroke="#155e75" strokeWidth="1" strokeDasharray="6 8" opacity="0.65" />

          {!selectedProject && (
            <g>
              <text x={center.x} y="705" textAnchor="middle" className="fill-cyan-100 text-[18px] font-bold">
                Clique sur un projet pour afficher uniquement ses acteurs
              </text>
              <text x={center.x} y="730" textAnchor="middle" className="fill-slate-300 text-[13px]">
                La carte est volontairement progressive pour éviter l’effet “tout affiché”.
              </text>
            </g>
          )}

          {projects.map((project) => {
            const projectPoint = projectPositions.get(project.id)!;
            const selected = selectedProjectId === project.id;

            return (
              <line
                key={`domain-${project.id}`}
                x1={center.x}
                y1={center.y}
                x2={projectPoint.x}
                y2={projectPoint.y}
                stroke={selected ? "#f97316" : "#475569"}
                strokeWidth={selected ? 3 : 1.4}
                strokeDasharray={selected ? "0" : "7 8"}
                opacity={selectedProject && !selected ? 0.16 : 0.85}
              />
            );
          })}

          {selectedProject &&
            selectedActors.map((actor) => {
              const actorPoint = actorPositions.get(actor.id)!;
              const selected = selectedActorId === actor.id;

              return (
                <line
                  key={`selected-project-${actor.id}`}
                  x1={center.x}
                  y1={center.y}
                  x2={actorPoint.x}
                  y2={actorPoint.y}
                  stroke={selected ? "#f97316" : "#67e8f9"}
                  strokeWidth={selected ? 3.2 : 1.6}
                  opacity={selected ? 0.95 : 0.62}
                />
              );
            })}

          <g filter="url(#softShadowProgressive)">
            <circle cx={center.x} cy={center.y} r="96" fill="url(#centerGradient)" />
            <circle cx={center.x} cy={center.y} r="104" fill="none" stroke="#67e8f9" strokeWidth="2" opacity="0.8" />
            <text x={center.x} y={center.y - 15} textAnchor="middle" className="fill-white text-[20px] font-bold">
              {selectedProject ? shortLabel(selectedProject.name, 24) : shortLabel(title, 24)}
            </text>
            <text x={center.x} y={center.y + 12} textAnchor="middle" className="fill-cyan-100 text-[12px]">
              {selectedProject ? "Projet sélectionné" : "Domaine central"}
            </text>
            <text x={center.x} y={center.y + 34} textAnchor="middle" className="fill-slate-300 text-[11px]">
              {selectedProject ? `${selectedActors.length} acteurs affichés` : `${projects.length} projets disponibles`}
            </text>
          </g>

          {projects.map((project) => {
            const point = projectPositions.get(project.id)!;
            const selected = selectedProjectId === project.id;
            const faded = Boolean(selectedProjectId) && !selected;

            return (
              <g
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="cursor-pointer transition"
                opacity={faded ? 0.23 : 1}
              >
                <title>{`${project.name} — ${project.domain}`}</title>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={selected ? 55 : 43}
                  fill={selected ? "#f97316" : "url(#projectGradient)"}
                  filter="url(#softShadowProgressive)"
                />
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={selected ? 63 : 50}
                  fill="none"
                  stroke={selected ? "#fed7aa" : "#cffafe"}
                  strokeWidth={selected ? 4 : 2}
                  opacity="0.95"
                />
                <text x={point.x} y={point.y - 5} textAnchor="middle" className="fill-white text-[12px] font-bold">
                  {shortLabel(project.name, 18)}
                </text>
                <text x={point.x} y={point.y + 14} textAnchor="middle" className="fill-cyan-50 text-[10px]">
                  {project.opportunityLevel}
                </text>
              </g>
            );
          })}

          {selectedActors.map((actor) => {
            const point = actorPositions.get(actor.id)!;
            const selected = selectedActorId === actor.id;
            const isMajor = actor.actorTypes.includes("Compte prioritaire");

            return (
              <g key={actor.id} onClick={() => onSelectActor(actor)} className="cursor-pointer">
                <title>{`${actor.name} — ${actor.actorTypes.join(", ")}`}</title>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={selected ? 42 : isMajor ? 36 : 31}
                  fill={isMajor ? "url(#actorGradient)" : "#e2e8f0"}
                  filter="url(#softShadowProgressive)"
                />
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={selected ? 49 : isMajor ? 42 : 36}
                  fill="none"
                  stroke={selected ? "#ffffff" : isMajor ? "#fed7aa" : "#94a3b8"}
                  strokeWidth={selected ? 4 : 2}
                />
                <text
                  x={point.x}
                  y={point.y - 2}
                  textAnchor="middle"
                  className={cn("node-label text-[10px] font-bold", isMajor ? "fill-white" : "fill-night")}
                >
                  {shortLabel(actor.name, 17)}
                </text>
                <text
                  x={point.x}
                  y={point.y + 15}
                  textAnchor="middle"
                  className={cn("node-label text-[8px] font-semibold", isMajor ? "fill-orange-50" : "fill-slate-600")}
                >
                  {shortLabel(actorTypeLabel(actor), 16)}
                </text>
              </g>
            );
          })}

          {skillNodes.length > 0 && (
            <g>
              <text x="55" y="704" className="fill-cyan-100 text-[13px] font-semibold uppercase tracking-wider">
                Spécialités du projet sélectionné
              </text>
              {skillNodes.map((skill, index) => {
                const x = 55 + (index % 4) * 300;
                const y = 730 + Math.floor(index / 4) * 34;
                return (
                  <g key={skill}>
                    <rect x={x} y={y} width="280" height="25" rx="12.5" fill="#ffffff" opacity="0.95" />
                    <text x={x + 12} y={y + 17} className="fill-slate-800 text-[12px] font-medium">
                      {shortLabel(skill, 38)}
                    </text>
                  </g>
                );
              })}
            </g>
          )}
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap gap-2">
          {Array.from(new Set(projects.map((project) => project.opportunityLevel))).map((level) => (
            <span key={level} className={cn("rounded-full border px-3 py-1 font-semibold", priorityClass(level))}>
              {level}
            </span>
          ))}
        </div>

        {selectedProject && (
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-full border border-slate-200 px-3 py-1.5 font-semibold text-slate-600 hover:border-cyanAccent hover:text-night"
          >
            Réinitialiser la carte
          </button>
        )}
      </div>
    </section>
  );
}
