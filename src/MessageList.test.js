import React from 'react';
import { shallow } from 'enzyme';
import MessageList, { sortFn } from './MessageList';

const getStubMessages = () => ([{
  id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
  userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
  message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
  timestamp: '2017-02-09T04:27:38Z',
  user: {
    id: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
    firstName: 'Albert',
    lastName: 'Rose',
    email: 'arosec@bbb.org',
    avatar: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
    ip: '20.79.231.223'
  }
}]);

describe('MessageList', () => {
  it('matches snapshot', () => {
    const component = shallow(<MessageList messages={getStubMessages()} />);

    expect(component).toMatchSnapshot();
  });

  describe('sortFn()', () => {
    it('orders collection by date', () => {
      const a = { timestamp: new Date(2015, 1, 1) };
      const b = { timestamp: new Date(2017, 1, 1) };
      const c = { timestamp: new Date(2016, 1, 1) };
      expect([a, b, c].sort(sortFn)).toEqual([a, c, b]);
    });
  });
});