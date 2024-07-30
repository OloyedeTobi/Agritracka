
import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../Pages/About.js'; 

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
  }));

test('renders Home component', () => {
  render(<About />);
});

