import { reducer } from './store';

describe('store reducer', () => {
  it('should set messages in the store with a member attached to each message', () => {
    const messages = [{
      id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
      userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      timestamp: '2017-02-09T04:27:38Z'
    }];

    const members = [{
      "id": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
      "firstName": "Albert",
      "lastName": "Rose",
      "email": "arosec@bbb.org",
      "avatar": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
      "ip": "20.79.231.223"
    }];

    const updatedStore = reducer({}, { type: 'MESSAGES_LOADING_FULFILLED', payload: [ messages, members ] });

    expect(updatedStore.messages).toEqual(messages);
  });

  it('should return the initial state if another action is fired', () => {
    const messages = [{
      id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
      userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      timestamp: '2017-02-09T04:27:38Z'
    }];

    const members = [{
      "id": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
      "firstName": "Albert",
      "lastName": "Rose",
      "email": "arosec@bbb.org",
      "avatar": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
      "ip": "20.79.231.223"
    }];

    const initialState = {};

    const updatedStore = reducer(initialState, { type: 'FOO', payload: [ messages, members ] });

    expect(updatedStore).toEqual(initialState);
  });

  it('should return the initial state on initialisation', () => {
    const messages = [{
      id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
      userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      timestamp: '2017-02-09T04:27:38Z'
    }];

    const members = [{
      "id": "fe27b760-a915-475c-80bb-7cdf14cc6ef3",
      "firstName": "Albert",
      "lastName": "Rose",
      "email": "arosec@bbb.org",
      "avatar": "http://dummyimage.com/100x100.jpg/5fa2dd/ffffff",
      "ip": "20.79.231.223"
    }];

    const initialState = {};

    const updatedStore = reducer(initialState);

    expect(updatedStore).toEqual(initialState);
  });
});
