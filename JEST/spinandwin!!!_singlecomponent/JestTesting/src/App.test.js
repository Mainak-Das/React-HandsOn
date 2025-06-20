import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import { MemoryRouter} from 'react-router';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { render, fireEvent, waitFor, wait, act, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configure } from 'enzyme';
import '@testing-library/jest-dom';
import SpinWheel from './App';

describe('SpinWheel component', () => {

  it('displays numbers correctly', () => {
    const wrapper = shallow(<SpinWheel />);
    expect(wrapper.find('.option.o1').text()).toBe('1');
    expect(wrapper.find('.option.o2').text()).toBe('2');
    expect(wrapper.find('.option.o3').text()).toBe('3');
    expect(wrapper.find('.option.o4').text()).toBe('4');
  });

  it('displays the arrow correctly', () => {
    const wrapper = shallow(<SpinWheel />);
    expect(wrapper.find('#arrow').exists()).toBe(true);
  });

  it('executes spinWheel function when the arrow is clicked', () => {
    const wrapper = mount(<SpinWheel />);
    const wheel = wrapper.find('#wheel');
    wheel.simulate('click');

    const messageExists = wrapper.find('.message').exists();
    expect(messageExists).toBe(true);
  });

  it('displays result message after spinning', (done) => {
    const wrapper = mount(<SpinWheel />);
    const wheel = wrapper.find('#wheel');
    wheel.simulate('click');

    setTimeout(() => {
      wrapper.update(); // Required after async state update
      const message = wrapper.find('.message');
      expect(message.exists()).toBe(true);
      expect(message.text().length).toBeGreaterThan(0);
      done();
    }, 100); // Use a small timeout to allow state to update
  });

});