import React, { Component } from 'react';
import { connect }from 'react-redux';
import Input from './components/Input';
import Button from './components/Button';
import Display from './components/Display/DisplayList';
import * as actionTypes from './actions/types';
let ID = 0;

class App extends Component {

  state = {
    displayText: ""
  }


  handleChange = e => {
      this.setState({ displayText: e.target.value })
  }

  handleUpdate = () => {
      const { displayText } = this.state;
      const { addingText } = this.props;
      this.setState({ displayText: "" });
      addingText(displayText, ID++);
  }

  handleRemoval = index => {
      const { removeText } = this.props;
      removeText(index);
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

const mapStateToProps = state => {
  return {
    items: state.text
  }
};

const mapDispatchToProps = dispatch => {
  return{
    addingText: (displayText, ID) => dispatch({ type: actionTypes.ADDING_TEXT, text: displayText, id: ID}),
    removeText: (index) => dispatch({ type: actionTypes.REMOVING_TEXT, index })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
