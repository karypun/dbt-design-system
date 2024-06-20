import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A, NotGovUKPage } from '@not-govuk/components';

import './app.scss';

export const PageWrap: FC<PageProps> = ({ children }) => {
  const navigation = [
    { href: '/get-started', text: 'Get started' },
    { href: '/styles', text: 'Styles' },
    { href: '/components', text: 'Components' },
    { href: '/patterns', text: 'Patterns' },
    { href: '/content', text: 'Content guide' },  
    { href: '/contributing', text: 'Contributing' }
  ];

  return (
    <NotGovUKPage
      department="department-for-b"
      feedbackHref="https://github.com/daniel-ac-martin/NotGovUK/issues/new"
      footerContent={(
        <Fragment>
          Copyright (C) 2024 Crown Copyright<br />
        </Fragment>
      )}
      navigation={navigation}
      meta={[
        { href: "https://github.com/daniel-ac-martin/NotGovUK", text: "GitHub" },
        { href: "/sitemap", text: "Sitemap" },
        { href: "https://github.com/daniel-ac-martin/NotGovUK/issues/new", text: "Contact" },
      ]}
      organisationText="Dept for Business & Trade"
      phase="alpha"
      serviceName="Design system"
      title="DBT Design System"
      maxContentsWidth={1100}
    >
      {children}
    </NotGovUKPage>
  );
};

export default PageWrap;
