import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RarityFltr extends Component {
  render() {
    const { rare, handleState } = this.props;
    return (
      <select
        value={ rare }
        onChange={ handleState }
        name="rarityFilter"
        data-testid="rare-filter"
      >
        <option value="todas">todas</option>
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>
    );
  }
}

RarityFltr.propTypes = {
  rare: PropTypes.string.isRequired,
  handleState: PropTypes.func.isRequired,
};

export default RarityFltr;
