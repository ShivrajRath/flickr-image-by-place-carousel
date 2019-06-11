import React, { Component } from "react";
import PropTypes from "prop-types";

class Photo extends Component {
  constructor(props) {
    super(props);
    this.img = React.createRef();
  }

  componentDidMount() {
    let img = new Image();
    img.src = this.props.photo.url;
    const self = this;

    // loads the high res image url post load
    img.onload = function() {
      self.img.current.src = img.src;
    };
  }

  render() {
    const { title, lowResURL } = this.props.photo;
    return (
      <figure
        className={
          this.props.isVisible ? "current textCenter" : "hidden textCenter"
        }
      >
        <img src={lowResURL} alt={title} ref={this.img} />
        <figcaption className={title ? "" : "hide"}>{title}</figcaption>
      </figure>
    );
  }
}

Photo.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  photo: PropTypes.object.isRequired
};

export default Photo;
