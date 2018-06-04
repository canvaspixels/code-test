import React from 'react';
import PropTypes from 'prop-types';
import MessageListItem, { messageListItemProps } from './MessageListItem';

export const sortFn = (a, b) => new Date(a.timestamp) - new Date(b.timestamp);

const MessageList = ({ messages }) => (
  <ul>
    { messages
        .sort(sortFn)
        .map((message) => <MessageListItem key={message.id} message={message} />) }
  </ul>
);

export default MessageList;

MessageList.propTypes = {
  messages: PropTypes.arrayOf(messageListItemProps)
};

export const messageListProps = MessageList.propTypes;