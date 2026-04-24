import { useEffect, useMemo, useState } from "react";
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

type FocusState =
  | { kind: "root" }
  | { kind: "project"; projectId: string }
  | { kind: "actor"; actorId: string; previousProjectId?: string };

function pointOnCircle(index: number, total: number, radius: number, center: Point, offset = -Math.PI / 2): Point {
  const angle = offset + (index / Math.max(total, 1)) * Math.PI * 2;
  return {
    x: center.x + Math.cos(angle) * radius,
    y: center.y + Math.sin(angle) * radius,
  };
}

function shortLabel(label: string, max = 28) {
  return label.length > max ? `${label.slice(0, max - 1)}…` : label;
}

function splitLabel(label: string, maxChars = 17, maxLines = 3) {
  const words = label.split(" ");
  const lines: string[] = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;

    if (next.length <= maxChars) {
      current = next;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  });

  if (current) lines.push(current);

  const limited = lines.slice(0, maxLines);
  if (lines.length > maxLines) {
    limited[maxLines - 1] = `${limited[maxLines - 1].slice(0, Math.max(4, maxChars - 1))}…`;
  }

  return limited;
}

function actorTypeLabel(actor: Actor) {
  if (actor.actorTypes.includes("Compte prioritaire")) return "Compte prioritaire";
  if (actor.actorTypes.includes("Donneur d'ordre / MOA")) return "MOA";
  if (actor.actorTypes.includes("MOE")) return "MOE";
  if (actor.actorTypes.includes("AMO")) return "AMO";
  if (actor.actorTypes.includes("Intégrateur")) return "Intégrateur";
  if (actor.actorTypes.includes("Fournisseur")) return "Fournisseur";
  if (actor.actorTypes.includes("Sous-traitant")) return "Sous-traitant";
  if (actor.actorTypes.includes("Régulateur")) return "Régulateur";
  if (actor.actorTypes.includes("Exploitant")) return "Exploitant";
  return actor.actorTypes[0] ?? "Acteur";
}

function opportunityBadgeClass(level: string) {
  if (level === "Fort") return "fill-orange-100 stroke-orange-300 text-orange-900";
  if (level === "Moyen") return "fill-cyan-100 stroke-cyan-300 text-cyan-900";
  if (level === "Faible") return "fill-slate-100 stroke-slate-300 text-slate-800";
  return "fill-violet-100 stroke-violet-300 text-violet-900";
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
  const center = { x: 650, y: 375 };

  const [focus, setFocus] = useState<FocusState>({ kind: "root" });

  const projectById = useMemo(() => {
    return new Map(projects.map((project) => [project.id, project]));
  }, [projects]);

  const actorById = useMemo(() => {
    return new Map(actors.map((actor) => [actor.id, actor]));
  }, [actors]);

  useEffect(() => {
    if (selectedActorId && actorById.has(selectedActorId)) {
      setFocus((current) => ({
        kind: "actor",
        actorId: selectedActorId,
        previousProjectId: current.kind === "project" ? current.projectId : selectedProjectId,
      }));
      return;
    }

    if (selectedProjectId && projectById.has(selectedProjectId)) {
      setFocus({ kind: "project", projectId: selectedProjectId });
    }
  }, [selectedProjectId, selectedActorId, projectById, actorById]);

  const focusedProject = focus.kind === "project" ? projectById.get(focus.projectId) : undefined;
  const focusedActor = focus.kind === "actor" ? actorById.get(focus.actorId) : undefined;

  const relatedActors =
    focusedProject?.actors
      .map((relation) => actorById.get(relation.actorId))
      .filter(Boolean) as Actor[] | undefined;

  const actorRelatedProjects =
    focusedActor?.relatedProjects
      .map((projectId) => projectById.get(projectId))
      .filter(Boolean) as Project[] | undefined;

  const skillsToShow =
    focus.kind === "project" && focusedProject
      ? focusedProject.skills.slice(0, 18)
      : focus.kind === "actor" && focusedActor
        ? focusedActor.specialties.slice(0, 18)
        : [];

  const projectNodes = useMemo(() => {
    if (focus.kind === "root") {
      return projects.map((project, index) => ({
        project,
        point: pointOnCircle(index, projects.length, 275, center),
        role: "Projet",
        size: 118,
        isCenter: false,
        isFaded: false,
      }));
    }

    if (focus.kind === "project" && focusedProject) {
      return [
        {
          project: focusedProject,
          point: center,
          role: "Centre actuel",
          size: 190,
          isCenter: true,
          isFaded: false,
        },
      ];
    }

    if (focus.kind === "actor" && actorRelatedProjects) {
      return actorRelatedProjects.map((project, index) => ({
        project,
        point: pointOnCircle(index, actorRelatedProjects.length, 270, center),
        role: "Projet lié",
        size: 125,
        isCenter: false,
        isFaded: false,
      }));
    }

    return [];
  }, [focus, projects, focusedProject, actorRelatedProjects]);

  const actorNodes = useMemo(() => {
    if (focus.kind === "project" && relatedActors) {
      return relatedActors.map((actor, index) => ({
        actor,
        point: pointOnCircle(index, relatedActors.length, 265, center, -Math.PI / 2 + 0.12),
        role: actorTypeLabel(actor),
        size: actor.actorTypes.includes("Compte prioritaire") ? 132 : 122,
        isCenter: false,
        isFaded: false,
      }));
    }

    if (focus.kind === "actor" && focusedActor) {
      return [
        {
          actor: focusedActor,
          point: center,
          role: "Centre actuel",
          size: 190,
          isCenter: true,
          isFaded: false,
        },
      ];
    }

    return [];
  }, [focus, relatedActors, focusedActor]);

  function handleProjectClick(project: Project, isCenter: boolean) {
    if (isCenter) {
      setFocus({ kind: "root" });
      return;
    }

    setFocus({ kind: "project", projectId: project.id });
    onSelectProject(project);
  }

  function handleActorClick(actor: Actor, isCenter: boolean) {
    if (isCenter) {
      if (focus.kind === "actor" && focus.previousProjectId) {
        const previousProject = projectById.get(focus.previousProjectId);
        if (previousProject) {
          setFocus({ kind: "project", projectId: previousProject.id });
          onSelectProject(previousProject);
          return;
        }
      }

      setFocus({ kind: "root" });
      return;
    }

    setFocus({
      kind: "actor",
      actorId: actor.id,
      previousProjectId: focus.kind === "project" ? focus.projectId : undefined,
    });
    onSelectActor(actor);
  }

  const centerTitle =
    focus.kind === "project" && focusedProject
      ? focusedProject.name
      : focus.kind === "actor" && focusedActor
        ? focusedActor.name
        : title;

  const subtitle =
    focus.kind === "root"
      ? "Cliquez sur un projet pour le placer au centre"
      : focus.kind === "project"
        ? "Cliquez sur un acteur pour le placer au centre · cliquez le centre pour revenir"
        : "Cliquez le centre pour revenir au projet précédent";

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
      <div className="mb-3 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-bold text-night">Cartographie interactive progressive</h2>
          <p className="text-sm text-slate-600">{subtitle}</p>
        </div>

        <Legend />
      </div>

      <div className="mb-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Centre actuel</p>
          <p className="mt-1 font-bold text-night">{shortLabel(centerTitle, 42)}</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Niveau affiché</p>
          <p className="mt-1 font-bold text-night">
            {focus.kind === "root" ? "Projets" : focus.kind === "project" ? "Acteurs du projet" : "Projets de l'acteur"}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Action retour</p>
          <p className="mt-1 font-bold text-night">Cliquez sur le nœud central</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
        <svg viewBox="0 0 1300 820" role="img" aria-label="Cartographie progressive" className="h-[590px] w-full min-w-[900px]">
          <defs>
            <filter id="softShadowReadable" x="-25%" y="-25%" width="150%" height="150%">
              <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#020617" floodOpacity="0.35" />
            </filter>

            <radialGradient id="centerGradientReadable" cx="50%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#0e7490" />
              <stop offset="100%" stopColor="#0f172a" />
            </radialGradient>

            <linearGradient id="projectGradientReadable" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>

            <linearGradient id="actorGradientReadable" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>

          <rect x="28" y="28" width="1244" height="764" rx="34" fill="#020617" opacity="0.18" />
          <circle cx={center.x} cy={center.y} r="320" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="5 12" opacity="0.75" />
          <circle cx={center.x} cy={center.y} r="215" fill="none" stroke="#155e75" strokeWidth="1" strokeDasharray="7 9" opacity="0.75" />

          {focus.kind === "root" && (
            <g>
              <text x={center.x} y={center.y - 12} textAnchor="middle" className="fill-white text-[25px] font-bold">
                {shortLabel(title, 28)}
              </text>
              <text x={center.x} y={center.y + 18} textAnchor="middle" className="fill-cyan-100 text-[14px]">
                Cliquez sur un projet
              </text>
              <text x={center.x} y={center.y + 42} textAnchor="middle" className="fill-slate-300 text-[12px]">
                La carte se dépliera étape par étape
              </text>
            </g>
          )}

          {projectNodes.map(({ project, point, isCenter }) => {
            const selected = focus.kind === "project" && focus.projectId === project.id;
            const lines = splitLabel(project.name, isCenter ? 22 : 16, isCenter ? 3 : 2);
            const width = isCenter ? 245 : 150;
            const height = isCenter ? 142 : 104;

            return (
              <g
                key={`project-${project.id}`}
                onClick={() => handleProjectClick(project, isCenter)}
                className="cursor-pointer"
                style={{
                  transform: `translate(${point.x}px, ${point.y}px)`,
                  transition: "transform 520ms cubic-bezier(.2,.8,.2,1), opacity 260ms ease",
                }}
              >
                {!isCenter && (
                  <line
                    x1={center.x - point.x}
                    y1={center.y - point.y}
                    x2="0"
                    y2="0"
                    stroke={selected ? "#f97316" : "#67e8f9"}
                    strokeWidth={selected ? 3 : 1.5}
                    opacity={selected ? 0.9 : 0.45}
                  />
                )}

                <rect
                  x={-width / 2}
                  y={-height / 2}
                  width={width}
                  height={height}
                  rx="24"
                  fill={isCenter ? "url(#centerGradientReadable)" : "url(#projectGradientReadable)"}
                  stroke={isCenter ? "#67e8f9" : "#cffafe"}
                  strokeWidth={isCenter ? 3 : 2}
                  filter="url(#softShadowReadable)"
                />

                <text textAnchor="middle" className="fill-white font-bold">
                  {lines.map((line, index) => (
                    <tspan key={line} x="0" y={-18 + index * 18} className={isCenter ? "text-[17px]" : "text-[12px]"}>
                      {line}
                    </tspan>
                  ))}
                </text>

                <rect
                  x={-(isCenter ? 78 : 58)}
                  y={isCenter ? 42 : 27}
                  width={isCenter ? 156 : 116}
                  height="24"
                  rx="12"
                  className={opportunityBadgeClass(project.opportunityLevel)}
                />

                <text x="0" y={isCenter ? 58 : 43} textAnchor="middle" className="fill-slate-900 text-[10px] font-bold">
                  {project.opportunityLevel}
                </text>

                {isCenter && (
                  <text x="0" y="85" textAnchor="middle" className="fill-cyan-100 text-[11px] font-semibold">
                    Cliquez ici pour revenir
                  </text>
                )}
              </g>
            );
          })}

          {actorNodes.map(({ actor, point, isCenter }) => {
            const isMajor = actor.actorTypes.includes("Compte prioritaire");
            const lines = splitLabel(actor.name, isCenter ? 22 : 16, isCenter ? 3 : 2);
            const width = isCenter ? 245 : 150;
            const height = isCenter ? 142 : 104;

            return (
              <g
                key={`actor-${actor.id}`}
                onClick={() => handleActorClick(actor, isCenter)}
                className="cursor-pointer"
                style={{
                  transform: `translate(${point.x}px, ${point.y}px)`,
                  transition: "transform 520ms cubic-bezier(.2,.8,.2,1), opacity 260ms ease",
                }}
              >
                {!isCenter && (
                  <line
                    x1={center.x - point.x}
                    y1={center.y - point.y}
                    x2="0"
                    y2="0"
                    stroke={isMajor ? "#fed7aa" : "#cbd5e1"}
                    strokeWidth={isMajor ? 2.5 : 1.5}
                    opacity={isMajor ? 0.72 : 0.5}
                  />
                )}

                <rect
                  x={-width / 2}
                  y={-height / 2}
                  width={width}
                  height={height}
                  rx="24"
                  fill={isCenter ? "url(#centerGradientReadable)" : isMajor ? "url(#actorGradientReadable)" : "#f8fafc"}
                  stroke={isCenter ? "#67e8f9" : isMajor ? "#fed7aa" : "#cbd5e1"}
                  strokeWidth={isCenter ? 3 : 2}
                  filter="url(#softShadowReadable)"
                />

                <text textAnchor="middle" className={cn("font-bold", isCenter || isMajor ? "fill-white" : "fill-night")}>
                  {lines.map((line, index) => (
                    <tspan key={line} x="0" y={-18 + index * 18} className={isCenter ? "text-[17px]" : "text-[12px]"}>
                      {line}
                    </tspan>
                  ))}
                </text>

                <rect
                  x={-(isCenter ? 82 : 62)}
                  y={isCenter ? 42 : 27}
                  width={isCenter ? 164 : 124}
                  height="24"
                  rx="12"
                  fill={isMajor ? "#fff7ed" : "#e0f2fe"}
                  stroke={isMajor ? "#fdba74" : "#7dd3fc"}
                />

                <text x="0" y={isCenter ? 58 : 43} textAnchor="middle" className="fill-slate-900 text-[10px] font-bold">
                  {shortLabel(actorTypeLabel(actor), isCenter ? 24 : 16)}
                </text>

                {isCenter && (
                  <text x="0" y="85" textAnchor="middle" className="fill-cyan-100 text-[11px] font-semibold">
                    Cliquez ici pour revenir
                  </text>
                )}
              </g>
            );
          })}

          {skillsToShow.length > 0 && (
            <g>
              <rect x="60" y="675" width="1180" height="96" rx="24" fill="#ffffff" opacity="0.94" />
              <text x="86" y="703" className="fill-slate-500 text-[13px] font-semibold uppercase tracking-wider">
                {focus.kind === "actor" ? "Spécialités de l'acteur sélectionné" : "Spécialités du projet sélectionné"}
              </text>

              {skillsToShow.map((skill, index) => {
                const x = 86 + (index % 6) * 190;
                const y = 724 + Math.floor(index / 6) * 28;

                return (
                  <g key={`${skill}-${index}`}>
                    <rect x={x} y={y} width="174" height="21" rx="10.5" fill="#f1f5f9" stroke="#cbd5e1" />
                    <text x={x + 10} y={y + 15} className="fill-slate-800 text-[11px] font-medium">
                      {shortLabel(skill, 24)}
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

        <button
          type="button"
          onClick={() => setFocus({ kind: "root" })}
          className="rounded-full border border-slate-200 px-3 py-1.5 font-semibold text-slate-600 hover:border-cyanAccent hover:text-night"
        >
          Réinitialiser la carte
        </button>
      </div>
    </section>
  );
}
