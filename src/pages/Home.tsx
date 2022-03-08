import React from "react";
import ImageSearch from "../components/ImageSearch";

const Home: React.FC = () => {
  return (
    <>
      <ImageSearch />
      <div className='gallery'>
        THE IMAGE GALLERY
      </div>
    </>
  )
}

export default React.memo(Home);