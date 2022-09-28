import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import NameSearch from './components/NameSearch';

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
  nameSearch: '',
};

class App extends React.Component {
  constructor() {
    super();
    this.state = stateAtributes;
  }

  filterItems = ({ target }) => {
    const { value } = target;
    this.setState({ nameSearch: value });
  };

  btnClick = (e) => {
    const {
      name, description, attr1, attr2, attr3, image, check, select, allCards,
    } = this.state;
    e.preventDefault();
    if (check === true) this.setState({ hasTrunfo: true });
    const newItem = {
      nome: name,
      desc: description,
      attr1,
      attr2,
      attr3,
      img: image,
      trunfo: check,
      rarity: select,
    };
    const newState = [...allCards, newItem];
    this.setState({ allCards: newState });
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

  btnDiscart = (index) => {
    const { allCards } = this.state;
    const filteredArr = allCards.filter((_obj, ind) => ind !== index);
    if (allCards[index].trunfo === true) {
      return this.setState({ allCards: filteredArr, hasTrunfo: false });
    }
    this.setState({ allCards: filteredArr });
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
      nameSearch,
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
        <div>
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
        </div>
        <div>
          <h3>Todas as cartas</h3>
          <div>
            <NameSearch text={ nameSearch } filterFunc={ this.filterItems } />
          </div>
          { allCards.filter((card) => card.nome.includes(nameSearch))
            .map((obj, index) => (
              <div key={ index }>
                <Card
                  cardName={ obj.nome }
                  cardDescription={ obj.desc }
                  cardAttr1={ obj.attr1 }
                  cardAttr2={ obj.attr2 }
                  cardAttr3={ obj.attr3 }
                  cardImage={ obj.img }
                  cardRare={ obj.rarity }
                  cardTrunfo={ obj.trunfo }
                />
                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={ () => this.btnDiscart(index) }
                >
                  Excluir
                </button>
              </div>
            ))}
        </div>
      </>
    );
  }
}

export default App;
