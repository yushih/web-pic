import React, { Component } from 'react';
import './App.css';
import SplitPane from 'react-split-pane';

class App extends Component {
  render() {
    return (
        <SplitPane split='vertical' defaultSize={300}>
            <SplitPane split='horizontal' defaultSize={200}>
                <div>intro</div>
                <div>code</div>
            </SplitPane>
            <div className='graph'>graph</div>
        </SplitPane>
    );
  }
}

export default App;
