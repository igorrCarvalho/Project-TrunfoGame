import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameSearch extends Component {
  render() {
    const { text, filterFunc } = this.props;
    return (
      <input
        onChange={ filterFunc }
        value={ text }
        type="text"
        name="nameSearch"
        data-testid="name-filter"
      />
    );
  }
}

NameSearch.propTypes = {
  text: PropTypes.string.isRequired,
  filterFunc: PropTypes.func.isRequired,
};

export default NameSearch;
