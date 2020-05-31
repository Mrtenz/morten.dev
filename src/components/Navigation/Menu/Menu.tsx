import { AnimatePresence, motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { NAVIGATION_ITEMS } from '../../../config';
import Center from '../../Center';
import Link from '../../Link/Link';
import Socials from '../../Socials';
import Text from '../../Text';

const MenuWrapper = styled(motion.nav)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.background};
  z-index: 10;
`;

const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const MenuListItem = styled(Text).attrs({ as: 'li' })`
  color: white;
  font-size: 4rem;
  text-align: center;
  margin: 5rem 0;
`;

interface Props {
  isOpen: boolean;
}

const Menu: FunctionComponent<Props> = ({ isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <MenuWrapper
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}>
        <Center>
          <MenuList>
            {NAVIGATION_ITEMS.map((item) => (
              <MenuListItem key={item.to}>
                <Link to={item.to}>{item.title}</Link>
              </MenuListItem>
            ))}
          </MenuList>
        </Center>
        <Socials />
      </MenuWrapper>
    )}
  </AnimatePresence>
);

export default Menu;
