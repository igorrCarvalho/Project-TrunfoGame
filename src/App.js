import React from 'react';
import Form from './components/Form';

const stateAtributes = {
  name: '',
  description: '',
  attr1: 0,
  attr2: 0,
  attr3: 0,
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
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, description, attr1, attr2, attr3, image, check, select } = this.state;
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <div>
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
      </>
    );
  }
}

export default App;
