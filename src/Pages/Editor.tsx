import { FaEdit, FaCode } from "react-icons/fa";

const Editor = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          <FaEdit className="inline-block mr-2 text-purple-600" />
          Online Editor
        </h1>

        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md">
          {/* Placeholder for code editor */}
          <textarea
            className="w-full h-[400px] bg-gray-900 text-green-400 font-mono p-4 resize-none outline-none"
            placeholder="// Start typing your code here..."
          ></textarea>
        </div>

        <div className="flex justify-end mt-4 space-x-2">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition">
            Save
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition">
            Clear
          </button>
        </div>

        <div className="mt-10 text-center text-gray-600">
          <p>
            For a more advanced code editor experience, you can integrate{" "}
            <strong>Monaco Editor</strong> or <strong>CodeMirror</strong> later.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Editor;
