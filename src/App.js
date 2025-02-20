
import Header from './Header.js'
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router";

import Home from "./Home";
import About from './About'
import LiveMatches from './LiveMatches'
import PlayersStats from './PlayerStats'
import TeamStats from './TeamStats'

function App() {
  return (
            <BrowserRouter>
                <Header />
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/teamStats" element={<TeamStats/>}/>
                <Route path="/playerStats" element={<PlayersStats/>}/>
                <Route path="/liveMatches" element={<LiveMatches/>}/>
                <Route path="/about" element={<About/>}/>
                </Routes>
            </BrowserRouter>
  );
}

export default App;
