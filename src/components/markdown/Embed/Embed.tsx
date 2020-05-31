import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Heading from '../../Heading';
import Link from '../../Link';
import Text from '../../Text';

const HOSTNAME_REGEX = /https?:\/\/(.*?)\//;

export interface Props {
  title: string;
  description: string;
  url: string;
  image: string;
}

const EmbedWrapper = styled.div`
  a {
    display: flex;
    box-shadow: ${({ theme }) => theme.smallBoxShadow};
  }
`;

const EmbedDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 1.6rem 2rem;

  ${Heading} {
    font-size: 1.7rem;
    margin: 0;
  }

  ${Text} {
    margin-top: 1.2rem;
    margin-bottom: 0;
  }
`;

const EmbedImage = styled.img`
  width: 16rem;
  height: 16.7rem;
`;

const Embed: FunctionComponent<Props> = ({ title, description, url, image }) => {
  const hostname = url.match(HOSTNAME_REGEX)![1];

  return (
    <EmbedWrapper>
      <Link external={true} to={url}>
        <EmbedDescription>
          <Heading as="h2">{title}</Heading>
          <Text small={true} muted={true}>
            {description}
          </Text>
          <Text small={true} muted={true}>
            {hostname}
          </Text>
        </EmbedDescription>
        <EmbedImage src={image} alt={title} />
      </Link>
    </EmbedWrapper>
  );
};

export default Embed;
