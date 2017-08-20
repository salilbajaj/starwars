import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import LoginForm from '../components/login/Form';

function setup(saving) {
  const props = {
     error: {},
    onSubmit: () => {},
    onChange: () => {}
  };

  return shallow(<LoginForm {...props} />);
}

describe('LoginForm test cases', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Star Wars Login');
  });

  it('Submit button ', () => {
     const wrapper = setup(false);
     expect(wrapper.find('input').props().value).toBe('Submit');
   });

  
});
