import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

import Root from './root';

describe('Component: Root', () => {
  it('render root', () => {
    render(<Root />, { wrapper: BrowserRouter });

    const navigation = screen.getByTestId('navigation');
    expect(navigation).toBeInTheDocument();

    const passwordNav = screen.getByText('Password Input');
    const calendarNav = screen.getByText('Calendar');

    expect(passwordNav).toBeInTheDocument();
    expect(calendarNav).toBeInTheDocument();
  })
})