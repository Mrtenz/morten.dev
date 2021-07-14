import { resolve } from 'path';
import { GatsbyNode } from 'gatsby';

const BLOG_POST_TEMPLATE = resolve(__dirname, '../src/templates/post.tsx');

interface AllMdxQueryData {
  allMdx: {
    edges: Array<{
      node: {
        frontmatter: {
          slug: string;
        };
      };
    }>;
  };
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        stream: require.resolve('stream-browserify'),
        util: false
      }
    }
  });
};

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
        slug: node.frontmatter.slug
      }
    })
  );
};
