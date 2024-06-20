import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import config from '../config';

const siteTitle = config.title;

export const title = 'Patterns';
const description = 'DBT patterns'

const Page: FC<PageProps> = _ => (
  <Fragment>
    <Helmet>
      <title>{title} - {siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <h1>{title}</h1>
    <p>{description}</p>
  </Fragment>
);

export default Page;
