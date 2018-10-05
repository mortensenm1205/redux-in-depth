import React, { Component } from 'react';
import * as actionTypes from './actions/types';
// yes, store is setup in root index. But we need it hear because i can
// attach the dispatch call to the UI button, which will call to the store to
// have the reducer update state and return it back to where its being called
// with store.getState() to which i have transfered that to this.props.values
import { store } from './index';

class App extends Component {

  state = {
    localText: ""
  }

  render() {
    const { localText } = this.state;
    // This is our store state coming in via props
    const { values } = this.props;
    return (
      <div>
        <input type="text" value={localText} onChange={e => {
            this.setState({ localText: e.target.value })
        }}/>
        <button onClick={() => {
            this.setState({ localText: "" })
            store.dispatch({ type: actionTypes.UPDATING_TEXT, text: localText })
        }}>
        Add Text
        </button>
        <span>{values}</span>
      </div>
    );
  }
}

export default App;
