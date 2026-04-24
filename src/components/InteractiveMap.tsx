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

export default function InteractiveMap({
  title,
  projects,
  actors,
  selectedProjectId,
  selectedActorId,
  onSelectProject,
  onSelectActor,
}: InteractiveMapProps) {
  const center = { x: 650, y: 420 };
  const projectPositions = new Map<string, Point>();
  const visibleActorIds = new Set(projects.flatMap((project) => project.actors.map((relation) => relation.actorId)));
  const visibleActors = actors.filter((actor) => visibleActorIds.has(actor.id));
  const actorPositions = new Map<string, Point>();

  projects.forEach((project, index) => projectPositions.set(project.id, pointOnCircle(index, projects.length, 220, center)));
  visibleActors.forEach((actor, index) => actorPositions.set(actor.id, pointOnCircle(index, visibleActors.length, 355, center, -Math.PI / 2 + 0.08)));

  const selectedProject = projects.find((project) => project.id === selectedProjectId);
  const skillNodes = selectedProject?.skills.slice(0, 16) ?? [];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
      <div className="mb-3 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-bold text-night">Cartographie interactive en pieuvre</h2>
          <p className="text-sm text-slate-600">{title} · {projects.length} projets · {visibleActors.length} acteurs reliés</p>
        </div>
        <Legend />
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-cyan-50">
        <svg viewBox="0 0 1300 840" role="img" aria-label="Cartographie pieuvre" className="h-[560px] w-full min-w-[900px]">
          <defs>
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0f172a" floodOpacity="0.16" />
            </filter>
          </defs>

          {projects.map((project) => {
            const projectPoint = projectPositions.get(project.id)!;
            return (
              <line
                key={`domain-${project.id}`}
                x1={center.x}
                y1={center.y}
                x2={projectPoint.x}
                y2={projectPoint.y}
                stroke="#94a3b8"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
            );
          })}

          {projects.flatMap((project) => {
            const projectPoint = projectPositions.get(project.id)!;
            return project.actors.map((relation) => {
              const actorPoint = actorPositions.get(relation.actorId);
              if (!actorPoint) return null;
              const active = selectedProjectId === project.id || selectedActorId === relation.actorId;
              return (
                <line
                  key={`${project.id}-${relation.actorId}`}
                  x1={projectPoint.x}
                  y1={projectPoint.y}
                  x2={actorPoint.x}
                  y2={actorPoint.y}
                  stroke={active ? "#f97316" : "#cbd5e1"}
                  strokeWidth={active ? 2.3 : 1}
                  opacity={active ? 0.9 : 0.48}
                />
              );
            });
          })}

          <g filter="url(#softShadow)">
            <circle cx={center.x} cy={center.y} r="86" fill="#0f172a" />
            <text x={center.x} y={center.y - 8} textAnchor="middle" className="fill-white text-[19px] font-bold">
              {shortLabel(title, 22)}
            </text>
            <text x={center.x} y={center.y + 20} textAnchor="middle" className="fill-cyan-100 text-[12px]">
              Domaine central
            </text>
          </g>

          {projects.map((project) => {
            const point = projectPositions.get(project.id)!;
            const selected = selectedProjectId === project.id;
            return (
              <g key={project.id} onClick={() => onSelectProject(project)} className="cursor-pointer">
                <title>{`${project.name} — ${project.domain}`}</title>
                <circle cx={point.x} cy={point.y} r={selected ? 49 : 42} fill={selected ? "#0891b2" : "#06b6d4"} filter="url(#softShadow)" />
                <circle cx={point.x} cy={point.y} r={selected ? 54 : 46} fill="none" stroke={selected ? "#f97316" : "#ffffff"} strokeWidth={selected ? 4 : 2} opacity="0.95" />
                <text x={point.x} y={point.y - 4} textAnchor="middle" className="fill-white text-[12px] font-bold">
                  {shortLabel(project.name, 18)}
                </text>
                <text x={point.x} y={point.y + 14} textAnchor="middle" className="fill-cyan-50 text-[10px]">
                  {project.opportunityLevel}
                </text>
              </g>
            );
          })}

          {visibleActors.map((actor) => {
            const point = actorPositions.get(actor.id)!;
            const selected = selectedActorId === actor.id;
            const isMajor = actor.actorTypes.includes("Compte prioritaire");
            return (
              <g key={actor.id} onClick={() => onSelectActor(actor)} className="cursor-pointer">
                <title>{`${actor.name} — ${actor.actorTypes.join(", ")}`}</title>
                <circle cx={point.x} cy={point.y} r={selected ? 35 : isMajor ? 29 : 24} fill={isMajor ? "#f97316" : "#e2e8f0"} filter="url(#softShadow)" />
                <circle cx={point.x} cy={point.y} r={selected ? 39 : isMajor ? 32 : 27} fill="none" stroke={selected ? "#0f172a" : "#ffffff"} strokeWidth={selected ? 4 : 2} />
                <text x={point.x} y={point.y + 4} textAnchor="middle" className={cn("node-label text-[10px] font-bold", isMajor ? "fill-white" : "fill-night")}>
                  {shortLabel(actor.name, 18)}
                </text>
              </g>
            );
          })}

          {skillNodes.length > 0 && (
            <g>
              <text x="55" y="720" className="fill-slate-500 text-[13px] font-semibold uppercase tracking-wider">Spécialités du projet sélectionné</text>
              {skillNodes.map((skill, index) => {
                const x = 55 + (index % 4) * 285;
                const y = 746 + Math.floor(index / 4) * 34;
                return (
                  <g key={skill}>
                    <rect x={x} y={y} width="260" height="24" rx="12" fill="#ffffff" stroke="#cbd5e1" />
                    <text x={x + 12} y={y + 16} className="fill-slate-700 text-[12px]">{shortLabel(skill, 35)}</text>
                  </g>
                );
              })}
            </g>
          )}
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {Array.from(new Set(projects.map((project) => project.opportunityLevel))).map((level) => (
          <span key={level} className={cn("rounded-full border px-3 py-1 font-semibold", priorityClass(level))}>{level}</span>
        ))}
      </div>
    </section>
  );
}
