import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.scss';

import Homepage from "./components/pages/homepage";
import Schedule from "./components/pages/schedule";
import Results from "./components/pages/results";
import Video from "./components/pages/video";
import Login from './components/pages/login';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/schedule' element={<Schedule />} />
          <Route exact path='/results' element={<Results />} />
          <Route exact path='/swings' element={<Video />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
