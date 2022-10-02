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
      hasTrunfo,
    } = this.props;
    const totalPoints = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    let restPoints = 0;
    const maxPoint = 210;
    restPoints = maxPoint - totalPoints;
    return (
      <form className="form">
        <p className="formTitle">ADICIONE NOVA CARTA</p>
        <label htmlFor="nameInput">
          Nome
          <input
            className="nameInput"
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
            className="descInput"
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
            className="attr1Input"
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
            className="attr2Input"
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
            className="attr3Input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr3-input"
            id="attr3"
            name="attr3"
          />
        </label>

        <p className="counter">{`Pontos restantes = ${restPoints}`}</p>

        <label htmlFor="img">
          Imagem
          <input
            className="imgInput"
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
            className="rareInput"
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

        <p className="totalCount">{ `Total de pontos = ${totalPoints}` }</p>

        {hasTrunfo === true
          && <h4 className="lockTxt">Você já tem um Super Trunfo em seu baralho</h4>}
        {hasTrunfo === false
          && (
            <label className="checkLabel" htmlFor="check">
              <input
                className="trunfoInput"
                onChange={ onInputChange }
                checked={ cardTrunfo }
                id="check"
                name="check"
                type="checkbox"
                data-testid="trunfo-input"
              />
              Super Trunfo
            </label>
          )}

        <button
          className="submitBtn"
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
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
