import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { departmentstoredata } from './departmentstore'






export default function Search() {
    const [place, setPlace] = useState([]);
    const [exist, setExist] = useState(true);
    let data;
    const searchref = useRef(null);
    const [serachTerm, setSearchTerm] = useState("");


    const style = {
        width: '100vw',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '50px'
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const res = await axios.get('/maps/api/place/textsearch/json', '?key=AIzaSyA1A_ajOEo-A7Mpuhm000U4zK-sGAvlTQc&language=zh-TW&query=台中百貨公司', {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            baseURL: "https://maps.googleapis.com"
        })
        console.log(res.data.results);
        setPlace(res.data.results)
        //console.log("plcae write complete");
        // .then(() => console.log("data write complete"))
        // .catch((error) => console.log(error))
        //console.log(place);
        // console.log(place.map((item) => item.name));



        searchref.current.focus();
        // if (searchref.current.value !== null && (searchref.current.value).length !== 0) {
        //     // await setPlace(departmentstoredata.map((item) => item.formatted_address))
        //     // console.log([...place]);
        //     // console.log(searchref);
        //     // setExist(true)
        // }
    }

    useEffect(() => {
        //axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyA1A_ajOEo-A7Mpuhm000U4zK-sGAvlTQc&language=zh-TW&query=台中景點`)
    }, [])

    return (
        <>
            <div style={style}>
                搜尋:<input type="text" ref={searchref} onChange={(e) => setSearchTerm(e.target.value)} />
                <button onClick={handleClick}>Search</button>
                <button onClick={() => setExist(!exist)}>Close</button>
                {exist ?

                    (departmentstoredata
                        .filter((val) => {
                            if (serachTerm === "") {
                                return val
                            } else if (val.name.toLocaleLowerCase().includes(serachTerm.toLocaleLowerCase())) {
                                return val
                            } else if (val.rating.toLocaleString().includes(serachTerm.toLocaleLowerCase())) {
                                return val
                            } else if (val.user_ratings_total.toLocaleString().includes(serachTerm.toLocaleLowerCase())) {
                                return val
                            }
                            else if (val.formatted_address.toLocaleLowerCase().includes(serachTerm.toLocaleLowerCase())) {
                                return val
                            }
                        })
                        .map((item, index) =>
                            <div key={index}>
                                <h3 >景點名稱：{item.name}
                                    <li >評分：{item.rating}</li><p>總評分數：{item.user_ratings_total}</p>
                                    <li >地址：{item.formatted_address}</li>
                                    <li>Location:<br></br>lat:{item.geometry.location.lat}<br />lng:{item.geometry.location.lng}</li>
                                </h3>
                                <hr />
                            </div>
                        ))
                    :
                    (<h1>Nothing...</h1>)}
            </div>


        </>
    )
}


