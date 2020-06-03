import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import favicon from '../../assets/images/favicon.png';

interface Props {
  title?: string;
  description?: string;
}

/**
 * This component adds SEO-related tags to the head.
 */
const MetaData: FunctionComponent<Props> = ({ title, description }) => (
  <Helmet
    defaultTitle="Morten"
    title={title}
    htmlAttributes={{
      lang: 'en'
    }}
    meta={[
      {
        name: 'description',
        content: description ?? 'Personal website of Maarten Zuidhoorn, full-stack web developer.'
      },
      {
        name: 'author',
        content: 'Maarten Zuidhoorn'
      }
    ]}
    link={[
      {
        rel: 'icon',
        type: 'image/png',
        href: favicon
      }
    ]}
  />
);

export default MetaData;
