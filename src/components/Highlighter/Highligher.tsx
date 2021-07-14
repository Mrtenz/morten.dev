import React, { FunctionComponent } from 'react';
import { refractor } from 'refractor';
import { RefractorNode } from 'refractor/core';
import json from 'refractor/lang/json';
import solidity from 'refractor/lang/solidity';
import Node from './Node';

refractor.register(json);
refractor.register(solidity);

interface Props {
  language: string;
  children: string;
}

const Highlighter: FunctionComponent<Props> = ({ language, children }) => {
  if (!refractor.registered(language)) {
    throw new Error(`Language ${language} is not registered.`);
  }

  const root = refractor.highlight(children, language) as unknown as RefractorNode;
  return (
    <>
      <Node node={root} />
    </>
  );
};

export default Highlighter;
