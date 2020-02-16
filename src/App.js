import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [results, setResults] = useState([]);


  useEffect(() => {
    async function getAll() {
      const result = await axios("/api/people")
      setResults(result.data);
      console.log(result.data.body)
    }
    getAll()
  }, [])




  return (
    <div className="App">
      <header className="App-header">
        <div>{results.map(item => (
          <ul key={item.id}>
            Name: {item.name}
            <br />
            Age: {item.age}
            <br></br>
          </ul>
        ))}
        </div>

      </header>
    </div>
  );
}

export default App;
