import React, { useCallback, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/Nav';
import Home from './pages/Home';
import ImageDetail from './pages/ImageDetail';
import { fetchImages, ImageDetails } from './util/api';

const App = () => {
  const [imageList, setImageList] = useState<ImageDetails[] | null>(null);
  const [currentSearch, setCurrentSearch] = useState<string | undefined>();

  const getImages = useCallback(async (search?: string) => {
    return await fetchImages(search);
  }, [])

  useEffect(() => {
    const asyncGetImages = async () => {
      try {
        const data = await getImages(currentSearch)
        setImageList(data.hits);
      } catch (e) {
        console.log(e);
      }
    }
    asyncGetImages();
  }, [getImages, currentSearch])

  const onSearch = (searchVal: string) => {
    setCurrentSearch(searchVal);
  }
  return (
    <div className="App">
      <NavBar onSubmit={onSearch}/>
      <Routes>
        <Route path="/" element={<Home images={imageList} />} />
        <Route path="/image/:id" element={<ImageDetail details={[]} />} />
      </Routes>
    </div>
  );
}

export default App;