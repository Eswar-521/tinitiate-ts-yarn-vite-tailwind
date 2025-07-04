import { FaTable, FaSort } from "react-icons/fa";

const DataTable = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          <FaTable className="inline-block mr-2 text-emerald-600" />
          Data Table
        </h1>

        <div className="overflow-x-auto rounded shadow">
          <table className="w-full border-collapse text-left">
            <thead className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white">
              <tr>
                <th className="p-4 cursor-pointer">ID <FaSort className="inline ml-1" /></th>
                <th className="p-4 cursor-pointer">Name <FaSort className="inline ml-1" /></th>
                <th className="p-4 cursor-pointer">Email <FaSort className="inline ml-1" /></th>
                <th className="p-4 cursor-pointer">Role <FaSort className="inline ml-1" /></th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="p-4 border">1</td>
                <td className="p-4 border">Alice</td>
                <td className="p-4 border">alice@example.com</td>
                <td className="p-4 border">Admin</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="p-4 border">2</td>
                <td className="p-4 border">Bob</td>
                <td className="p-4 border">bob@example.com</td>
                <td className="p-4 border">User</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="p-4 border">3</td>
                <td className="p-4 border">Charlie</td>
                <td className="p-4 border">charlie@example.com</td>
                <td className="p-4 border">Editor</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination / placeholder */}
        <div className="flex justify-between items-center mt-6 text-gray-600">
          <span>Showing 1 to 3 of 3 results</span>
          <div>
            <button className="px-3 py-1 border rounded mr-2 hover:bg-gray-200">Previous</button>
            <button className="px-3 py-1 border rounded hover:bg-gray-200">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataTable;
