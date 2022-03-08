import React from "react";
import { Link } from "react-router-dom";
import { ImageDetails } from "../util/api";

interface Props {
  images: ImageDetails[] | null;
}

const Home: React.FC<Props> = ({ images }) => {
  return (
    <>
      <div className='gallery'>
        {images && (images.map((image) => {
          return (
            <Link to={`/image/${image.id}`}>
              <img src={image.webformatURL} alt={image.id.toString()} key={image.id}></img>
            </Link>
          )
        }))}
      </div>
    </>
  )
}

export default React.memo(Home);