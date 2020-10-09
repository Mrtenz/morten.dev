import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { NAVIGATION_ITEMS } from '../../../config';
import Center from '../../Center';
import Link from '../../Link/Link';
import Socials from '../../Socials';
import Text from '../../Text';

interface Props {
  isOpen: boolean;
}

const MenuWrapper = styled.nav<Props>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.background};
  z-index: 10;
  opacity: 0;
  transform: scale(0.8);
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  pointer-events: none;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      transform: scale(1);
      pointer-events: all;
    `};
`;

const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const MenuListItem = styled(Text).attrs({ as: 'li' })`
  color: ${({ theme }) => theme.secondary};
  font-size: 4rem;
  text-align: center;
  margin: 5rem 0;
`;

const Menu: FunctionComponent<Props> = ({ isOpen }) => (
  <MenuWrapper isOpen={isOpen}>
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
);

export default Menu;
