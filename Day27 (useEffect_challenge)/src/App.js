
import { useEffect, useState } from 'react';
import './App.css';


function App() {

    let [count, setCount] = useState(0)

    useEffect(() => {

      document.title = `Clicked me ${count} times`
    })

  return (

    <div className="App">
      
    {/* <button onClick={() => {setCount(count + 1)}} >{document.title = `Cilcked me ${count} times`} </button> */}
    <h1>{count}</h1>
    
    <button onClick={() =>{setCount(count + 1)}}>Click me {count}</button>
      
    </div>
  );
}

export default App