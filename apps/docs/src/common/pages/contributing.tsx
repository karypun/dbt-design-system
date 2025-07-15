import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const menu = (
  <Fragment>
    <NavigationMenu items={[
          {
            href: 'https://github.com/users/karypun/projects/1/views/1',
            text: 'Discussion backlog'
          }
        ]} />
  </Fragment>
);

export const title = 'Contribute';
const description = 'How to get involved and contribute to the DBT Design System'

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - DBT Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={title} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
    <h1 className="heading-section">Contribute to the design system</h1>
    <p>Anyone can contribute to the design system. For example, you can:</p>
    <ul>
      <li>ask questions about a style, component or pattern</li>
      <li>share an example use of a component or pattern</li>
      <li>share research relating to a style, component or pattern</li>
      <li>request an addition or improvement to the content style guide</li>
      <li>propose a new style, component or pattern</li>
    </ul>

    <p><A href="https://github.com/users/karypun/projects/1/views/1">Start a new discussion</A> in the backlog.</p>



  </div>
  </div>

);

export default Page;
