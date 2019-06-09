import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class Loader extends Component {
  render() {
    if (this.props.isLoading) {
      return (
        <div style={loaderParent}>
          <div className="loader" />
        </div>
      );
    } else {
      return <React.Fragment />;
    }
  }
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

const loaderParent = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh"
};

const mapStateToProps = state => ({
  isLoading: state.carousel.isLoading
});

export default connect(mapStateToProps)(Loader);
