import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const stateAtributes = {
  name: '',
  description: '',
  attr1: '0',
  attr2: '0',
  attr3: '0',
  image: '',
  select: '',
  check: false,
  btnDisable: true,
  allCards: [],
  hasTrunfo: false,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = stateAtributes;
  }

  btnClick = (e) => {
    const {
      name, description, attr1, attr2, attr3, image, check, select, allCards,
    } = this.state;
    e.preventDefault();
    if (check === true) this.setState({ hasTrunfo: true });
    allCards.push({
      nome: name,
      desc: description,
      attr1,
      attr2,
      attr3,
      img: image,
      trunfo: check,
      rarity: select,
    });
    this.setState({
      name: '',
      description: '',
      image: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      select: '',
      check: false,
      btnDisable: true,
    });
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
      allCards,
      hasTrunfo,
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
            allCards={ allCards }
            hasTrunfo={ hasTrunfo }
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
        <div>
          { allCards.map((obj, index) => (
            <Card
              key={ index }
              cardName={ obj.nome }
              cardDescription={ obj.desc }
              cardAttr1={ obj.attr1 }
              cardAttr2={ obj.attr2 }
              cardAttr3={ obj.attr3 }
              cardImage={ obj.img }
              cardRare={ obj.rarity }
              cardTrunfo={ obj.trunfo }
            />
          )) }
        </div>
      </>
    );
  }
}

export default App;
