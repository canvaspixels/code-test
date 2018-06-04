import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

export function reducer(state, action = {}) {
  if (action.type === 'MESSAGES_LOADING_FULFILLED') {
    const [ messages, members ] = action.payload;
    return Object.assign({}, state, {
      messages: messages.map((message) =>
        Object.assign(message, { user: members.find((member) => member.id === message.userId) })
      )
    });
  }

  return state;
}

export const store = createStore(reducer, { messages: [] }, applyMiddleware(
  promiseMiddleware()
));