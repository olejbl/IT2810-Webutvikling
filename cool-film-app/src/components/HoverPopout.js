import React, { useState } from 'react';

export default function HoverPopout ({ children, popout: Popout }) {
  const [ isHovering, setIsHovering ] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {children}
      </div>
      {isHovering ? Popout : null}
    </>
  );
}
