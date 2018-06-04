import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MessageListItem extends Component {
  state = {
    showUser: false
  }

  showUser = (userId) => {
    this.setState({ showUser: true })
  }

  hideUser = (userId) => {
    this.setState({ showUser: false })
  }

  formatDate(timestamp) {
    const date = new Date(timestamp);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  render() {
    const { message } = this.props;
    return (
      <li>
        <a
          href=""
          onMouseEnter={this.showUser}
          onMouseLeave={this.hideUser}
        >
          <img src={message.user.avatar} alt=""/>

          <div>{message.message}</div>
          <time dateTime={message.timestamp}>{this.formatDate(message.timestamp)}</time>
        </a>

        { this.state.showUser && (
          <div>{message.user.email}</div>
        )}
      </li>
    );
  }
};

MessageListItem.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string,
    userId: PropTypes.string,
    message: PropTypes.string,
    timestamp: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      avatar: PropTypes.string,
      ip: PropTypes.string,
    })
  })
};

export const messageListItemProps = MessageListItem.propTypes.message;