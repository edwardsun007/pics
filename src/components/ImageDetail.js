import React, { Component } from "react";
import "./image.css";

class ImageDetail extends Component {
  constructor(props) {
    super(props);
    // this.imageRef = React.createRef();
    // this.state = { span: 0 };
  }

  render() {
    //const { description, urls } = this.props.image;
    const desc = this.props.image.slug;
    const url = this.props.image.images.preview_webp.url;
    console.log(url);
    // style={{ gridRowEnd: `span ${this.state.span}` }}
    return (
      <div className="col">
        <div className="image">
          <img src={url} alt={desc} />
        </div>
      </div>
    );
  }
}

export default ImageDetail;
