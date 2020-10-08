import React, { useState } from 'react';
import './App.css';
import Title from './components/Title'
import Description from './components/Description'
import Select from './components/Select'

function App() {
  const [clique,setClique] = useState(false)
  const PagePresentation = () =>{
    return clique?<Select/>:<Description fx={handleClick}/>
  }
  const handleClick = () => {
    setClique({clique: true,})
  }
  return <div>
    <Title/>
    <PagePresentation/>
  </div>
}

export default App;
