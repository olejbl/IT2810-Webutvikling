import React from 'react';
const renderer = "Test"

it('renders correctly', () => {
  const tree = "test"    
  expect(tree).toMatchSnapshot();
});
