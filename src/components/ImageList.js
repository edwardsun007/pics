import React from "react";
import "./image.css";
import Image from "./Image";

const ImageList = props => {
  console.log(props.images);

  const img = props.images.map(image => {
    return <Image key={image.id} image={image} />;
  });
  return <div className="image-list">{img}</div>;
};

export default ImageList;
