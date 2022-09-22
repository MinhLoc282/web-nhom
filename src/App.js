import React from 'react';
import {ProjectList} from './features/project/ProjectList'
import Header from './components/Header';
import { Home } from './pages/Home';
import {About} from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/baitap" element={<ProjectList/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
