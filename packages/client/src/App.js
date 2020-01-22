import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, updateValue] = useState("")
  useEffect(()=>{
    fetch("/hello").then(res=>res.json()).then((data)=>{
     updateValue(data.message)
    }).catch((err)=>{
    })
  })

  return (
    <div className="App">
      {value}
    </div>
  );
}

export default App;
