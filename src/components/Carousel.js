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
    if (this.props.isLoading) {
      return <React.Fragment />;
    } else if (this.props.noImageFound) {
      return (
        <div className="sorry">
          Sorry!! no photos found for this place. Please try a new place.
        </div>
      );
    } else {
      return <div>{photos}</div>;
    }
  }
}

Carousel.propTypes = {
  photos: PropTypes.array.isRequired,
  currentPhotoIndex: PropTypes.number.isRequired,
  isLoading: PropTypes.bool,
  noImageFound: PropTypes.bool
};

const mapStateToProps = state => ({
  photos: state.carousel.photos,
  isLoading: state.carousel.isLoading,
  noImageFound: state.carousel.noImageFound,
  currentPhotoIndex: state.carousel.currentPhotoIndex
});

export default connect(mapStateToProps)(Carousel);
