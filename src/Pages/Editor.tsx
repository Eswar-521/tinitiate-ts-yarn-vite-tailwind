import { useState } from "react";
import { FaEdit, FaSave, FaTrash } from "react-icons/fa";

const Editor = () => {
  const [code, setCode] = useState("");

  const handleSave = () => {
    alert("✅ Your code has been saved!\n\n" + code);
  };

  const handleClear = () => {
    setCode("");
  };

  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-5xl mx-auto bg-slate-800/90 backdrop-blur rounded-2xl p-8 shadow-2xl border border-slate-700">
        <h1 className="text-5xl font-extrabold text-center text-purple-400 mb-10 tracking-tight drop-shadow">
          <FaEdit className="inline-block mr-3 text-purple-300 animate-bounce" />
          Online Editor
        </h1>

        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-inner focus-within:ring-2 focus-within:ring-purple-500 transition-all">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-[400px] bg-slate-900 text-green-400 font-mono p-4 resize-none outline-none focus:ring-0 focus:border-0"
            placeholder="// Start typing your code here..."
          />
        </div>

        <div className="flex justify-end mt-6 space-x-3">
          <button
            onClick={handleSave}
            className="flex items-center bg-purple-600 hover:bg-purple-700 active:scale-95 text-white px-5 py-2 rounded shadow transition"
          >
            <FaSave className="mr-2" /> Save
          </button>
          <button
            onClick={handleClear}
            className="flex items-center bg-rose-600 hover:bg-rose-700 active:scale-95 text-white px-5 py-2 rounded shadow transition"
          >
            <FaTrash className="mr-2" /> Clear
          </button>
        </div>

        <div className="mt-12 text-center text-slate-400 border-t border-slate-700 pt-6 text-base">
          <p>
            For a professional experience, you could integrate{" "}
            <strong>Monaco Editor</strong> (like VS Code) or{" "}
            <strong>CodeMirror</strong> in the future with syntax highlighting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Editor;
