import React, { Component } from 'react';
import './App.css';
import SplitPane from 'react-split-pane';
import introHtml from './intro.html';
import picToSvg from './picToSvg';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = { input: '', rawSvg: '' };
        this.onRenderClick = this.onRenderClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange (event) {
        this.setState({input: event.target.value});
    }

    onRenderClick () {
        const s = picToSvg(this.state.input);
        console.log(s);
        this.setState({rawSvg: s});
    }

    render() {
      return (
          <SplitPane split='vertical' defaultSize={600}>
              <SplitPane split='horizontal' defaultSize={300}>
                  <div className='pane intro-pane' dangerouslySetInnerHTML={{__html:introHtml}}></div>
                  <div className='pane code-pane'>
                      <div className='header'>
                          <button onClick={this.onRenderClick}>render</button>
                      </div>
                      <div className='code'>
                          <textarea spellCheck='false' onChange={this.onInputChange}></textarea>
                      </div>
                  </div>
              </SplitPane>
              <div className='graph' dangerouslySetInnerHTML={{__html:this.state.rawSvg}}></div>
          </SplitPane>
      );
    }
}

export default App;
