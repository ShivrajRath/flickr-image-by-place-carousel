import React, { Component } from "react";
import { connect } from "react-redux";
import MoveIcon from "./MoveIcon";
import PropTypes from "prop-types";

class IconContainer extends Component {
  render() {
    if (this.props.photos.length) {
      return (
        <div className="icon-container">
          <MoveIcon isPrev={true} />
          <MoveIcon isNext={true} />
        </div>
      );
    } else {
      return <React.Fragment />;
    }
  }
}

IconContainer.propTypes = {
  photos: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  photos: state.carousel.photos
});

export default connect(mapStateToProps)(IconContainer);
