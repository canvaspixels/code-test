import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';
const getStubMessages = () => ([]);

describe('App', () => {
  it('matches snapshot', () => {
    const component = shallow(<App.WrappedComponent messages={getStubMessages()} />);

    expect(component).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App.WrappedComponent getChatLog={() => {}} />, div);
  });

  it('should call getChatLog on mount', () => {
    const div = document.createElement('div');
    const getChatLogStub = jest.fn();
    ReactDOM.render(<App.WrappedComponent getChatLog={getChatLogStub} />, div);
    expect(getChatLogStub).toHaveBeenCalled();
  });
});
