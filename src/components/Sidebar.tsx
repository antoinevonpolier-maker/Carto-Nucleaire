import type { FilterState, Project, SearchResult } from "../types/mapping";
import Filters from "./Filters";
import SearchBar from "./SearchBar";

interface SidebarProps {
  filters: FilterState;
  domains: string[];
  projects: Project[];
  query: string;
  searchResults: SearchResult[];
  onFilterChange: (filters: FilterState) => void;
  onQueryChange: (query: string) => void;
  onSearchSelect: (result: SearchResult) => void;
}

export default function Sidebar({
  filters,
  domains,
  projects,
  query,
  searchResults,
  onFilterChange,
  onQueryChange,
  onSearchSelect,
}: SidebarProps) {
  return (
    <aside className="h-full overflow-auto rounded-3xl border border-slate-200 bg-white p-4 shadow-soft scrollbar-thin lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)]">
      <SearchBar query={query} results={searchResults} onQueryChange={onQueryChange} onSelect={onSearchSelect} />
      <div className="my-5 h-px bg-slate-200" />
      <Filters filters={filters} domains={domains} projects={projects} onChange={onFilterChange} />
    </aside>
  );
}
