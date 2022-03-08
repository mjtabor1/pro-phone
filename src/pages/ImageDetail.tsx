import React from "react";
import { ImageDetails } from "../util/api";

interface Props {
  details?: ImageDetails | never[];
}

const ImageDetail: React.FC<Props> = ({details}) => {
  
  const imageId = window.location.pathname.split('/')[2]
  console.log(imageId);

  return (
    <>
      <div> This is the Image Detail page</div>
    </>
  )
}

export default React.memo(ImageDetail);