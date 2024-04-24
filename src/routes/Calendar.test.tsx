import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Calendar from './Calendar';

describe('Component: Calendar', () => {
  it('render Calendar', () => {
    render(<Calendar />);
    // const cancelBtn = screen.getByText('Cancel');
    // expect(cancelBtn).toBeInTheDocument();
    // const okBtn = screen.getByText('OK');
    // expect(okBtn).toBeInTheDocument();
  });

  it('initial snapshot', () => {
    const tree = renderer.create(<Calendar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
