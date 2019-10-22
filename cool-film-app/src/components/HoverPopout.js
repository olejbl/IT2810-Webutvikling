import React, {useState} from 'react'
import styled from 'styled-components'

const PopoutContainer = styled.div`
  position: absolute;
  margin: auto;
  -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 3px #ccc;
  
`;

export default function HoverPopout({children, popout: PopoutContent}) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <>
            <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {children}
            </div>
            {isHovering ? (
                <PopoutContainer>
                    {PopoutContent}
                </PopoutContainer>
            ) : null}
        </>
    );
}
