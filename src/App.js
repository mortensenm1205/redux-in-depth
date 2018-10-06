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
      this.setState({ displayText: "" })
      store.dispatch({ type: actionTypes.ADDING_TEXT, text: displayText, id: 0})
  }

  handleRemoval = index => {
      const { store } = this.props;
      store.dispatch({ type: actionTypes.REMOVING_TEXT, id: index })
    };

  render() {
    const { displayText } = this.state;
    const { items, store } = this.props;
    return (
      <div>
        <Input displayText={displayText} change={this.handleChange}/>
        {' '}
        <Button clicked={this.handleUpdate}/>
        {' '}
        <Display items={items} remove={this.handleRemoval} />
        {console.log(store.getState())}
      </div>
    );
  }
}

export default App;
