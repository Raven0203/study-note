import React, { useState } from 'react';
const App = (props) => {
  const [repo, setRepo] = useState();
  const handleClick = () => {
    fetch( 'http://localhost:8080/journey/2',{method:"GET"})
    .then(res => res.json())
    .then(data => {
        //setRepo(JSON.stringify(data));
        setRepo(data['journeydetail'])
    })
    .catch(e => {
        console.log(e);
    })
  }
  return (  
    <div className="App">
    <div className="data-display">
      {(repo===undefined) ? "目前還有沒有資料" : repo}
     
    </div>
    <button onClick={handleClick}>取得memberAPI</button>
    </div>
  );
};
export default App;