import React, { Component } from 'react';
import logo from './logo.svg';

import { Editor } from '@tinymce/tinymce-react';

import './App.css';

class App extends Component {

  handleEditorChange = (e) => {
    console.log('Content changed: ', e.target.getContent());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Editor 
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        }}
        onChange={this.handleEditorChange}
        />

      </div>
    );
  }
}

export default App;
