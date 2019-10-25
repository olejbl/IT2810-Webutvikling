import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-right: 2vw;
  margin-left: 2vw;
  margin-top: 3vh;
  max-width: 150px;
  padding: 10px;
  background-image: radial-gradient(circle, #999999, #b9b9b9);
`;

const Poster = styled.img`
  width: 150px;
  left: 50%;
  height: 225px;
`;

const Text = styled.div`
  font-size: 10px;
`;

// This function creates a movie element. These are the ones you see in the List View
export default function MovieItem ({ title, posterUrl, year }) {
  return (
    <Container>
      <Poster alt={title} src={posterUrl} />
      <Text>{title}</Text>
      <Text>{year}</Text>
    </Container>
  );
}
