import { useState, useEffect } from "react";
import {
  FaBalanceScale,
  FaChartBar,
  FaSort,
  FaSortUp,
  FaSortDown,
  FaFilter,
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

type RowData = {
  feature: string;
  productA: string;
  productB: string;
  productC: string;
  productD: string;
};

const initialData: RowData[] = [
  { feature: "Price", productA: "$29", productB: "$49", productC: "$39", productD: "$59" },
  { feature: "Storage", productA: "✔", productB: "✔", productC: "✖", productD: "✔" },
  { feature: "Support", productA: "Email", productB: "24/7", productC: "Phone", productD: "Chat" },
  { feature: "Analytics", productA: "✔", productB: "✔", productC: "✖", productD: "✔" },
];

const Comparison = () => {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState<{
    column: keyof RowData;
    direction: "asc" | "desc";
  } | null>(null);

  const [animatedRows, setAnimatedRows] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const timeouts = data.map((_, idx) =>
      setTimeout(() => {
        setAnimatedRows((prev) => [...prev, idx]);
      }, 150 * idx)
    );
    return () => timeouts.forEach(clearTimeout);
  }, [data]);

  const sortData = (column: keyof RowData) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.column === column && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ column, direction });

    const sorted = [...data].sort((a, b) => {
      const aVal = a[column].toLowerCase();
      const bVal = b[column].toLowerCase();
      if (aVal < bVal) return direction === "asc" ? -1 : 1;
      if (aVal > bVal) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sorted);
    setAnimatedRows([]);
  };

  const getSortIcon = (column: keyof RowData) => {
    if (!sortConfig || sortConfig.column !== column) {
      return <FaSort className="inline ml-1" />;
    }
    return sortConfig.direction === "asc" ? (
      <FaSortUp className="inline ml-1" />
    ) : (
      <FaSortDown className="inline ml-1" />
    );
  };

  const addRow = () => {
    setData([
      ...data,
      { feature: "New Feature", productA: "-", productB: "-", productC: "-", productD: "-" },
    ]);
  };

  const removeRow = (index: number) => {
    setData(data.filter((_, idx) => idx !== index));
  };

  const updateCell = (rowIndex: number, column: keyof RowData, value: string) => {
    const updated = [...data];
    updated[rowIndex][column] = value;
    setData(updated);
  };

  return (
    <section className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-6xl mx-auto bg-slate-800 shadow-2xl rounded-2xl p-8 border border-slate-700">
        <h1 className="text-4xl font-extrabold text-center text-yellow-400 mb-6 tracking-tight">
          <FaBalanceScale className="inline-block mr-2 text-cyan-400" />
          Product Comparison
        </h1>

        {/* Filters Toggle */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-emerald-400 hover:text-emerald-300"
          >
            <FaFilter className="mr-2" />
            Advanced Filters
            {showFilters ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </button>
          <button
            onClick={addRow}
            className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
          >
            <FaPlus className="mr-2" />
            Add Feature
          </button>
        </div>

        {showFilters && (
          <div className="bg-slate-700 p-4 rounded mb-6 transition-all">
            <label className="block text-sm mb-2">Filter by Feature:</label>
            <input
              type="text"
              placeholder="e.g. Analytics"
              className="w-full px-3 py-2 rounded border border-cyan-500 bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        )}

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="w-full text-left border-collapse border border-slate-700 rounded-lg">
            <thead className="bg-cyan-700 text-slate-100 sticky top-0 z-10">
              <tr>
                <th
                  className="p-4 border border-slate-700 cursor-pointer"
                  onClick={() => sortData("feature")}
                >
                  Feature {getSortIcon("feature")}
                </th>
                <th className="p-4 border border-slate-700 cursor-pointer" onClick={() => sortData("productA")}>
                  Product A {getSortIcon("productA")}
                </th>
                <th className="p-4 border border-slate-700 cursor-pointer" onClick={() => sortData("productB")}>
                  Product B {getSortIcon("productB")}
                </th>
                <th className="p-4 border border-slate-700 cursor-pointer" onClick={() => sortData("productC")}>
                  Product C {getSortIcon("productC")}
                </th>
                <th className="p-4 border border-slate-700 cursor-pointer" onClick={() => sortData("productD")}>
                  Product D {getSortIcon("productD")}
                </th>
                <th className="p-4 border border-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr
                  key={idx}
                  className={`
                    border border-slate-700
                    ${animatedRows.includes(idx) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    transition duration-700
                    hover:bg-slate-700
                  `}
                >
                  {(["feature", "productA", "productB", "productC", "productD"] as (keyof RowData)[]).map((col) => (
                    <td
                      key={col}
                      className="p-4"
                    >
                      <input
                        className="bg-transparent border-b border-yellow-400 focus:outline-none w-full"
                        value={row[col]}
                        onChange={(e) => updateCell(idx, col, e.target.value)}
                      />
                    </td>
                  ))}
                  <td className="p-4 text-center">
                    <button
                      onClick={() => removeRow(idx)}
                      className="text-red-500 hover:text-red-400 transition"
                      aria-label="delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="mt-8 border-t border-cyan-600 pt-4">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center">
            <FaChartBar className="mr-2 text-cyan-400" />
            Comparison Summary
          </h2>
          <p className="text-slate-300 leading-relaxed">
            This dynamic table supports checkmarks, pricing, storage, and features. You can add, remove, and sort features easily. More products can be added too!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
