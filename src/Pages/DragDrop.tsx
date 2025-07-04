import { useState } from "react";
import { FaHandPointer, FaGripHorizontal } from "react-icons/fa";

const DragDrop = () => {
  const [items, setItems] = useState(["Item A", "Item B", "Item C"]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    const dragIndex = parseInt(e.dataTransfer.getData("text/plain"));
    if (dragIndex === dropIndex) return;

    const newItems = [...items];
    const [moved] = newItems.splice(dragIndex, 1);
    newItems.splice(dropIndex, 0, moved);
    setItems(newItems);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          <FaHandPointer className="inline-block mr-2 text-emerald-600" />
          Drag & Drop
        </h1>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, index)}
              className="p-4 bg-emerald-100 rounded shadow cursor-grab hover:bg-emerald-200 transition flex items-center space-x-3"
            >
              <FaGripHorizontal className="text-emerald-600" />
              <span className="font-semibold text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-gray-600">
          <p>
            This is a basic drag & drop list. You can extend it with libraries like{" "}
            <strong>react-beautiful-dnd</strong> or <strong>dnd-kit</strong> for
            more advanced features.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DragDrop;
