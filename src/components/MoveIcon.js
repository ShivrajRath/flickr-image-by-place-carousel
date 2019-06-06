import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { nextImage, prevImage } from "../actions/carouselActions";

class MoveIcon extends Component {
  move = e => {
    if (this.props.isNext) {
      this.props.nextImage();
    } else {
      this.props.prevImage();
    }
  }

  render() {
    let icon;
    if (this.props.isNext) {
      icon = <span>&#9658;</span>;
    } else {
      icon = <span>&#9668;</span>;
    }
    return (
      <div onClick={this.move} style={iconStyle}>
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
  prevImage: PropTypes.func.isRequired
};

export default connect(
  null,
  { nextImage, prevImage }
)(MoveIcon);
