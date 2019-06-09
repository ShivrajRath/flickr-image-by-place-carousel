import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlaceImages, startLoading } from "../actions/carouselActions";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    place: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (
      this.props.place.toLowerCase().trim() !==
      this.state.place.trim().toLowerCase()
    ) {
      if (this.state.place) {
        this.props.fetchPlaceImages(this.state.place.trim(), 1);
        this.props.startLoading();
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="search">
        <input
          type="search"
          name="place"
          placeholder="(e.g. Seattle, NYC)"
          value={this.state.place}
          onChange={this.onChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

Search.propTypes = {
  startLoading: PropTypes.func.isRequired,
  fetchPlaceImages: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  place: state.carousel.place
});

export default connect(
  mapStateToProps,
  { fetchPlaceImages, startLoading }
)(Search);
