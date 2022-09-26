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
  check: '',
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
    });
  };

  render() {
    const { name, description, attr1, attr2, attr3, image, check, select } = this.state;
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
            isSaveButtonDisabled=""
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
