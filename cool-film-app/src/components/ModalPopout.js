import React, { useState } from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
  position: absolute;
`;

export default function ModalPopout ({ children, popout: ModalContent }) {

  //const [ isClicked, setClicked ] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((current) => !current)
  


  return (
    <>
      <div
        onClick={toggleClicked} //modal

        //onMouseOut={() => setClicked(false)} //modal
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
