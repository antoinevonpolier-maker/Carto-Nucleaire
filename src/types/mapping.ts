export type ActorType =
  | "Donneur d'ordre / MOA"
  | "AMO"
  | "MOE"
  | "Intégrateur"
  | "Fournisseur"
  | "Sous-traitant"
  | "Exploitant"
  | "Régulateur"
  | "Industriel fabricant"
  | "Financeur"
  | "Utilisateur"
  | "Responsable de lot"
  | "Compte prioritaire";

export type OpportunityLevel = "Fort" | "Moyen" | "Faible" | "À qualifier";
export type Horizon = "Court terme" | "Moyen terme" | "Long terme" | "Non précisé" | "Projet sensible / limité";

export type TabId =
  | "global"
  | "civil"
  | "defense"
  | "projects"
  | "actors"
  | "accounts"
  | "opportunities"
  | "loadplan"
  | "data";

export type NodeKind = "domain" | "project" | "actor" | "skill";

export interface Domain {
  id: string;
  name: string;
  category: string;
  description: string;
  caution?: string;
}

export interface ProjectActorRelation {
  actorId: string;
  roleType: ActorType;
  roleDescription: string;
  notes?: string;
}

export interface Project {
  id: string;
  name: string;
  domain: string;
  category: string;
  description: string;
  objectives: string[];
  actors: ProjectActorRelation[];
  skills: string[];
  horizon: Horizon;
  status: string;
  opportunityLevel: OpportunityLevel;
  commercialNotes: string[];
  recommendedProspectingAngle: string;
  sourceNotes?: string[];
}

export interface Actor {
  id: string;
  name: string;
  actorTypes: ActorType[];
  domains: string[];
  specialties: string[];
  relatedProjects: string[];
  subsidiariesOrRelatedEntities?: string[];
  commercialPriority: OpportunityLevel;
  commercialNotes: string[];
}

export interface MajorAccount {
  actorId: string;
  whyImportant: string;
  projects: string[];
  specialties: string[];
  opportunities: string[];
  subsidiariesOrRelatedEntities?: string[];
  priority: OpportunityLevel;
  notes: string[];
}

export interface CommercialOpportunity {
  id: string;
  skill: string;
  description: string;
  projects: string[];
  actors: string[];
  prospectTypes: string[];
  angle: string;
  horizon: Horizon;
  opportunityLevel: OpportunityLevel;
}

export interface LoadPlanItem {
  id: string;
  projectId: string;
  status: string;
  horizon: Horizon;
  timeframe: string;
  opportunityLevel: OpportunityLevel;
  notes: string[];
}


export interface SourceDocumentPage {
  page: number;
  text: string;
}

export interface SourceDocument {
  id: string;
  title: string;
  filename: string;
  pageCount: number;
  pages: SourceDocumentPage[];
}

export interface SourceDataAuditItem {
  id: string;
  source: string;
  section: string;
  information: string;
  relatedProjects: string[];
  relatedActors: string[];
  relatedSkills: string[];
}

export interface FilterState {
  domains: string[];
  actorTypes: ActorType[];
  projectIds: string[];
  skills: string[];
  opportunityLevels: OpportunityLevel[];
  priorities: OpportunityLevel[];
  horizons: Horizon[];
  onlyMajorAccounts: boolean;
}

export interface SearchResult {
  id: string;
  label: string;
  type: "Projet" | "Acteur" | "Compétence";
  description: string;
}
