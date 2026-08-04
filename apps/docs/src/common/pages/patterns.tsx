import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const menu = (
  <Fragment>
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Help users to</span>
    <NavigationMenu items={[
      {
        href: '/patterns/add-to-a-list',
        text: 'Add to a list'
      },
      {
        href: '/patterns/create-account',
        text: 'Create an account'
      },
      {
        href: '/patterns/manage-queries',
        text: 'Manage queries'
      },
      {
        href: '/patterns/manage-complex-applications',
        text: 'Manage complex tasks'
      }
    ]} />
     <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Pages</span>
    <NavigationMenu items={[
      {
        href: '/patterns/case-list-page',
        text: 'Case list page'
      }
    ]} />
  </Fragment>
);

export const title = 'Patterns';
const description = 'Patterns are best practice design solutions for specific user-focused tasks and page types';

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
      <h1>{title}</h1>
      <p>Patterns are guidance on how to solve certain types of problems. They include
      examples of successful approaches but are flexible and don’t prescribe exact design solutions.</p>
      <p>These patterns extend those used across government in the <A href="https://design-system.service.gov.uk/">GOV.UK
      design system</A>.
      As our patterns mature, we will look to contribute them to the GOV.UK system so they can be used more widely.</p>
    </div>
  </div>
);

export default Page;
