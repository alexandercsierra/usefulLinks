import React from "react";
import Search from "./components/Search";
import Nav from "./components/Nav";
import links from "./data/links";
import Card from "./components/Card";
import AddLink from "./components/AddLink";
import {Route} from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Useful Links</h1>
      <Route exact path="/"><Search />
      
      
      {/* <Card /> */}
      <div>
        {links.map(link => {
          return (
            <div>
              <a href={link.url}>
                <p>{link.name}</p>
              </a>
              <p>{link.description}</p>
            </div>
          );
        })}
      </div></Route>
      
      <Route path="/add"><AddLink /></Route>
    </div>
  );
}

