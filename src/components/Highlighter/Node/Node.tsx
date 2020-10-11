import React, { FunctionComponent } from 'react';
import { RefractorNode } from 'refractor/core';
import styled from 'styled-components';
import { BOLD_TYPES, getType, renderNodes, Type } from './helpers';

interface ElementProps {
  type: Type;
}

const Element = styled.span<ElementProps>`
  color: ${({ theme, type }) => theme.syntax[type]};
  font-weight: ${({ type }) => (BOLD_TYPES.includes(type) ? 'bold' : 'normal')};
`;

interface Props {
  node: RefractorNode;
}

const Node: FunctionComponent<Props> = ({ node }) => {
  if (node.type === 'text') {
    return <>{node.value}</>;
  }

  return <Element type={getType(node)}>{renderNodes(node.children)}</Element>;
};

export default Node;
