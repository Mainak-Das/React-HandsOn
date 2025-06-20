import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App.js';
import Blog from './App.js';
import FollowersCount from './App.js';
import '@testing-library/jest-dom';

// Test suite for Blog component
describe('Blog component', () => {
  it('renders blog information correctly', () => {
    const { getByText, getByRole } = render(<App />);
    
    // Check if the main heading renders
    expect(getByText('Personal Blog')).toBeInTheDocument();

    // Check for blog info
    expect(getByText('Dr.Priscilla Jegan')).toBeInTheDocument();
    expect(getByText('Medico')).toBeInTheDocument();
    expect(getByText('SRMite')).toBeInTheDocument();

    // Check for Follow button
    expect(getByRole('button', { name: /follow/i })).toBeInTheDocument();
  });
});

// Test suite for FollowersCount component
describe('FollowersCount component', () => {
  it('initial followers count is 0', () => {
    const { getByText } = render(<App />);
    expect(getByText('Followers: 0')).toBeInTheDocument();
  });

  it('increments followers count when the Follow button is clicked', () => {
    const { getByText, getByRole } = render(<App />);
    const button = getByRole('button', { name: /follow/i });

    fireEvent.click(button); // 1st click
    expect(getByText('Followers: 1')).toBeInTheDocument();

    fireEvent.click(button); // 2nd click
    expect(getByText('Followers: 2')).toBeInTheDocument();
  });
});
