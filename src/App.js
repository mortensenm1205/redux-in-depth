import React, { Component } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Display from './components/Display/DisplayList';
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
      let ID = `00${new Date().getMilliseconds() + 1}`
      this.setState({ displayText: "" })
      store.dispatch({ type: actionTypes.ADDING_TEXT, text: displayText, id: ID})
  }

  handleRemoval = index => {
      const { store } = this.props;
      store.dispatch({ type: actionTypes.REMOVING_TEXT, index })
    };

  render() {
    const { displayText } = this.state;
    const { items } = this.props;
    return (
      <div>
        <Input displayText={displayText} change={this.handleChange}/>
        {' '}
        <Button clicked={this.handleUpdate}/>
        {' '}
        <Display items={items} remove={this.handleRemoval} />
      </div>
    );
  }
}

export default App;
