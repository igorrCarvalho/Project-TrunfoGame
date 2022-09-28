import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TrunfoFilter extends Component {
  render() {
    const { isChecked, handleState } = this.props;
    return (
      <label htmlFor="trunfoCheck">
        <input
          data-testid="trunfo-filter"
          id="trunfoCheck"
          onChange={ handleState }
          value={ isChecked }
          type="checkbox"
          name="trunfoFilter"
        />
        Super Trybe Trunfo
      </label>
    );
  }
}

TrunfoFilter.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  handleState: PropTypes.func.isRequired,
};

export default TrunfoFilter;
