import React, { Component } from "react";
import PropTypes from "prop-types";

class Photo extends Component {
  render() {
    const { url, title } = this.props.photo;
    return (
      <figure
        className={
          this.props.isVisible ? "current textCenter" : "hidden textCenter"
        }
      >
        <img src={url} alt={title} />
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
