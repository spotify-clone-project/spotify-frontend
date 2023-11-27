import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Home from './main/Home';
import Search from './main/Search';
import Library from './main/Library';
import Premium from './main/Premium';
import Setting from './main/Setting';
import Artist from './artist/Artist';
import Album from './album/Album';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<Library />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    </Router>
  );
};

export default App;
