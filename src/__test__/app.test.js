
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  
import Home from '../components/Home'; 

test('renders Home component', () => {
    
    render(<Home />);

    const headingElement = screen.getByText(/Welcome to the Home Page/i);
    expect(headingElement).toBeInTheDocument();
});
