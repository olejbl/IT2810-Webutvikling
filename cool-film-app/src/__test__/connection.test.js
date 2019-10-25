it('renders without crashing', () => {
  fetch('http://localhost:3001/movies')
  .then(result => {
  return result.json();
  })
  .then(data => {
  console.log(data)
   expect(data).toMatchSnapshot();
  })
});
