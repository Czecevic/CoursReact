import React,{ useState } from "react";
// Exercice 4

function App(props) {
  const [count, setCount] = useState(props.number);
  const names = ['John Doe', 'Jane Doe', 'Jane Du'];
  
  return (
    <div>
      {names.map((name) => {
        return (
          <div>
            <h1 key={name}> hello {name}</h1>
          </div>
        )
      })}
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 2)}>-2</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    )
  }
  
  export default App