global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
};
// Do not include any other packages other than the following packages
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { MemoryRouter , Route } from 'react-router-dom';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom'
import { render,fireEvent, waitFor,wait,act,screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import {configure } from 'enzyme';
import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-react-16';
import Search, { Display } from './App.js';
import App from './App.js';
 
configure({ adapter: new Adapter() });
 
 
describe('Search component', () => {
  it('retrieves companyName from JSON file when the applicant is eligible', async () => {
    render(<Search />);
 
    fireEvent.change(screen.getByTestId('name-input'), {
      target: { value: 'Harish' },
    });
    fireEvent.change(screen.getByTestId('designation-input'), {
      target: { value: 'Software Engineer' },
    });
    fireEvent.change(screen.getByTestId('experience-input'), {
      target: { value: '3' },
    });
    fireEvent.change(screen.getByTestId('location-input'), {
      target: { value: 'New York' },
    });
    fireEvent.change(screen.getByTestId('qualification-select'), {
      target: { value: 'BE/BTech' },
    });
 
    fireEvent.click(screen.getByTestId('search-button'));
 
    const result = await screen.findByTestId('result-message');
    expect(result).toHaveTextContent('Tech Solutions Inc');
  });
 
  it('retrieves jobRole from JSON file when the applicant is eligible', async () => {
    render(<Search />);
 
    fireEvent.change(screen.getByTestId('name-input'), {
      target: { value: 'Harish' },
    });
    fireEvent.change(screen.getByTestId('designation-input'), {
      target: { value: 'Software Engineer' },
    });
    fireEvent.change(screen.getByTestId('experience-input'), {
      target: { value: '3' },
    });
    fireEvent.change(screen.getByTestId('location-input'), {
      target: { value: 'New York' },
    });
    fireEvent.change(screen.getByTestId('qualification-select'), {
      target: { value: 'BE/BTech' },
    });
 
    fireEvent.click(screen.getByTestId('search-button'));
 
    const result = await screen.findByTestId('result-message');
    expect(result).toHaveTextContent('Software Engineer');
  });
});
 
describe('Display component', () => {
  it('renders properly with all prop values', () => {
    render(<Display name="Harish" jobRole="Software Engineer" companyName="Tech Solutions Inc" />);
    expect(screen.getByTestId('result-message')).toHaveTextContent(
      'Hey, Harish. You can apply for the Software Engineer job at Tech Solutions Inc Company.'
    );
  });
 
  it('renders properly without prop values', () => {
    render(<Display />);
    expect(screen.getByTestId('result-message')).toHaveTextContent(
      'Sorry , currently there is no vacancy for your profile.'
    );
  });
});

