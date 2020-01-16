import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import UserList from './index';
import UserRow from '../UserRow';

configure({ adapter: new Adapter() });

describe('UserList', () => {
  it('shows new user when props are changed', () => {
    const user = mount(<UserRow user={{ id:1, name: 'James', active: true }} />);
    user.setProps({user: {
      id: 1,
      name: 'Test',
      active: true
    }})
    expect(user.find('h3').text()).toBe('Test');
  });
  it('setProps makes componentDidUpdate to be executed', () => {
    jest.spyOn(UserList.prototype, 'componentDidUpdate');
    const wrapper = shallow(<UserList />);
    wrapper.setProps({ user: {} })
    expect(UserList.prototype.componentDidUpdate.mock.calls.length).toBe(1);
  });
});
