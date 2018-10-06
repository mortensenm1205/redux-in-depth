import React, { Component } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Display from './components/Display';
import * as actionTypes from './actions/types';

class App extends Component {

  state = {
    displayText: ""
  }

  handleChange = e => {
      this.setState({ displayText: e.target.value })
  }

  handleUpdate = () => {
      const { displayText } = this.state;
      const { store } = this.props;
      this.setState({ displayText: "" })
      store.dispatch({ type: actionTypes.UPDATING_TEXT, text: displayText })
  }

  handleRemoval = () => {
      const { store } = this.props;
      store.dispatch({ type: actionTypes.REMOVING_TEXT })
    };

  render() {
    const { displayText } = this.state;
    const { values } = this.props;
    return (
      <div>
        <Input displayText={displayText} change={this.handleChange}/>
        <Button clicked={this.handleUpdate}/>
        <Display values={values} remove={this.handleRemoval} />
      </div>
    );
  }
}

export default App;
