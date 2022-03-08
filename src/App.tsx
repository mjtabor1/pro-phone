import React, { useCallback, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/Nav';
import Home from './pages/Home';
import ImageDetail from './pages/ImageDetail';
import { fetchImages, ImageDetails } from './util/api';

const App = () => {
  const [imageList, setImageList] = useState<ImageDetails[] | null>(null);

  const getImages = useCallback(async () => {
    return await fetchImages();
  }, [])

  useEffect(() => {
    const asyncGetImages = async () => {
      try {
        const data = await getImages()
        setImageList(data.hits);
      } catch (e) {
        console.log(e);
      }
    }
    asyncGetImages();
  }, [getImages])
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home images={imageList} />} />
        <Route path="/image/:id" element={<ImageDetail />} />
      </Routes>
    </div>
  );
}

export default App;