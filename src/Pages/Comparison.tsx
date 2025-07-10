import { useState, useEffect } from "react";
import {
  FaBalanceScale,
  FaChartBar,
  FaSort,
  FaSortUp,
  FaSortDown,
} from "react-icons/fa";

type RowData = {
  feature: string;
  productA: string;
  productB: string;
  productC: string;
};

const initialData: RowData[] = [
  { feature: "Price", productA: "$29", productB: "$49", productC: "$39" },
  { feature: "Storage", productA: "10GB", productB: "50GB", productC: "30GB" },
  { feature: "Support", productA: "Email", productB: "24/7", productC: "Phone & Email" },
];

const Comparison = () => {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState<{ column: keyof RowData; direction: "asc" | "desc" } | null>(null);

  const [animatedRows, setAnimatedRows] = useState<number[]>([]);

  useEffect(() => {
    // animate the rows on mount
    const timeouts = data.map((_, idx) =>
      setTimeout(() => {
        setAnimatedRows((prev) => [...prev, idx]);
      }, 200 * idx)
    );
    return () => {
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, [data]);

  const sortData = (column: keyof RowData) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.column === column && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ column, direction });

    const sorted = [...data].sort((a, b) => {
      const aVal = a[column].toString().toLowerCase();
      const bVal = b[column].toString().toLowerCase();
      if (aVal < bVal) return direction === "asc" ? -1 : 1;
      if (aVal > bVal) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sorted);
    setAnimatedRows([]); // reset animations on sort
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

  return (
    <section className="min-h-screen bg-violet-900 text-slate-100 p-8">
      <div className="max-w-5xl mx-auto bg-violet-800 shadow-2xl rounded-2xl p-8 border border-violet-700">
        <h1 className="text-4xl font-bold text-center text-rose-400 mb-6">
          <FaBalanceScale className="inline-block mr-2 text-cyan-400" />
          Product Comparison
        </h1>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse shadow border border-violet-700 rounded-lg">
            <thead className="bg-cyan-700 text-slate-100">
              <tr>
                <th
                  className="p-4 border border-violet-700 cursor-pointer"
                  onClick={() => sortData("feature")}
                >
                  Feature {getSortIcon("feature")}
                </th>
                <th
                  className="p-4 border border-violet-700 cursor-pointer"
                  onClick={() => sortData("productA")}
                >
                  Product A {getSortIcon("productA")}
                </th>
                <th
                  className="p-4 border border-violet-700 cursor-pointer"
                  onClick={() => sortData("productB")}
                >
                  Product B {getSortIcon("productB")}
                </th>
                <th
                  className="p-4 border border-violet-700 cursor-pointer"
                  onClick={() => sortData("productC")}
                >
                  Product C {getSortIcon("productC")}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr
                  key={idx}
                  className={`
                    border border-violet-700
                    ${animatedRows.includes(idx) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    transition duration-700
                    hover:bg-rose-700
                  `}
                >
                  <td className="p-4">{row.feature}</td>
                  <td className="p-4 text-emerald-300">{row.productA}</td>
                  <td className="p-4 text-yellow-300">{row.productB}</td>
                  <td className="p-4 text-purple-300">{row.productC}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="mt-8 border-t border-cyan-600 pt-4">
          <h2 className="text-xl font-semibold text-rose-400 mb-4 flex items-center">
            <FaChartBar className="mr-2 text-emerald-400" />
            Comparison Summary
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Click table headers to sort columns ascending or descending, with smooth row animations. Add more features and products as needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
