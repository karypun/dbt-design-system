import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const menu = (
  <Fragment>
  </Fragment>
);

export const title = 'Contribute';
const description = 'How to get involved and contribute to the DBT Design System'

const Page: FC<PageProps> = () => (
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
    <p>Contributions are open - anyone or any team can propose a pattern, add evidence or comment on something in progress.</p>
    <p>To do this, go to our <A href="https://trello.com/b/TZ77oz57/design-system-working-group">Trello board</A>.</p>






  </div>
  </div>

);

export default Page;
