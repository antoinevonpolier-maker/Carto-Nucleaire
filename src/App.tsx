import { useMemo, useState } from "react";
import { Database, FileJson, Info, Rows3 } from "lucide-react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import InteractiveMap from "./components/InteractiveMap";
import ProjectCard from "./components/ProjectCard";
import ActorCard from "./components/ActorCard";
import AccountZoom from "./components/AccountZoom";
import OpportunityPanel from "./components/OpportunityPanel";
import {
  actors,
  commercialContext,
  commercialOpportunities,
  domains,
  getActorById,
  getProjectById,
  getProjectName,
  loadPlan,
  majorAccounts,
  projects,
  sourceDataAudit,
  sourceDocuments,
} from "./data/nuclearMapping";
import type { Actor, FilterState, Project, SearchResult, TabId } from "./types/mapping";
import { actorMatchesFilters, buildSearchResults, cn, domainForTab, priorityClass, projectMatchesFilters } from "./utils";

const emptyFilters: FilterState = {
  domains: [],
  actorTypes: [],
  projectIds: [],
  skills: [],
  opportunityLevels: [],
  priorities: [],
  horizons: [],
  onlyMajorAccounts: false,
};

function SummaryStats({ visibleProjects, visibleActors }: { visibleProjects: Project[]; visibleActors: Actor[] }) {
  const strongProjects = visibleProjects.filter((project) => project.opportunityLevel === "Fort").length;
  const majorActors = visibleActors.filter((actor) => actor.actorTypes.includes("Compte prioritaire")).length;
  return (
    <section className="grid gap-3 md:grid-cols-4">
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Projets visibles</p>
        <p className="mt-2 text-3xl font-bold text-night">{visibleProjects.length}</p>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Acteurs visibles</p>
        <p className="mt-2 text-3xl font-bold text-night">{visibleActors.length}</p>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Opportunités fortes</p>
        <p className="mt-2 text-3xl font-bold text-orangeAccent">{strongProjects}</p>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Comptes prioritaires</p>
        <p className="mt-2 text-3xl font-bold text-cyanAccent">{majorActors}</p>
      </div>
    </section>
  );
}

function ProjectGrid({ projectList, onSelectProject }: { projectList: Project[]; onSelectProject: (project: Project) => void }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <h2 className="text-xl font-bold text-night">Grands projets</h2>
      <p className="mt-1 text-sm text-slate-600">Cliquez une carte pour ouvrir la fiche détaillée dans le panneau de droite.</p>
      <div className="mt-5 grid gap-4 xl:grid-cols-2">
        {projectList.map((project) => (
          <button key={project.id} type="button" onClick={() => onSelectProject(project)} className="rounded-3xl border border-slate-200 p-4 text-left transition hover:border-cyanAccent hover:bg-cyan-50/30 hover:shadow-soft">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold text-night">{project.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{project.domain}</p>
              </div>
              <span className={cn("rounded-full border px-2.5 py-1 text-xs font-bold", priorityClass(project.opportunityLevel))}>{project.opportunityLevel}</span>
            </div>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">{project.horizon}</span>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">{project.status}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function ActorGrid({ actorList, onSelectActor }: { actorList: Actor[]; onSelectActor: (actor: Actor) => void }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <h2 className="text-xl font-bold text-night">Acteurs</h2>
      <p className="mt-1 text-sm text-slate-600">Index global : donneurs d'ordre, MOA, AMO/MOE, intégrateurs, fournisseurs, sous-traitants, régulateurs et industriels fabricants.</p>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {actorList.map((actor) => (
          <button key={actor.id} type="button" onClick={() => onSelectActor(actor)} className="rounded-3xl border border-slate-200 p-4 text-left transition hover:border-orangeAccent hover:bg-orange-50/30 hover:shadow-soft">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-bold text-night">{actor.name}</h3>
              <span className={cn("rounded-full border px-2.5 py-1 text-xs font-bold", priorityClass(actor.commercialPriority))}>{actor.commercialPriority}</span>
            </div>
            <p className="mt-2 text-xs text-slate-500">{actor.actorTypes.join(" · ")}</p>
            <p className="mt-3 line-clamp-2 text-sm text-slate-600">{actor.specialties.join(", ")}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

function LoadPlanView({ onSelectProject }: { onSelectProject: (project: Project) => void }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <h2 className="text-xl font-bold text-night">Plan de charge commercial estimatif</h2>
      <p className="mt-1 text-sm text-slate-600">Vue qualitative construite uniquement à partir des informations présentes dans les documents. Les valeurs inconnues restent non précisées.</p>
      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Projet</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Horizon</th>
              <th className="px-4 py-3">Temporalité</th>
              <th className="px-4 py-3">Opportunité</th>
              <th className="px-4 py-3">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {loadPlan.map((item) => {
              const project = getProjectById(item.projectId);
              return (
                <tr key={item.id} className="align-top hover:bg-slate-50">
                  <td className="px-4 py-3 font-semibold text-night">
                    <button type="button" onClick={() => project && onSelectProject(project)} className="hover:text-cyanAccent">{getProjectName(item.projectId)}</button>
                  </td>
                  <td className="px-4 py-3 text-slate-700">{item.status}</td>
                  <td className="px-4 py-3 text-slate-700">{item.horizon}</td>
                  <td className="px-4 py-3 text-slate-700">{item.timeframe}</td>
                  <td className="px-4 py-3"><span className={cn("rounded-full border px-2.5 py-1 text-xs font-bold", priorityClass(item.opportunityLevel))}>{item.opportunityLevel}</span></td>
                  <td className="px-4 py-3 text-slate-600">{item.notes.join(" · ")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function DataView() {
  return (
    <section className="space-y-5">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
        <h2 className="flex items-center gap-2 text-xl font-bold text-night"><Database className="h-5 w-5 text-cyanAccent" /> Données intégrées</h2>
        <p className="mt-1 text-sm text-slate-600">Table de contrôle pour vérifier que les projets, acteurs, spécialités, comptes et relations sont embarqués dans l'application.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-6">
          <div className="rounded-2xl bg-slate-50 p-4"><p className="text-xs uppercase text-slate-500">Domaines</p><p className="text-2xl font-bold text-night">{domains.length}</p></div>
          <div className="rounded-2xl bg-slate-50 p-4"><p className="text-xs uppercase text-slate-500">Projets</p><p className="text-2xl font-bold text-night">{projects.length}</p></div>
          <div className="rounded-2xl bg-slate-50 p-4"><p className="text-xs uppercase text-slate-500">Acteurs</p><p className="text-2xl font-bold text-night">{actors.length}</p></div>
          <div className="rounded-2xl bg-slate-50 p-4"><p className="text-xs uppercase text-slate-500">Opportunités</p><p className="text-2xl font-bold text-night">{commercialOpportunities.length}</p></div>
          <div className="rounded-2xl bg-slate-50 p-4"><p className="text-xs uppercase text-slate-500">Lignes source</p><p className="text-2xl font-bold text-night">{sourceDataAudit.length}</p></div>
          <div className="rounded-2xl bg-slate-50 p-4"><p className="text-xs uppercase text-slate-500">Pages PDF</p><p className="text-2xl font-bold text-night">{sourceDocuments.reduce((total, document) => total + document.pageCount, 0)}</p></div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
        <h3 className="flex items-center gap-2 text-lg font-bold text-night"><Info className="h-5 w-5 text-orangeAccent" /> Notes de contexte commercial</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          {commercialContext.notes.map((note) => <li key={note}>• {note}</li>)}
        </ul>
      </div>


      <div className="rounded-3xl border border-orangeAccent/30 bg-orangeAccent/5 p-5 shadow-soft">
        <h3 className="flex items-center gap-2 text-lg font-bold text-night"><Database className="h-5 w-5 text-orangeAccent" /> Données source exhaustives et traçabilité</h3>
        <p className="mt-2 text-sm text-slate-700">
          Cette section embarque les informations extraites des PDF dans l'application : chaque ligne source est reliée quand possible à un projet, un acteur et des compétences. Le texte complet extrait des pages PDF est aussi visible plus bas.
        </p>
        <div className="mt-4 max-h-[620px] overflow-auto rounded-2xl border border-orangeAccent/20 bg-white scrollbar-thin">
          <table className="min-w-[1200px] divide-y divide-slate-200 text-sm">
            <thead className="sticky top-0 bg-orange-50 text-left text-xs uppercase tracking-wide text-slate-600">
              <tr>
                <th className="px-4 py-3">Source</th>
                <th className="px-4 py-3">Section</th>
                <th className="px-4 py-3">Information présentée</th>
                <th className="px-4 py-3">Projets liés</th>
                <th className="px-4 py-3">Acteurs liés</th>
                <th className="px-4 py-3">Compétences liées</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sourceDataAudit.map((item) => (
                <tr key={item.id} className="align-top hover:bg-orange-50/50">
                  <td className="px-4 py-3 font-semibold text-night">{item.source}</td>
                  <td className="px-4 py-3 text-slate-700">{item.section}</td>
                  <td className="px-4 py-3 text-slate-700">{item.information}</td>
                  <td className="px-4 py-3 text-slate-600">{item.relatedProjects.map(getProjectName).join(" · ") || "Non lié à un projet précis"}</td>
                  <td className="px-4 py-3 text-slate-600">{item.relatedActors.map((actorId) => getActorById(actorId)?.name ?? actorId).join(" · ") || "Non lié à un acteur précis"}</td>
                  <td className="px-4 py-3 text-slate-600">{item.relatedSkills.join(" · ") || "Non précisé"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
        <h3 className="flex items-center gap-2 text-lg font-bold text-night"><FileJson className="h-5 w-5 text-cyanAccent" /> Texte source complet intégré dans l'application</h3>
        <p className="mt-2 text-sm text-slate-600">
          Cette zone sert de filet de sécurité : elle présente le texte extrait des PDF page par page, pour éviter qu'une information reste uniquement dans les documents d'origine.
        </p>
        <div className="mt-4 grid gap-4">
          {sourceDocuments.map((document) => (
            <div key={document.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h4 className="font-bold text-night">{document.title}</h4>
              <p className="text-xs uppercase tracking-wide text-slate-500">{document.pageCount} page(s) intégrée(s)</p>
              <div className="mt-3 grid gap-3">
                {document.pages.map((page) => (
                  <details key={`${document.id}-${page.page}`} className="rounded-xl border border-slate-200 bg-white p-3">
                    <summary className="cursor-pointer font-semibold text-slate-800">Page {page.page}</summary>
                    <pre className="mt-3 max-h-96 overflow-auto whitespace-pre-wrap rounded-xl bg-slate-950 p-4 text-xs leading-relaxed text-slate-100 scrollbar-thin">{page.text}</pre>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
        <h3 className="flex items-center gap-2 text-lg font-bold text-night"><Rows3 className="h-5 w-5 text-cyanAccent" /> Projets et relations</h3>
        <div className="mt-4 max-h-[560px] overflow-auto rounded-2xl border border-slate-200 scrollbar-thin">
          <table className="min-w-[1100px] divide-y divide-slate-200 text-sm">
            <thead className="sticky top-0 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
              <tr><th className="px-4 py-3">Projet</th><th className="px-4 py-3">Domaine</th><th className="px-4 py-3">Horizon</th><th className="px-4 py-3">Opportunité</th><th className="px-4 py-3">Acteurs</th><th className="px-4 py-3">Compétences</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {projects.map((project) => (
                <tr key={project.id} className="align-top hover:bg-slate-50">
                  <td className="px-4 py-3 font-semibold text-night">{project.name}</td>
                  <td className="px-4 py-3 text-slate-700">{project.domain}</td>
                  <td className="px-4 py-3 text-slate-700">{project.horizon}</td>
                  <td className="px-4 py-3 text-slate-700">{project.opportunityLevel}</td>
                  <td className="px-4 py-3 text-slate-600">{project.actors.map((relation) => `${getActorById(relation.actorId)?.name ?? relation.actorId} (${relation.roleType})`).join(" · ")}</td>
                  <td className="px-4 py-3 text-slate-600">{project.skills.join(" · ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
        <h3 className="flex items-center gap-2 text-lg font-bold text-night"><FileJson className="h-5 w-5 text-orangeAccent" /> Acteurs</h3>
        <div className="mt-4 max-h-[560px] overflow-auto rounded-2xl border border-slate-200 scrollbar-thin">
          <table className="min-w-[1000px] divide-y divide-slate-200 text-sm">
            <thead className="sticky top-0 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
              <tr><th className="px-4 py-3">Acteur</th><th className="px-4 py-3">Types</th><th className="px-4 py-3">Domaines</th><th className="px-4 py-3">Priorité</th><th className="px-4 py-3">Projets</th><th className="px-4 py-3">Spécialités</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {actors.map((actor) => (
                <tr key={actor.id} className="align-top hover:bg-slate-50">
                  <td className="px-4 py-3 font-semibold text-night">{actor.name}</td>
                  <td className="px-4 py-3 text-slate-700">{actor.actorTypes.join(" · ")}</td>
                  <td className="px-4 py-3 text-slate-700">{actor.domains.join(" · ")}</td>
                  <td className="px-4 py-3 text-slate-700">{actor.commercialPriority}</td>
                  <td className="px-4 py-3 text-slate-600">{actor.relatedProjects.map(getProjectName).join(" · ") || "Non précisé"}</td>
                  <td className="px-4 py-3 text-slate-600">{actor.specialties.join(" · ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("global");
  const [filters, setFilters] = useState<FilterState>(emptyFilters);
  const [query, setQuery] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id ?? "");
  const [selectedActorId, setSelectedActorId] = useState<string | undefined>();

  const tabDomains = domainForTab(activeTab);
  const domainNames = domains.map((domain) => domain.name);

  const visibleProjects = useMemo(() => {
    return projects.filter((project) => {
      if (tabDomains.length && !tabDomains.includes(project.domain)) return false;
      return projectMatchesFilters(project, filters);
    });
  }, [filters, tabDomains]);

  const visibleActorIds = new Set(visibleProjects.flatMap((project) => project.actors.map((relation) => relation.actorId)));
  const visibleActors = useMemo(() => {
    return actors.filter((actor) => {
      if (tabDomains.length && !tabDomains.some((domain) => actor.domains.includes(domain))) return false;
      if (!actorMatchesFilters(actor, filters)) return false;
      if (activeTab === "global" || activeTab === "civil" || activeTab === "defense") {
        return visibleActorIds.has(actor.id) || actor.actorTypes.includes("Compte prioritaire");
      }
      return true;
    });
  }, [filters, tabDomains, activeTab, visibleActorIds]);

  const selectedProject = getProjectById(selectedProjectId) ?? visibleProjects[0];
  const selectedActor = selectedActorId ? getActorById(selectedActorId) : undefined;

  const searchResults = useMemo(() => buildSearchResults(query, actors, projects), [query]);

  function selectProject(project: Project) {
    setSelectedProjectId(project.id);
    setSelectedActorId(undefined);
  }

  function selectActor(actor: Actor) {
    setSelectedActorId(actor.id);
  }

  function handleSearchSelect(result: SearchResult) {
    if (result.type === "Projet") {
      const project = getProjectById(result.id);
      if (project) selectProject(project);
    }
    if (result.type === "Acteur") {
      const actor = getActorById(result.id);
      if (actor) selectActor(actor);
    }
    if (result.type === "Compétence") {
      const opportunity = commercialOpportunities.find((item) => item.id === result.id);
      if (opportunity) {
        setFilters({ ...filters, skills: [opportunity.skill] });
        setActiveTab("opportunities");
      }
    }
    setQuery("");
  }

  const mapTitle = filters.domains[0] ?? (activeTab === "defense" ? "Défense / propulsion navale" : activeTab === "civil" ? "Nucléaire civil" : "Écosystème nucléaire");

  const mainView = (() => {
    if (activeTab === "accounts") return <AccountZoom accounts={majorAccounts} onSelectActor={selectActor} onSelectProject={selectProject} />;
    if (activeTab === "opportunities") return <OpportunityPanel opportunities={commercialOpportunities} onSelectActor={selectActor} onSelectProject={selectProject} />;
    if (activeTab === "loadplan") return <LoadPlanView onSelectProject={selectProject} />;
    if (activeTab === "data") return <DataView />;
    if (activeTab === "projects") return <ProjectGrid projectList={visibleProjects} onSelectProject={selectProject} />;
    if (activeTab === "actors") return <ActorGrid actorList={visibleActors} onSelectActor={selectActor} />;
    return (
      <div className="space-y-4">
        <SummaryStats visibleProjects={visibleProjects} visibleActors={visibleActors} />
        <InteractiveMap
          title={mapTitle}
          projects={visibleProjects}
          actors={actors}
          selectedProjectId={selectedProject?.id}
          selectedActorId={selectedActor?.id}
          onSelectProject={selectProject}
          onSelectActor={selectActor}
        />
      </div>
    );
  })();

  return (
    <div className="min-h-screen bg-slate-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="mx-auto grid max-w-[1800px] gap-4 px-4 py-4 lg:grid-cols-[320px_minmax(0,1fr)_390px] lg:px-6">
        <Sidebar
          filters={filters}
          domains={domainNames}
          projects={projects}
          query={query}
          searchResults={searchResults}
          onFilterChange={setFilters}
          onQueryChange={setQuery}
          onSearchSelect={handleSearchSelect}
        />
        <div className="min-w-0">{mainView}</div>
        <div className="space-y-4 lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:overflow-auto lg:pr-1 scrollbar-thin">
          {selectedActor ? <ActorCard actor={selectedActor} onSelectProject={selectProject} /> : <ProjectCard project={selectedProject} onSelectActor={selectActor} />}
        </div>
      </main>
    </div>
  );
}
