import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getChatLog from './service';
import MessageList, { messageListProps } from './MessageList';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getChatLog();
  }
  render() {
    const { messages } = this.props;
    return (
      <MessageList messages={messages} />
    );
  }
}

App.propTypes = messageListProps;
App.defaultProps = {
  messages: []
};

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
