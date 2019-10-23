import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin-right: 2vw;
  margin-left: 2vw;
  margin-top: 3vh;
  max-width: 150px;
`;

const Poster = styled.img`
  width: 150px;
  left: 50%;
  height: 225px;
`;

const Text = styled.div`
  font-size: 10px;
`;

export default function MovieItem ({ title, posterUrl, year }) {
  return (
    <Container>
      <Poster alt={title} src={posterUrl} />
      <Text>{title}</Text>
      <Text>{year}</Text>
    </Container>
  );
}
