import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ImageDetail from './pages/ImageDetail';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image" element={<ImageDetail />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
