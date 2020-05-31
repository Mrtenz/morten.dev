import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { FunctionComponent } from 'react';
import Container from '../components/Container';
import Heading from '../components/Heading';
import components from '../components/markdown';
import MetaData from '../components/MetaData';
import TableOfContents from '../components/TableOfContents';

interface Props {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        description: string;
      };
      body: string;
      tableOfContents: {
        items: {
          url: string;
          title: string;
        }[];
      };
    };
  };
}

const Post: FunctionComponent<Props> = ({ data }) => (
  <article>
    <MetaData title={data.mdx.frontmatter.title} description={data.mdx.frontmatter.description} />

    <Container>
      <MDXProvider components={components}>
        <Heading as="h1">{data.mdx.frontmatter.title}</Heading>
        <TableOfContents items={data.mdx.tableOfContents.items} />
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </Container>
  </article>
);

export const query = graphql`
  query Post($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
      body
      tableOfContents(maxDepth: 2)
    }
  }
`;

export default Post;
