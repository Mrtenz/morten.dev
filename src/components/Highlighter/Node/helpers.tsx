import React from 'react';
import { RefractorNode } from 'refractor/core';
import { toCamelCase } from '../../../utils/text';
import Node from './Node';

export type Type =
  | 'builtin'
  | 'className'
  | 'comment'
  | 'function'
  | 'keyword'
  | 'number'
  | 'operator'
  | 'property'
  | 'punctuation'
  | 'string'
  | 'text'
  | 'version';

export const BOLD_TYPES: Type[] = ['keyword'];

export const renderNodes = (nodes: RefractorNode[]) => {
  return (
    <>
      {nodes.map((node, index) => (
        <Node key={`line-${index}`} node={node} />
      ))}
    </>
  );
};

export const getType = (node: RefractorNode): Type => {
  if (node.type === 'text') {
    return 'text';
  }

  if (node?.properties?.className) {
    return toCamelCase(node.properties.className[1]) as Type;
  }

  return 'text';
};
