import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <>
        <div className="CardTitle">
          <h3 className="previewTitle" data-testid="name-card">{ cardName }</h3>
        </div>
        <div className="img">
          <img
            className="image"
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
        </div>
        <div className="atributes">
          <p className="desc" data-testid="description-card">{ cardDescription }</p>
          <h4 data-testid="attr1-card">{ `Atributo 1: ${cardAttr1}` }</h4>
          <h4 data-testid="attr2-card">{ `Atributo 2: ${cardAttr2}` }</h4>
          <h4 data-testid="attr3-card">{ `Atributo 3: ${cardAttr3}` }</h4>
          <h4 data-testid="rare-card">{ cardRare }</h4>
          {cardTrunfo === true && <h4 data-testid="trunfo-card">Super Trunfo</h4>}
        </div>
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
