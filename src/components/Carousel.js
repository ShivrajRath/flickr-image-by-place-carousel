import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Photo from "./Photo";

export class Carousel extends Component {
  render() {
    const photos = this.props.photos.map((photo, index) => {
      return (
        <Photo
          photo={photo}
          key={photo.id}
          isVisible={index === this.props.currentPhotoIndex}
        />
      );
    });
    return <div>{photos}</div>;
  }
}

Carousel.propTypes = {
  photos: PropTypes.array.isRequired,
  currentPhotoIndex: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  photos: state.carousel.photos,
  currentPhotoIndex: state.carousel.currentPhotoIndex
});

export default connect(mapStateToProps)(Carousel);
