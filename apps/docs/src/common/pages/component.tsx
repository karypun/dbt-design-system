import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const menu = (
  <Fragment>
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Components</span>
    <NavigationMenu items={[

      {
        href: '/component/messages',
        text: 'Messages'
      }
    ]} />
  </Fragment>
);

export const title = 'Components';
const description = 'Components are reusable parts of the user interface that have been made to support a variety of applications';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - Home Office Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={title} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
      <h1>{title}</h1>
      <p>
        Components are reusable parts of the user interface that have been made to support a variety of applications.
      </p>
      <p>
        Individual components can be used in multiple different patterns and contexts. For example, the text input component can be used to ask for an email address, a National Insurance number or someone’s name.
      </p>
    </div>
  </div>
);

export default Page;
