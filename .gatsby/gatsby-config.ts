import { GatsbyConfig } from 'gatsby';
import { resolve } from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: 'https://morten.dev/',
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-cname',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('../src/components/Layout/Layout.tsx'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve(__dirname, '../content'),
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md'],
        remarkPlugins: [require('remark-unwrap-images')],
        rehypePlugins: [require('rehype-slug')],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 680,
              linkImagesToOriginal: false,
              disableBgImage: true,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
        ],
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 680,
              linkImagesToOriginal: false,
              disableBgImage: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://morten.dev'
      }
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'morten.dev',
        protocol: 'https',
        hostname: 'morten.dev'
      }
    }
  ],
};

export default config;
