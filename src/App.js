import React, { Component } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import * as actionTypes from './actions/types';

class App extends Component {

  state = {
    displayText: ""
  }

  handleChange = e => {
      this.setState({ displayText: e.target.value })
  }

  handleClick = () => {
      const { displayText } = this.state;
      const { store } = this.props;
      this.setState({ displayText: "" })
      store.dispatch({ type: actionTypes.UPDATING_TEXT, text: displayText })
  }

  render() {
    const { displayText } = this.state;
    const { values } = this.props;
    return (
      <div>
        <Input displayText={displayText} change={this.handleChange}/>
        <Button clicked={this.handleClick}/>
        <span>{values}</span>
      </div>
    );
  }
}

export default App;
