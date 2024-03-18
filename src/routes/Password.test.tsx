import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Password from './Password';

describe('Component: Password', () => {
  it('renders Passowrd', () => {
    render(<Password />);
    const labeledInput = screen.getByLabelText('Password');
    expect(labeledInput).toBeInTheDocument();

    const rule1 = screen.getByText('Have at least one uppercase letter');
    const rule2 = screen.getByText('Have at least one lowercase letter');
    const rule3 = screen.getByText('Have at least one number');
    const rule4 = screen.getByText('Have at least one special character (!@#$...etc)');
    const rule5 = screen.getByText('Longer than 8 charaters');

    const rule1Wrap = rule1.parentNode;
    const rule2Wrap = rule2.parentNode;
    const rule3Wrap = rule3.parentNode;
    const rule4Wrap = rule4.parentNode;
    const rule5Wrap = rule5.parentNode;

    expect(labeledInput).toHaveAttribute('placeholder', 'Password');
    
    expect(rule1Wrap?.firstChild).toHaveClass('stroke-zinc-500');
    expect(rule2Wrap?.firstChild).toHaveClass('stroke-zinc-500');
    expect(rule3Wrap?.firstChild).toHaveClass('stroke-zinc-500');
    expect(rule4Wrap?.firstChild).toHaveClass('stroke-zinc-500');
    expect(rule5Wrap?.firstChild).toHaveClass('stroke-zinc-500');

    fireEvent.change(labeledInput, { target: { value: 'a' }});

    expect(rule1Wrap?.firstChild).toHaveClass('stroke-zinc-500');
    expect(rule2Wrap?.firstChild).not.toHaveClass('stroke-zinc-500');
    expect(rule3Wrap?.firstChild).toHaveClass('stroke-zinc-500');
    expect(rule4Wrap?.firstChild).toHaveClass('stroke-zinc-500');
    expect(rule5Wrap?.firstChild).toHaveClass('stroke-zinc-500');

    fireEvent.change(labeledInput, { target: { value: 'ka@' }});
    expect(rule1Wrap?.firstChild).toHaveClass('stroke-zinc-500');
    expect(rule2Wrap?.firstChild).not.toHaveClass('stroke-zinc-500');
    expect(rule3Wrap?.firstChild).toHaveClass('stroke-zinc-500');
    expect(rule4Wrap?.firstChild).not.toHaveClass('stroke-zinc-500');
    expect(rule5Wrap?.firstChild).toHaveClass('stroke-zinc-500');

    fireEvent.change(labeledInput, { target: { value: 'k@Pl' }});

    expect(rule1Wrap?.firstChild).not.toHaveClass('stroke-zinc-500');
    expect(rule2Wrap?.firstChild).not.toHaveClass('stroke-zinc-500');
    expect(rule3Wrap?.firstChild).toHaveClass('stroke-zinc-500');
    expect(rule4Wrap?.firstChild).not.toHaveClass('stroke-zinc-500');
    expect(rule5Wrap?.firstChild).toHaveClass('stroke-zinc-500');

    fireEvent.change(labeledInput, { target: { value: 'k@Pl0' }});

    expect(rule1Wrap?.firstChild).not.toHaveClass('stroke-zinc-500');
    expect(rule2Wrap?.firstChild).not.toHaveClass('stroke-zinc-500');
    expect(rule3Wrap?.firstChild).not.toHaveClass('stroke-zinc-500');
    expect(rule4Wrap?.firstChild).not.toHaveClass('stroke-zinc-500');
    expect(rule5Wrap?.firstChild).toHaveClass('stroke-zinc-500');

    fireEvent.change(labeledInput, { target: { value: 'k@Pl0923' }});

    expect(rule1Wrap?.firstChild).not.toHaveClass('stroke-zinc-500');
    expect(rule2Wrap?.firstChild).not.toHaveClass('stroke-zinc-500');
    expect(rule3Wrap?.firstChild).not.toHaveClass('stroke-zinc-500');
    expect(rule4Wrap?.firstChild).not.toHaveClass('stroke-zinc-500');
    expect(rule5Wrap?.firstChild).not.toHaveClass('stroke-zinc-500');
  })

  it('initial snapshot', () => {
    const tree = renderer.create(<Password />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
