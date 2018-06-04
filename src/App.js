import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getChatLog from './service';

import './App.css';

export class App extends Component {
  render() {
    return (
      <h1>Hello!</h1>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
