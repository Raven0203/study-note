import React, { Component } from "react";
import ReactDOM from "react-dom";
import AnimatedNumber from "animated-number-react";


function Depositsnum({num,duration}) {
  
  let state = {
    value: num/* ={}?Math.round(Math.random()*10000):num1 */,
    duration: duration
  };

  let formatValue = (value) => `${Number(value).toFixed(0)}`;
     
      return (
        <>
         
          <AnimatedNumber
            value={state.value}
            formatValue={formatValue}
            duration={state.duration}
          />

        </>
      );
    
}

export default Depositsnum



/* class App extends Component {
    state = {
      value: 1500,
      duration: 300
    };
  
    formatValue = (value) => `$ ${Number(value).toFixed(0)}`;
    render() {
      return (
        <div>
          <br />
          <AnimatedNumber
            value={this.state.value}
            formatValue={this.formatValue}
            duration={this.state.duration}
          />
  
          <br />
        </div>
      );
    }
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
   */