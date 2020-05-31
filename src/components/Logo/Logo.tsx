import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';

const OutlineAnimation = keyframes`
  0% {
    fill-opacity: 0;
  }

  40% {
    fill-opacity: 0;
  }

  50% {
    stroke-dashoffset: 0;
  }

  100% {
    fill-opacity: 1;
    stroke-dashoffset: 0;
  }
`;

const ShadowAnimation = keyframes`
  0% {
    fill-opacity: 0;
  }

  50% {
    fill-opacity: 0;
  }

  to {
    fill-opacity: 1;
  }
`;

const Path = styled.path`
  stroke-width: 0.1;
  stroke-miterlimit: 10;
  fill: ${({ theme }) => theme.logo.fill};
  stroke: ${({ theme }) => theme.logo.fill};
  animation: 3s ease-in 0s 1 normal forwards running ${OutlineAnimation};
`;

const Letter = styled(Path)`
  stroke-dasharray: 157.279;
  stroke-dashoffset: 157.279px;
`;

const Corner = styled(Path)`
  stroke-dasharray: 34.1421;
  stroke-dashoffset: 34.1421px;
`;

const Shadow = styled(Path)`
  fill: ${({ theme }) => theme.logo.shadow};
  stroke: none;
  animation: 5s ease-in 0s 1 normal forwards running ${ShadowAnimation};
`;

const Logo: FunctionComponent = () => (
  <svg xmlns="https://www.w3.org/2000/svg" version="1.1" width="300" height="300" viewBox="20 30 55 40">
    <Letter d="M47.5,67.5 L50,70 L60,70 L75,55 L75,45 L55,65 L52.5,62.5 L75,40 L75,30 L47.5,57.5" />
    <Letter d="M47.5,67.5 L45,70 L35,70 L20,55 L20,45 L40,65 L42.5,62.5 L20,40 L20,30 L47.5,57.5" />

    <Corner d="M75,70 L65,70 L75,60 L75,70" />
    <Corner d="M20,70 L30,70 L20,60 L20,70" />

    <Shadow d="M45,70 L47.5,67.5 L42.5,62.5 L40,65 L45,70 M52.5,62.5 L55,60 L50,55 L47.5,57.5 L52.5,62.5 M60,70 62.5,67.5 L57.5,62.5 L55,65 L60,70" />
  </svg>
);

export default Logo;
