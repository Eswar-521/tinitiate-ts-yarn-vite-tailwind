import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaHandPointer, FaGripVertical, FaRedo } from "react-icons/fa";

const initialItems = [
  { id: "1", content: "Item A" },
  { id: "2", content: "Item B" },
  { id: "3", content: "Item C" },
];

const DragDrop = () => {
  const [items, setItems] = useState(initialItems);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const reordered = Array.from(items);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);

    setItems(reordered);
  };

  const handleReset = () => setItems(initialItems);

  return (
    <section className="min-h-screen bg-sky-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-8 border-2 border-sky-600">
        <h1 className="text-4xl font-bold text-center text-sky-700 mb-8 flex items-center justify-center gap-2">
          <FaHandPointer className="text-sky-600" /> Advanced Drag & Drop
        </h1>

        <div className="flex justify-end mb-4">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
          >
            <FaRedo /> Reset
          </button>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="space-y-4"
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`p-4 bg-sky-50 rounded shadow border border-sky-400 flex items-center justify-between ${
                          snapshot.isDragging
                            ? "bg-sky-200"
                            : "hover:bg-sky-100"
                        } transition`}
                      >
                        <div className="flex items-center gap-3">
                          <FaGripVertical className="text-sky-700" />
                          <span className="font-semibold text-sky-800">
                            {item.content}
                          </span>
                        </div>
                        <span className="text-xs text-sky-600">
                          Position: {index + 1}
                        </span>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <div className="mt-10 text-center text-sky-700">
          <p>
            Built with <strong>react-beautiful-dnd</strong> for powerful,
            accessible drag and drop.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DragDrop;
