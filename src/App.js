import React, { Component } from 'react';
import * as actions from './actions/types';

class App extends Component {
  render() {
    const { storeToTest } = this.props;
    return (
      <div>
        <button onClick={() => {
            storeToTest.dispatch({ type: actions.UPDATING_TEXT, text: "Hello" })
        }}>
        Add Text
        </button>
      </div>
    );
  }
}

export default App;
