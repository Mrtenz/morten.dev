import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { formatDate } from '../../utils/date';
import Heading from '../Heading';
import Link from '../Link';
import Text from '../Text';

interface Props {
  posts: Array<{
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
}

const PostsListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  border-top: 0.1rem solid ${({ theme }) => theme.border};
`;

const Post = styled.li`
  margin: 0;
  padding: 2rem 0;
  color: ${({ theme }) => theme.text};
  border-bottom: 0.1rem solid ${({ theme }) => theme.border};

  ${Heading}, ${Text} {
    margin: 1.2rem 0;
  }
`;

const PostsList: FunctionComponent<Props> = ({ posts }) => (
  <PostsListWrapper>
    {posts.map((post) => (
      <Post key={post.node.frontmatter.slug}>
        <Heading as="h3">
          <Link to={`/posts/${post.node.frontmatter.slug}`}>{post.node.frontmatter.title}</Link>
        </Heading>
        <Text muted={true}>
          <Link to={`/posts/${post.node.frontmatter.slug}`}>{post.node.frontmatter.description}</Link>
        </Text>
        <Text muted={true} small={true}>
          Published on {formatDate(post.node.frontmatter.datePublished)} &middot; {post.node.timeToRead} min read
        </Text>
      </Post>
    ))}
  </PostsListWrapper>
);

export default PostsList;
