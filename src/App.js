import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const stateAtributes = {
  name: '',
  description: '',
  attr1: '',
  attr2: '',
  attr3: '',
  image: '',
  select: '',
  check: false,
  btnDisable: true,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = stateAtributes;
  }

  btnClick = () => {

  };

  handleState = ({ target }) => {
    const valor = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: valor,
    }, () => this.returnBtnDisable());
  };

  checkInputs = () => {
    const { name, description, image, select } = this.state;
    return (!name || !description || !image || !select);
  };

  checkAttr = () => {
    const { attr1, attr2, attr3 } = this.state;
    const numberAttr1 = Number(attr1);
    const numberAttr2 = Number(attr2);
    const numberAttr3 = Number(attr3);
    const attrSum = numberAttr1 + numberAttr2 + numberAttr3;
    const maxValue = 210;
    const maxAttrValue = 90;
    if (attrSum > maxValue) return true;
    return (
      numberAttr1 > maxAttrValue
      || numberAttr2 > maxAttrValue
      || numberAttr3 > maxAttrValue
      || numberAttr1 < 0 || numberAttr2 < 0 || numberAttr3 < 0
    );
  };

  returnBtnDisable = () => {
    const verifyInput = this.checkInputs();
    const verifyAttr = this.checkAttr();
    if (verifyInput === true || verifyAttr === true) {
      return this.setState({
        btnDisable: true,
      });
    }
    this.setState({
      btnDisable: false,
    });
  };

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      check,
      select,
      btnDisable,
    } = this.state;
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <div className="formDiv">
          <Form
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ select }
            cardTrunfo={ check }
            isSaveButtonDisabled={ btnDisable }
            onInputChange={ this.handleState }
            onSaveButtonClick={ this.btnClick }
          />
        </div>
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ select }
          cardTrunfo={ check }
        />
      </>
    );
  }
}

export default App;
