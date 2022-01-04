import React, { useReducer, useState } from 'react'
import './prac.css'


const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            console.log("1", action.type)
            return { count: state.count + 1, showText: state.showText }


        case "toggleShowText":
            console.log("2", action.type)
            return { count: state.count, showText: !state.showText }



        default:
            return state

    }

}

export default function Prac() {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);

    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })





    return (
        <div className='box'>
            <div className="container">
                <h1>{state.showText && "This is a text"}</h1>


            </div>
            <h3>{state.count}</h3>
            <p><button onClick={() => {
                dispatch({ type: "INCREMENT" });
                dispatch({ type: "toggleShowText" })
            }}>Click</button></p>


        </div>
    )
}
