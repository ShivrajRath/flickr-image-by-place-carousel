import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlaceImages } from '../actions/carouselActions';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    place: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if(this.props.place.trim() !== this.state.place){
      this.state.place && this.props.fetchPlaceImages(this.state.place.trim(), 1);
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className='search'>
        <input
          type='search'
          name='place'
          placeholder='(e.g. Seattle, NYC, London)'
          value={this.state.place}
          onChange={this.onChange}
        />
        <button type='submit' aria-label='search' aria-labelledby='search'>
          Search
        </button>
      </form>
    );
  }
}

Search.propTypes = {
  fetchPlaceImages: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  place: state.carousel.place
});

export default connect(
  mapStateToProps,
  { fetchPlaceImages }
)(Search);