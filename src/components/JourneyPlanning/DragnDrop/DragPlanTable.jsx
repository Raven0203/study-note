import Button from "@mui/material/Button";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { v4 as uuid } from "uuid";
import DeleteIcon from '@mui/icons-material/Delete';


var itemsFromBackend = [
    { id: "1", content: "test ONE" },
    { id: "2", content: "test Second task" },
    { id: "3", content: "test Third task" },
    { id: "4", content: "test Fourth task" },
    { id: "5", content: "test Fifth task" },
    { id: "6", content: "test Six task" },
    { id: "7", content: "test Seven task" },
    { id: "8", content: "test Eight task" }
];

export const day = [
    { id: "1", content: "Day 1" },
    { id: "2", content: "Day 2" },
    { id: "3", content: "Day 3" },
    { id: "4", content: "Day 4" },
    { id: "5", content: "Day 5" },
    { id: "6", content: "Day 6" },
]

export const userdays = JSON.parse(localStorage.getItem("userdays")) || day;

//console.log("DragPlanTable-userdays", userdays[0].content);

//____
localStorage.setItem("list", JSON.stringify(itemsFromBackend));







const columnsFromBackend = {
    [uuid()]: {
        name: "我的景點",
        items: JSON.parse(localStorage.getItem("list")),
        content: day

    }
};

const handleClick = () => {
    let a = [{ id: "1", title: '你好' }];

    for (var b = 0; b < 5; b++) {
        a.push({ id: (2 + b).toString(), title: `你好${b}` });

    }
    console.log(a);
    // var gooddata = { id: JSON.stringify(getdata.length + 1), content: "我還是愛著你" };
    // getdata.push(gooddata);
    // localStorage.setItem("list", JSON.stringify(getdata))


    // console.log(itemsFromBackend);
}

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};

function DragPlanTable() {
    const [columns, setColumns] = useState(columnsFromBackend);
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
            <DragDropContext
                onDragEnd={result => onDragEnd(result, columns, setColumns)}
            >
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                {/* {day.map((item, index) => <li key={item.id}>{item.content}</li>)} */}
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                                key={columnId}
                            >
                                <h2>{column.name}</h2>
                                <input type="text" name="" id="" className="test-input" />
                                <button onClick={handleClick}>ADD</button>
                                <div style={{ margin: 8 }}>
                                    <Droppable droppableId={columnId} key={columnId}>
                                        {(provided, snapshot) => {
                                            return (
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={{
                                                        borderRadius: ' 0.3rem',
                                                        boxShadow: '0.1rem 0.1rem 0.4rem #aaaaaa',
                                                        background: snapshot.isDraggingOver
                                                            ? "lightblue"
                                                            : "white",
                                                        padding: 4,
                                                        width: 350,
                                                        minHeight: 500
                                                    }}
                                                >

                                                    {column.items.map((item, index) => {
                                                        return (
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={item.id}
                                                                index={index}
                                                            >
                                                                {(provided, snapshot) => {
                                                                    return (
                                                                        <div
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                            style={{
                                                                                borderRadius: ' 0.3rem',
                                                                                boxShadow: '0.2rem 0.5rem 0.4rem #aaaaaa',
                                                                                userSelect: "none",
                                                                                padding: 16,
                                                                                margin: "0 0 8px 0",
                                                                                minHeight: "50px",
                                                                                backgroundColor: snapshot.isDragging
                                                                                    ? "#263B4A"
                                                                                    : "white",
                                                                                display: 'flex',
                                                                                justifyContent: 'space-between',

                                                                                color: snapshot.isDragging ? "white" : "black",
                                                                                ...provided.draggableProps.style
                                                                            }}
                                                                        >
                                                                            {item.content}

                                                                            <Button color='error' ><DeleteIcon onClick={() => alert("Loading...")}></DeleteIcon></Button>
                                                                        </div>
                                                                    );
                                                                }}
                                                            </Draggable>
                                                        );
                                                    })}

                                                    {provided.placeholder}
                                                </div>

                                            );
                                        }}
                                    </Droppable>
                                </div>
                            </div>
                        </div >
                    );
                })}
            </DragDropContext >
        </div >
    );
}

export default DragPlanTable;
