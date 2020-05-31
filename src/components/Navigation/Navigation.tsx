import { globalHistory } from '@reach/router';
import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import Hamburger from '../Hamburger';
import Menu from './Menu';

const HamburgerContainer = styled.div`
  position: fixed;
  top: 5rem;
  left: 5rem;
  z-index: 11;
`;

const Navigation: FunctionComponent = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    return globalHistory.listen(() => {
      setOpen(false);
    });
  }, []);

  const handleToggle = () => setOpen((state) => !state);

  return (
    <>
      <Menu isOpen={isOpen} />
      <HamburgerContainer>
        <Hamburger isOpen={isOpen} onClick={handleToggle} />
      </HamburgerContainer>
    </>
  );
};

export default Navigation;
