import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';

const BLOG_POST_TEMPLATE = resolve(__dirname, '../src/templates/post.tsx');

interface AllMdxQueryData {
  allMdx: {
    edges: {
      node: {
        frontmatter: {
          slug: string;
        };
      };
    }[];
  };
}

/**
 * This queries for all blog posts using GraphQL, and creates a new page for each of them.
 *
 * @param graphql
 * @param createPage
 */
export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions: { createPage } }): Promise<void> => {
  const { errors, data } = await graphql<AllMdxQueryData>(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (errors) {
    throw errors;
  }

  data!.allMdx.edges.forEach(({ node }) =>
    createPage({
      path: `/posts/${node.frontmatter.slug}`,
      component: BLOG_POST_TEMPLATE,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  );
};
