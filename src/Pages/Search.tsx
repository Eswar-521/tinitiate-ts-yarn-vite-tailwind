import { useState } from "react";
import { FaSearch, FaFilter, FaArrowRight } from "react-icons/fa";

const Search = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching:", query, "in", category);
    // you can later connect this to real API
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          <FaSearch className="inline-block mr-2 text-blue-500" />
          Advanced Search
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
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
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition flex items-center justify-center"
          >
            <FaArrowRight className="mr-2" /> Search
          </button>
        </form>

        {/* Advanced Filters section (expandable idea) */}
        <div className="mt-8 border-t pt-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
            <FaFilter className="mr-2 text-purple-600" />
            Advanced Filters
          </h2>
          <p className="text-gray-500">
            Here you could place filter controls (date ranges, tags, etc.) in
            the future.
          </p>
        </div>

        {/* Search Results placeholder */}
        <div className="mt-8 border-t pt-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Search Results</h2>
          <p className="text-gray-500">
            Your search results will appear here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Search;
