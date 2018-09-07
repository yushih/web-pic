import React, { Component } from 'react';
import './App.css';
import SplitPane from 'react-split-pane';
import intro from './intro.html';


class App extends Component {
  render() {
    return (
        <SplitPane split='vertical' defaultSize={300}>
            <SplitPane split='horizontal' defaultSize={200}>
                <div dangerouslySetInnerHTML={{__html:intro}}></div>
                <div>code</div>
            </SplitPane>
            <div className='graph'>graph</div>
        </SplitPane>
    );
  }
}

export default App;
