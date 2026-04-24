import type { Actor, FilterState, Project, SearchResult } from "./types/mapping";
import { commercialOpportunities, getProjectById, projects } from "./data/nuclearMapping";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function priorityClass(priority: string) {
  switch (priority) {
    case "Fort":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "Moyen":
      return "bg-cyan-100 text-cyan-800 border-cyan-200";
    case "Faible":
      return "bg-slate-100 text-slate-700 border-slate-200";
    default:
      return "bg-violet-100 text-violet-800 border-violet-200";
  }
}

export function actorTypeClass(type: string) {
  if (type.includes("MOA") || type.includes("Donneur")) return "bg-night text-white";
  if (type === "MOE" || type === "AMO") return "bg-blue-100 text-blue-800";
  if (type === "Intégrateur") return "bg-cyan-100 text-cyan-800";
  if (type === "Fournisseur") return "bg-emerald-100 text-emerald-800";
  if (type === "Sous-traitant") return "bg-amber-100 text-amber-800";
  if (type === "Régulateur") return "bg-slate-200 text-slate-800";
  if (type === "Compte prioritaire") return "bg-orange-100 text-orange-800";
  return "bg-slate-100 text-slate-700";
}

export function domainForTab(tab: string) {
  switch (tab) {
    case "civil":
      return ["Nucléaire civil", "Démantèlement nucléaire", "Grand carénage", "EPR / EPR2", "Cycle du combustible", "Déchets radioactifs / CIGEO", "Recherche nucléaire / RJH", "Fusion / ITER", "SMR / réacteurs innovants"];
    case "defense":
      return ["Défense / propulsion navale", "Dissuasion nucléaire"];
    case "projects":
      return [];
    default:
      return [];
  }
}

export function projectMatchesFilters(project: Project, filters: FilterState) {
  const actorIds = project.actors.map((relation) => relation.actorId);
  const relationActorTypes = project.actors.map((relation) => relation.roleType);

  if (filters.domains.length && !filters.domains.includes(project.domain)) return false;
  if (filters.projectIds.length && !filters.projectIds.includes(project.id)) return false;
  if (filters.skills.length && !filters.skills.some((skill) => project.skills.some((pSkill) => pSkill.toLowerCase().includes(skill.toLowerCase()) || skill.toLowerCase().includes(pSkill.toLowerCase())))) return false;
  if (filters.opportunityLevels.length && !filters.opportunityLevels.includes(project.opportunityLevel)) return false;
  if (filters.horizons.length && !filters.horizons.includes(project.horizon)) return false;
  if (filters.actorTypes.length && !filters.actorTypes.some((type) => relationActorTypes.includes(type))) return false;
  if (filters.onlyMajorAccounts) {
    const majorIds = ["air-liquide", "framatome", "totalenergies", "equans", "edf", "orano", "cea", "naval-group", "technic-atome", "assystem", "egis", "tractebel", "dalkia", "veolia", "vinci", "bouygues", "spie", "onet-technologies", "altrad-endel"];
    if (!actorIds.some((actorId) => majorIds.includes(actorId))) return false;
  }
  return true;
}

export function actorMatchesFilters(actor: Actor, filters: FilterState) {
  if (filters.domains.length && !filters.domains.some((domain) => actor.domains.includes(domain))) return false;
  if (filters.actorTypes.length && !filters.actorTypes.some((type) => actor.actorTypes.includes(type))) return false;
  if (filters.projectIds.length && !filters.projectIds.some((projectId) => actor.relatedProjects.includes(projectId))) return false;
  if (filters.skills.length && !filters.skills.some((skill) => actor.specialties.some((specialty) => specialty.toLowerCase().includes(skill.toLowerCase()) || skill.toLowerCase().includes(specialty.toLowerCase())))) return false;
  if (filters.priorities.length && !filters.priorities.includes(actor.commercialPriority)) return false;
  if (filters.onlyMajorAccounts && !actor.actorTypes.includes("Compte prioritaire")) return false;
  return true;
}

export function buildSearchResults(query: string, actors: Actor[], projectList: Project[]): SearchResult[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];
  const projectResults = projectList
    .filter((project) => [project.name, project.domain, project.category, project.description, project.status, ...project.skills].join(" ").toLowerCase().includes(normalized))
    .map((project) => ({ id: project.id, label: project.name, type: "Projet" as const, description: `${project.domain} · ${project.status}` }));

  const actorResults = actors
    .filter((actor) => [actor.name, ...actor.actorTypes, ...actor.domains, ...actor.specialties, ...actor.commercialNotes].join(" ").toLowerCase().includes(normalized))
    .map((actor) => ({ id: actor.id, label: actor.name, type: "Acteur" as const, description: `${actor.actorTypes.slice(0, 2).join(" · ")} · Priorité ${actor.commercialPriority}` }));

  const skillResults = commercialOpportunities
    .filter((opportunity) => [opportunity.skill, opportunity.description, opportunity.angle].join(" ").toLowerCase().includes(normalized))
    .map((opportunity) => ({ id: opportunity.id, label: opportunity.skill, type: "Compétence" as const, description: `${opportunity.projects.map((id) => getProjectById(id)?.name ?? id).slice(0, 3).join(" · ")}` }));

  return [...projectResults, ...actorResults, ...skillResults].slice(0, 12);
}

export function makeProjectSummary(project: Project) {
  const actorSummary = project.actors.map((relation) => `${relation.roleType}: ${relation.actorId}`).join("; ");
  return `${project.name}\nDomaine: ${project.domain}\nStatut: ${project.status}\nHorizon: ${project.horizon}\nOpportunité: ${project.opportunityLevel}\nDescription: ${project.description}\nCompétences: ${project.skills.join(", ")}\nActeurs: ${actorSummary}\nAngle de prospection: ${project.recommendedProspectingAngle}`;
}

export function makeActorSummary(actor: Actor) {
  const related = actor.relatedProjects.map((projectId) => getProjectById(projectId)?.name ?? projectId).join(", ") || "Non précisé dans les documents";
  return `${actor.name}\nTypes: ${actor.actorTypes.join(", ")}\nDomaines: ${actor.domains.join(", ")}\nPriorité commerciale: ${actor.commercialPriority}\nProjets associés: ${related}\nSpécialités: ${actor.specialties.join(", ")}\nNotes: ${actor.commercialNotes.join(" ")}`;
}

export function exportAsJson(filename: string, payload: unknown) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function projectsForActor(actor: Actor) {
  return actor.relatedProjects.map((projectId) => projects.find((project) => project.id === projectId)).filter(Boolean) as Project[];
}
