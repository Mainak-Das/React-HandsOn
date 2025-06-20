// Do not include any other packages other than the following packages
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { render, fireEvent, waitFor, wait, act, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import App from './App';

configure({ adapter: new Adapter() });

// Uncomment the following test suite and write your code as described
describe('App component', () => {
  it('displays the correct message when the red block is clicked', () => {
    render(<App />);
    const redButton = screen.getByText('Red');
    fireEvent.click(redButton);
    expect(screen.getByText("It's a red color")).toBeInTheDocument();
  });

  it('displays the correct message when the green block is clicked', () => {
    render(<App />);
    const greenButton = screen.getByText('Green');
    fireEvent.click(greenButton);
    expect(screen.getByText("It's a green color")).toBeInTheDocument();
  });

  it('displays the correct message when the yellow block is clicked', () => {
    render(<App />);
    const yellowButton = screen.getByText('Yellow');
    fireEvent.click(yellowButton);
    expect(screen.getByText("It's a yellow color")).toBeInTheDocument();
  });
});