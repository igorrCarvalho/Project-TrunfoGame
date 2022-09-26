import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardName,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="nameInput">
          Nome
          <input
            value={ cardName }
            onChange={ onInputChange }
            name="name"
            id="nameInput"
            type="text"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            name="description"
            id="description"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1">
          Attr1
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr1-input"
            id="attr1"
            name="attr1"
          />
        </label>

        <label htmlFor="attr2">
          Attr2
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr2-input"
            id="attr2"
            name="attr2"
          />

        </label>

        <label htmlFor="attr3">
          Attr3
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr3-input"
            id="attr3"
            name="attr3"
          />
        </label>

        <label htmlFor="img">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
            id="img"
            name="image"
          />
        </label>

        <label htmlFor="select">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            name="select"
            data-testid="rare-input"
            id="select"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="check">
          <input
            onChange={ onInputChange }
            checked={ cardTrunfo }
            id="check"
            name="check"
            type="checkbox"
            data-testid="trunfo-input"
          />
          Super Trunfo
        </label>

        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
