import React, { Component } from "react";
import PropTypes from "prop-types";

class Photo extends Component {
  render() {
      return (
        <div>
          <figure className={this.props.isVisible? 'current textCenter': 'hidden textCenter'}>
            <img
              src={this.props.photo.url}
              alt={this.props.photo.title}
            />
            <figcaption >{this.props.photo.title}</figcaption>
            <div>{this.props.photo.url}</div>
          </figure>
        </div>
      );
  }
}

Photo.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  photo: PropTypes.object.isRequired
};

export default Photo;
