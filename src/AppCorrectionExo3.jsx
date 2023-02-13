import React from "react";
// Exercice 3 

function App(props) {
    const names = ['John Doe', 'Jane Doe', 'Jane Du'];
  
    return (
      <div>
        {names.map(name => {
          return (
            <div>
              <h1 key={name}> hello {name}</h1>
              <h2>{props.date}</h2>
            </div>
          )
        })}
        </div>
    )
  }
  
  export default App