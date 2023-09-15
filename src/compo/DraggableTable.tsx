// DraggableTable.tsx
import React from "react";
import { useVaccinationData } from "./useVaccinationData";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function DraggableTable() {
  const { data } = useVaccinationData();

  return (
    <DragDropContext>
      <Droppable droppableId="vaccinations">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {data?.map((vaccination, index) => (
              <Draggable
                key={vaccination.country}
                draggableId={vaccination.country}
                index={index}
              >
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {/* Render your table row here */}
                    <div className="border p-2">{vaccination.country}</div>
                    <div className="border p-2">{vaccination.date}</div>
                    <div className="border p-2">
                      {vaccination.total_vaccinations}
                    </div>
                    {/* Add more columns as needed */}
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DraggableTable;
