import React, { Component } from "react";

class ImageDetail extends Component {
  constructor(props) {
    super(props);
    // this.imageRef = React.createRef();
    // this.state = { span: 0 };
  }

  // componentDidMount() {
  //   this.imageRef.current.addEventListener("load", this.editSpan);
  // }

  // editSpan = () => {
  //   const height = this.imageRef.current.clientHeight;
  //   const span = Math.ceil(height / 20);
  //   this.setState({ span });
  // };

  render() {
    //const { description, urls } = this.props.image;
    const desc = this.props.image.slug;
    const url = this.props.image.images.preview_webp.url;
    console.log(url);
    // style={{ gridRowEnd: `span ${this.state.span}` }}
    return (
      <div className="ui card">
        <div className="image">
          <img src={url} alt={desc} />
        </div>
      </div>
    );
  }
}

export default ImageDetail;
