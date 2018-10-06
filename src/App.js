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

  handleUpdate = () => {
      const { displayText } = this.state;
      const { store } = this.props;
      this.setState({ displayText: "" })
      store.dispatch({ type: actionTypes.UPDATING_TEXT, text: displayText })
  }

  render() {
    const { displayText } = this.state;
    const { values, store } = this.props;
    return (
      <div>
        <Input displayText={displayText} change={this.handleChange}/>
        <Button clicked={this.handleUpdate}/>
        <span onClick={() => {
            store.dispatch({ type: actionTypes.REMOVING_TEXT })
          }}>{values}</span>
      </div>
    );
  }
}

export default App;
