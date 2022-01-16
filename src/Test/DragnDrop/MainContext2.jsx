import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid'

function MainContext2() {
    return (
        <Droppable>
            {(provided, snapshot) => {
                const { droppableProps, innerRef, placeholder } = provided
                const { isDraggingOver } = snapshot

                return (
                    <div ref={innerRef} {...droppableProps} data-is-over={isDraggingOver}>
                        <h2>Drop on ME!! 🙌</h2>
                        {placeholder}
                    </div>
                )

            }}

        </Droppable>
    )
}

export default MainContext2
