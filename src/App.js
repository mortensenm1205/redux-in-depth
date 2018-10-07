import React, { Component } from 'react';
import { connect }from 'react-redux';
import Input from './components/Input';
import Button from './components/Button';
import Display from './components/Display/DisplayList';
import { addingText, removingText } from './actions';

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
      addingText(displayText);
  }

  handleRemoval = index => {
      const { removeText } = this.props;
      removeText(index);
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
    addingText: (displayText) => dispatch(addingText(displayText)),
    removeText: (index) => dispatch(removingText(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
