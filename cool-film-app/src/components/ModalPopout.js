import React, { useState } from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
  position: absolute;
`;

export default function ModalPopout ({ children, popout: ModalContent }) {

  const [ isClicked, setClicked ] = useState(false);

  return (
    <>
      <div
        onClick={() => setClicked(true)} //modal
      >
        {children}
      </div>
        {isClicked ? (
        <ModalContainer>
            {ModalContent}
        </ModalContainer>
        ) : null}
        
    </>
  );
}
