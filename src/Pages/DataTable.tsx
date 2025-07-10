import { useState } from "react";
import { FaTable, FaSort, FaEdit, FaTrash, FaSearch, FaPlus, FaTimes } from "react-icons/fa";

const DataTable = () => {
  const [data, setData] = useState([
    { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "User" },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "Editor" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ id: null, name: "", email: "", role: "" });

  // FILTER
  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ADD / EDIT
  const handleSave = () => {
    if (!modalData.name || !modalData.email || !modalData.role) {
      alert("Please fill in all fields.");
      return;
    }
    if (modalData.id) {
      // edit
      setData((prev) =>
        prev.map((item) =>
          item.id === modalData.id ? modalData : item
        )
      );
    } else {
      // add
      setData((prev) => [
        ...prev,
        { ...modalData, id: prev.length + 1 }
      ]);
    }
    setIsModalOpen(false);
    setModalData({ id: null, name: "", email: "", role: "" });
  };

  // DELETE
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this record?")) {
      setData((prev) => prev.filter((row) => row.id !== id));
    }
  };

  return (
    <section className="min-h-screen bg-sky-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl p-6 border-2 border-sky-600 space-y-6">
        <h1 className="text-4xl font-bold text-center text-sky-800 flex items-center justify-center gap-2">
          <FaTable className="text-sky-600" /> Dynamic Data Table
        </h1>

        {/* Search and add button */}
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center mt-4">
          <div className="flex w-full md:w-1/2 items-center border rounded px-3 py-2 shadow-inner bg-sky-50">
            <FaSearch className="text-sky-600 mr-2" />
            <input
              type="text"
              placeholder="Search by name, email, or role..."
              className="w-full outline-none bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
            onClick={() => {
              setModalData({ id: null, name: "", email: "", role: "" });
              setIsModalOpen(true);
            }}
          >
            <FaPlus /> Add New
          </button>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto rounded shadow border border-sky-400">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-sky-600 text-white sticky top-0 z-10">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr
                  key={row.id}
                  className={index % 2 === 0 ? "bg-white hover:bg-sky-50 transition" : "bg-sky-50 hover:bg-sky-100 transition"}
                >
                  <td className="p-4">{row.id}</td>
                  <td className="p-4">{row.name}</td>
                  <td className="p-4">{row.email}</td>
                  <td className="p-4">{row.role}</td>
                  <td className="p-4 flex gap-3">
                    <button
                      title="Edit"
                      className="text-sky-600 hover:text-sky-800 transition"
                      onClick={() => {
                        setModalData(row);
                        setIsModalOpen(true);
                      }}
                    >
                      <FaEdit />
                    </button>
                    <button
                      title="Delete"
                      className="text-red-600 hover:text-red-800 transition"
                      onClick={() => handleDelete(row.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-sky-700 font-semibold">
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination (mock static for now) */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sky-700 gap-3">
          <span>Showing {filteredData.length} results</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-sky-400 rounded hover:bg-sky-200 transition">Previous</button>
            <button className="px-3 py-1 border border-sky-400 rounded bg-sky-600 text-white hover:bg-sky-700 transition">1</button>
            <button className="px-3 py-1 border border-sky-400 rounded hover:bg-sky-200 transition">Next</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded shadow-xl p-6 w-96 space-y-4 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold text-sky-700">
              {modalData.id ? "Edit Record" : "Add New Record"}
            </h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-2 rounded"
              value={modalData.name}
              onChange={(e) => setModalData({ ...modalData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 rounded"
              value={modalData.email}
              onChange={(e) => setModalData({ ...modalData, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Role"
              className="w-full border p-2 rounded"
              value={modalData.role}
              onChange={(e) => setModalData({ ...modalData, role: e.target.value })}
            />
            <button
              onClick={handleSave}
              className="w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-700 transition"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DataTable;
