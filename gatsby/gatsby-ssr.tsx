import { GatsbyBrowser } from 'gatsby';
import React from 'react';
import 'typeface-public-sans';
import 'typeface-source-code-pro';
import 'typeface-source-serif-pro';
import Providers from '../src/components/Providers';

/**
 * Wraps the root with providers.
 */
export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => <Providers>{element}</Providers>;
