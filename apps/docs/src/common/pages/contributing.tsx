import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';

import Markdown from '../../../../../docs/contributing.md';

export const title = 'Contributing';
const description = 'How to contribute to DBT design system';

const Page: FC<PageProps> = props => (
  <Fragment>
    <Helmet>
      <title>{title} - DBT design system</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <Markdown />
  </Fragment>
);

export default Page;
