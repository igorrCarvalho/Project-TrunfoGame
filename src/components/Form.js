import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="nameInput">
          Nome
          <input
            id="nameInput"
            type="text"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea
            id="description"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1">
          Attr1
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1"
          />
        </label>

        <label htmlFor="attr2">
          Attr2
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2"
          />

        </label>

        <label htmlFor="attr3">
          Attr3
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3"
          />
        </label>

        <label htmlFor="img">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            id="img"
          />
        </label>

        <label htmlFor="select">
          Raridade
          <select data-testid="rare-input" id="select">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="check">
          <input type="checkbox" data-testid="trunfo-input" />
          Super Trunfo
        </label>

        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
