import React, { FunctionComponent } from 'react';
import refractor from 'refractor/core';
import json from 'refractor/lang/json';
import solidity from 'refractor/lang/solidity';
import { renderNodes } from './Node/helpers';

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

  const nodes = refractor.highlight(children, language);
  return <>{renderNodes(nodes)}</>;
};

export default Highlighter;
