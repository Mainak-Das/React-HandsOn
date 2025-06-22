import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Routes, Navigate, Router,Route } from 'react-router-dom';
import { render,fireEvent, waitFor,wait,act,screen} from '@testing-library/react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import {configure } from 'enzyme';
import '@testing-library/jest-dom'
import App from './App.js';
import LoginPage from './App.js';
import HomePage from './Components/HomePage.js';
 
// // Uncomment the following test suite and write your code as described
describe('App component', () => {
  it('navigates to HomePage on successful login', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
 
    fireEvent.change(screen.getByPlaceholderText('Enter Username here'), {
      target: { value: 'richard@tekstac.com' }
    });
    fireEvent.change(screen.getByPlaceholderText('Enter password here'), {
      target: { value: 'richard@tekstac_2010' }
    });
 
    fireEvent.click(screen.getByText('Login'));
 
    // HomePage renders "Welcome, Richard!" so use that to verify
    const welcomeText = screen.getByText(/Welcome, Richard!/i);
    expect(welcomeText).toBeInTheDocument();
  });
 
  it('displays the correct message on invalid login', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
 
    fireEvent.change(screen.getByPlaceholderText('Enter Username here'), {
      target: { value: 'richard@outlook.com' }
    });
    fireEvent.change(screen.getByPlaceholderText('Enter password here'), {
      target: { value: 'wrongpassword' }
    });
 
    fireEvent.click(screen.getByText('Login'));
 
    const resultMessage = screen.getByText('Invalid username or password');
    expect(resultMessage).toBeInTheDocument();
  });
});