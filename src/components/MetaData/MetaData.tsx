import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';

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
      }
    ]}
  />
);

export default MetaData;
