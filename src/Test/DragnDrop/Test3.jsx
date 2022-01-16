import React from 'react'

function Test3({ startdate, enddate }) {
    console.log(startdate);
    return (
        <div>
            <h1>{startdate}</h1>
            <h3>{enddate}</h3>
        </div>
    )
}

export default Test3
