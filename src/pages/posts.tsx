import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import Container from '../components/Container';
import Heading from '../components/Heading';
import MetaData from '../components/MetaData';
import PostsList from '../components/PostsList/PostsList';
import Section from '../components/Section';

interface Props {
  data: {
    allMdx: {
      edges: Array<{
        node: {
          frontmatter: {
            title: string;
            description: string;
            slug: string;
            datePublished: string;
          };
          excerpt: string;
          timeToRead: number;
        };
      }>;
    };
  };
}

const Posts: FunctionComponent<Props> = ({ data }) => (
  <Section>
    <MetaData title="Blog" />

    <Container>
      <Heading as="h1">Blog</Heading>
      <PostsList posts={data.allMdx.edges} />
    </Container>
  </Section>
);

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___datePublished], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            description
            slug
            datePublished
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;

export default Posts;
