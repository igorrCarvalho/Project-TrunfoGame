import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameSearch extends Component {
  render() {
    const { disable, text, filterFunc } = this.props;
    return (
      <input
        className="nameFilter"
        placeholder="Nome da carta"
        disabled={ disable }
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
  disable: PropTypes.bool.isRequired,
};

export default NameSearch;
