import React, { Component } from "react";
import { connect } from "react-redux";

export class Info extends Component {
  render() {
    if (this.props.carousel.place || this.props.carousel.isLoading) {
      return <React.Fragment />;
    } else {
      return (
        <div className="textCenter info">
          <div>
            <img src="./logo.png" alt="logo" />
          </div>
          Search for photos from a place. Try putting your location as specific,
          (city, state, country) to rule out duplicates.
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  carousel: state.carousel
});

export default connect(mapStateToProps)(Info);
