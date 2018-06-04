import React from 'react';
import { shallow } from 'enzyme';
import MessageListItem from './MessageListItem';

const getStubMessage = () => ({
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
});

describe('MessageListItem', () => {
  it('matches snapshot', () => {
    const component = shallow(<MessageListItem message={getStubMessage()} />);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot with user’s email shown', () => {
    const component = shallow(<MessageListItem message={getStubMessage()} />);

    component.instance().showUser();
    component.update();

    expect(component).toMatchSnapshot();
  });

  describe('showUser()', () => {
    it('sets showUser on the state to true', () => {
      const component = shallow(<MessageListItem message={getStubMessage()} />);
      const instance = component.instance();
      instance.setState = jest.fn();
      instance.showUser();

      expect(instance.setState).toHaveBeenCalledWith({ showUser: true });
    });
  });

  describe('hideUser()', () => {
    it('sets showUser on the state to false', () => {
      const component = shallow(<MessageListItem message={getStubMessage()} />);
      const instance = component.instance();
      instance.setState = jest.fn();
      instance.hideUser();

      expect(instance.setState).toHaveBeenCalledWith({ showUser: false });
    });
  });

  describe('formatDate()', () => {
    it('sets showUser on the state to false', () => {
      const component = shallow(<MessageListItem message={getStubMessage()} />);
      const instance = component.instance();

      expect(instance.formatDate('2017-02-09T04:27:38Z')).toBe('9/2/2017');
      expect(instance.formatDate('2018-05-31T04:27:38Z')).toBe('31/5/2018');
    });
  });
});