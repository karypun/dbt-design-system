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
        <h1>Design your T-REG services consistently</h1>
        <p className="govuk-body-l">Use this design system to help you design and deliver: </p>
        <ul>
            <li>public-facing T-Reg services consistently</li>
            <li>intenal case management systems based on reusable components and patterns</li>
          </ul>


      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Updates</h2>
          <p className="govuk-body govuk-!-font-size-16" style={{ color: '#626a6e' }}>Last updated 28 May 2025</p>
          <ul className="govuk-!-font-size-16">
            <li>Set up <A href="https://github.com/users/karypun/projects/1/views/1">community discussion backlog</A></li>
          </ul>
        </aside>
        <aside>
          <h2>Content style guide</h2>
          <p className="govuk-body govuk-!-font-size-19">How to write for TREGS services.</p>
          <A className="govuk-body govuk-!-font-size-19" href="/content">Browse content style guide</A>
        </aside>
      </div>
    </div>
    <div className="govuk-grid-row homepage-sections">
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Pages</h2>
          <p className="govuk-body govuk-!-font-size-19">Design and build reusing LITE's case management pages</p>
          <A className="govuk-body govuk-!-font-size-19" href="/patterns/case-list-page">Browse pages</A>
        </aside>
      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Components</h2>
          <p className="govuk-body govuk-!-font-size-19">Save time with reusable, accessible components for forms, tables and more.</p>
          <A className="govuk-body govuk-!-font-size-19" href="/component">Browse components</A>
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
