import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Password from './Password';

const ruleText = [
  'Have at least one uppercase letter',
  'Have at least one lowercase letter',
  'Have at least one number',
  'Have at least one special character (!@#$...etc)',
  'Longer than 8 charaters',
];

describe('Component: Password', () => {
  it('renders Passowrd', async () => {
    render(<Password />);
    const labeledInput = screen.getByLabelText('Password');
    expect(labeledInput).toBeInTheDocument();

    expect(labeledInput).toHaveAttribute('placeholder', 'Password');
    
    screen.getByTestId(`${ruleText[0]}-fail`); // rule 1 fail
    screen.getByTestId(`${ruleText[1]}-fail`); // rule 2 fail
    screen.getByTestId(`${ruleText[2]}-fail`); // rule 3 fail
    screen.getByTestId(`${ruleText[3]}-fail`); // rule 4 fail
    screen.getByTestId(`${ruleText[4]}-fail`); // rule 5 fail
    
    fireEvent.change(labeledInput, { target: { value: 'a' }});
    screen.getByTestId(`${ruleText[0]}-fail`); // rule 1 fail
    screen.getByTestId(`${ruleText[2]}-fail`); // rule 3 fail
    screen.getByTestId(`${ruleText[3]}-fail`); // rule 4 fail
    screen.getByTestId(`${ruleText[4]}-fail`); // rule 5 fail
    await screen.findByTestId(`${ruleText[1]}-pass`); // rule 2 pass)

    fireEvent.change(labeledInput, { target: { value: 'k@Pl' }});

    screen.getByTestId(`${ruleText[2]}-fail`); // rule 3 fail
    screen.getByTestId(`${ruleText[4]}-fail`); // rule 5 fail
    await screen.findByTestId(`${ruleText[0]}-pass`); // rule 1 pass
    await screen.findByTestId(`${ruleText[1]}-pass`); // rule 2 pass
    await screen.findByTestId(`${ruleText[3]}-pass`); // rule 4 pass

    fireEvent.change(labeledInput, { target: { value: 'k@Pl0923' }});
    await screen.findByTestId(`${ruleText[0]}-pass`); // rule 1 pass
    await screen.findByTestId(`${ruleText[1]}-pass`); // rule 2 pass
    await screen.findByTestId(`${ruleText[2]}-pass`); // rule 3 pass
    await screen.findByTestId(`${ruleText[3]}-pass`); // rule 4 pass
    await screen.findByTestId(`${ruleText[4]}-pass`); // rule 5 pass
  })

  it('initial snapshot', () => {
    const tree = renderer.create(<Password />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
