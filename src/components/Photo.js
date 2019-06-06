import React, { Component } from "react";
import PropTypes from "prop-types";

class Photo extends Component {
  render() {
      return (
        <figure className={this.props.isVisible? 'current textCenter': 'hidden textCenter'}>
          <img
            src={this.props.photo.url}
            alt={this.props.photo.title}
          />
          <figcaption >{this.props.photo.title}</figcaption>
        </figure>
      );
  }
}

Photo.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  photo: PropTypes.object.isRequired
};

export default Photo;
