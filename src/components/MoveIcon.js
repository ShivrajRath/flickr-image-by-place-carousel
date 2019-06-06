import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  nextImage,
  prevImage,
  addToCarousel
} from "../actions/carouselActions";
import constants from "../constants";

class MoveIcon extends Component {
  /**
   * Checks if new photos can be fetched
   */
  shouldAddPhotosToCarousel() {
    return (
      this.props.photos.length - this.props.currentPhotoIndex <
        constants.minRemainingPhotosToFetchNew &&
      this.props.pagesFetched + 1 <= this.props.totalPages
    );
  }

  move = e => {
    if (this.props.isNext) {
      this.props.nextImage();
      if (this.shouldAddPhotosToCarousel()) {
        this.props.addToCarousel(this.props.place, this.props.pagesFetched + 1);
      }
    } else {
      this.props.prevImage();
    }
  };

  onKeyDownAndMove = e => {
    if (e.key === "Enter") {
      this.move();
    }
  };

  render() {
    let icon;
    if (this.props.isNext) {
      icon = <span>&#9658;</span>;
    } else {
      icon = <span>&#9668;</span>;
    }
    return (
      <div
        tabIndex="0"
        role="button"
        aria-label={this.props.isNext ? "Next photo" : "Previous photo"}
        onKeyDown={this.onKeyDownAndMove}
        onClick={this.move}
        style={iconStyle}
      >
        {icon}
      </div>
    );
  }
}

const iconStyle = {
  background: "#900C3F",
  color: "#fff",
  borderRadius: "50%",
  height: "40px",
  width: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  margin: "0 20px"
};

MoveIcon.propTypes = {
  isPrev: PropTypes.bool,
  isNext: PropTypes.bool,
  nextImage: PropTypes.func.isRequired,
  prevImage: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
  place: PropTypes.string.isRequired,
  pagesFetched: PropTypes.number.isRequired,
  currentPhotoIndex: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  photos: state.carousel.photos,
  place: state.carousel.place,
  pagesFetched: state.carousel.pagesFetched,
  currentPhotoIndex: state.carousel.currentPhotoIndex,
  totalPages: state.carousel.totalPages
});

export default connect(
  mapStateToProps,
  { nextImage, prevImage, addToCarousel }
)(MoveIcon);
