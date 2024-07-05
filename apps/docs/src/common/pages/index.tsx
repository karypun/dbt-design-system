import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

export const title = 'DBT Design System';
const description = 'The UK DBT\'s Design System, implemented in React';

const Page: FC<PageProps> = props => (
  <Fragment>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
    </Helmet>
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <h1>Design and build accessible and consistent Regulatory Services</h1>
        <p className="govuk-body-l">Save time by learning from the work and experiences of others, contribute back into the design system to share your knowledge, and reuse as much as possible to avoid repeating what has already been done</p>

      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Updates</h2>
          <p className="govuk-body govuk-!-font-size-16" style={{ color: '#626a6e' }}>Last updated 23 June 2024</p>
          <ul className="govuk-!-font-size-16">
            <li>Help <A href="/patterns/send-a-letter">send users a letter</A></li>
          </ul>
        </aside>
        <aside>
          <h2>Content style guide</h2>
          <p className="govuk-body govuk-!-font-size-19">How to write for Regulatory services.</p>
          <A className="govuk-body govuk-!-font-size-19" href="/content">Browse content style guide</A>
        </aside>
      </div>
    </div>
    <div className="govuk-grid-row homepage-sections">
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Styles</h2>
          <p className="govuk-body govuk-!-font-size-19">We apply different styles to our services and products depending on its type.</p>
          <A className="govuk-body govuk-!-font-size-19" href="/styles">Browse styles</A>
        </aside>
      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Components</h2>
          <p className="govuk-body govuk-!-font-size-19">Save time with reusable, accessible components for forms, tables and more.</p>
          <A className="govuk-body govuk-!-font-size-19" href="/components">Browse components</A>
        </aside>
      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Patterns</h2>
          <p className="govuk-body govuk-!-font-size-19">Help users complete common tasks like uploading files and getting help.</p>
          <A className="govuk-body govuk-!-font-size-19" href="/patterns">Browse patterns</A>
        </aside>
      </div>
    </div>
  </Fragment>
);

export default Page;
