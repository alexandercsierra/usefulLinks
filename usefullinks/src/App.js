import React, {useState} from "react";
import Search from "./components/Search";
import Nav from "./components/Nav";
import links from "./data/links";
import Card from "./components/Card";
import AddLink from "./components/AddLink";
import {Route} from 'react-router-dom'
import Unit from './components/Unit'


export default function App() {
  const [unit, setUnit] = useState("");
  return (
    <div className="App">
      <Nav setUnit={setUnit}/>
      
      <Route exact path="/"><Search />
      <h1>Lambda Links</h1>
      
      {/* <Card /> */}
      <div>
        Home
      </div></Route>
      <Route path="/unit1"><Unit unit={unit}/></Route>
      <Route path="/unit2"><Unit unit={unit}/></Route>
      <Route path="/unit3"><Unit unit={unit}/></Route>
      
      {/* <Route path="/add"><AddLink /></Route> */}
    </div>
  );
}

