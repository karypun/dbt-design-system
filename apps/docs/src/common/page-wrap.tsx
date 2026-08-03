import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A, NotGovUKPage } from '@not-govuk/components';

import './app.scss';

export const PageWrap: FC<PageProps> = ({ children }) => {
  const navigation = [
    { href: '/get-started', text: 'Get started' },
    { href: '/component', text: 'Components' },
    { href: '/patterns', text: 'Patterns' },
    { href: '/contributing', text: 'Community' }
  ];

  return (
    <NotGovUKPage
      department="department-for-business-trade"
      feedbackHref="https://github.com/daniel-ac-martin/NotGovUK/issues/new"
      footerContent={(
        <Fragment>
          &copy; Crown Copyright<br />
        </Fragment>
      )}
      navigation={navigation}
      meta={[
        { href: "https://github.com/daniel-ac-martin/NotGovUK", text: "GitHub" },
        { href: "/sitemap", text: "Sitemap" },
        { href: "https://github.com/daniel-ac-martin/NotGovUK/issues/new", text: "Contact" },
      ]}
      organisationText="Department for Business, Innovation, Science and Trade"

      serviceName="TREGS design system"
      title="DBT Trade and Regulatory Services design system"
      maxContentsWidth={1100}
    >
      {children}
    </NotGovUKPage>
  );
};

export default PageWrap;
