import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateUser, apiRequest } from './actions/userActions';

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);

  }

  componentDidMount() {
    this.props.onApiRequest();
  }


  onUpdateUser(e) {
    this.props.onUpdateUser(e.target.value.toUpperCase());
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" onChange={this.onUpdateUser} />
        <h3>{this.props.user}</h3>
      </div>
    );
  }
}

// Map state
const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    title: props.title
  }
};


// Map actions
const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators({
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
