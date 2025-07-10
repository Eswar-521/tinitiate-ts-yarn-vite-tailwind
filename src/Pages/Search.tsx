import { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const suggestionsData = [
  "Login Form",
  "Dashboard Analytics",
  "Data Table Example",
  "Audio Player",
  "Video Editor",
  "Comparison Chart",
  "Infographic Templates",
  "Security Settings",
  "Calendar Events",
  "Shopping Cart",
  "User Profile",
  "Animations",
];

const Search = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching:", query, "in", category);
    setResults([
      `Result 1 for "${query}" in ${category}`,
      `Result 2 for "${query}" in ${category}`,
      `Result 3 for "${query}" in ${category}`,
    ]);
    setShowSuggestions(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input);

    if (input.length > 1) {
      const filtered = suggestionsData.filter((s) =>
        s.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <section className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-4xl mx-auto bg-slate-800 shadow-2xl rounded-2xl p-8 border border-slate-700">
        <h1 className="text-4xl font-bold text-center text-fuchsia-400 mb-8">
          <FaSearch className="inline-block mr-2 text-yellow-400" />
          Advanced Search
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 relative">
          <div className="flex flex-col md:flex-row gap-4 relative">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                value={query}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-fuchsia-500 rounded-lg bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {showSuggestions && (
                <ul className="absolute z-10 bg-slate-700 border border-fuchsia-600 rounded shadow mt-1 w-full max-h-48 overflow-auto">
                  {filteredSuggestions.map((s, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleSuggestionClick(s)}
                      className="px-4 py-2 hover:bg-emerald-600 cursor-pointer"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-3 border border-purple-500 rounded-lg bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="all">All Categories</option>
              <option value="comparison">Comparison</option>
              <option value="forms">Forms</option>
              <option value="datatable">Data Tables</option>
              <option value="infographics">Infographics</option>
              <option value="media">Audio / Video</option>
              <option value="animation">Animation</option>
              <option value="calendar">Calendar</option>
              <option value="editor">Online Editor</option>
              <option value="shopping">Shopping Cart</option>
              <option value="dashboard">Dashboard</option>
              <option value="analytics">Analytics</option>
              <option value="security">Security</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-yellow-500 text-slate-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition flex items-center justify-center font-semibold"
          >
            <FaArrowRight className="mr-2" /> Search
          </button>
        </form>

        {/* Advanced Filters */}
        <div className="mt-8 border-t border-fuchsia-600 pt-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-emerald-400 font-semibold focus:outline-none"
          >
            <FaFilter className="mr-2" />
            Advanced Filters
            {showFilters ? (
              <FaChevronUp className="ml-2" />
            ) : (
              <FaChevronDown className="ml-2" />
            )}
          </button>

          {showFilters && (
            <div className="mt-4 space-y-4 text-slate-100">
              <div>
                <label className="block text-sm font-medium mb-1">Date Range</label>
                <input
                  type="date"
                  className="border border-purple-600 rounded px-3 py-2 bg-slate-700 text-slate-100 focus:ring focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Tags</label>
                <input
                  type="text"
                  placeholder="Enter tags"
                  className="border border-purple-600 rounded px-3 py-2 bg-slate-700 text-slate-100 focus:ring focus:ring-yellow-400"
                />
              </div>
            </div>
          )}
        </div>

        {/* Search Results */}
        <div className="mt-8 border-t border-fuchsia-600 pt-4">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Search Results
          </h2>
          {results.length > 0 ? (
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              {results.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-400">
              No results yet. Start searching to see results here.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
