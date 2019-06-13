import React from "react";
import "./image.css";
import ImageDetail from "./ImageDetail";

const ImageList = props => {
  console.log(props.images);

  const img = props.images.map(image => {
    console.log(image);
    return <ImageDetail className="col" key={image.id} image={image} />;
  });
  return <div className="image-list">{img}</div>;
};

export default ImageList;
