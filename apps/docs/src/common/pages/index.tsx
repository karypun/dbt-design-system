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
        <h1>Design and deliver your TREG services consistently</h1>
        <p>The TREGS design system provides reusable building blocks that help standardise both public-facing and internal case management systems for domestic and international regulations, licensing and trade.</p>
        <p>It builds on the <A href="https://design-system.service.gov.uk/">GOV.UK design system</A> and supplements BIST and other portfolio design systems, providing TREGS-specific elements where evidenced.</p>
        <p className="govuk-body govuk-!-font-size-19">This is a temporarily hosted system until we migrate into the <A href="https://design.businessandtrade.gov.uk/">BIST domain</A>.</p>


      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Updates</h2>
          <p className="govuk-body govuk-!-font-size-16" style={{ color: '#1a1f2b' }}>Last updated 11 August 2026</p>
          <ul className="govuk-!-font-size-16">
            <li>Added GOV.UK One Login Django and Licensing Case Management Working Model as team resources in <A href="/get-started/">Get started</A></li>
            <li>Published new <A href="/component/">components</A>: card, task list variants and timeline</li>
            <li>Published new <A href="/patterns/">patterns</A>: 'Add to a list', 'Case list page' and 'Review dates'</li>
            <li>Set up <A href="https://trello.com/b/TZ77oz57/design-system-working-group">community backlog</A></li>
          </ul>
        </aside>

      </div>
    </div>
    <div className="govuk-grid-row homepage-sections">
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Pages</h2>
          <p className="govuk-body govuk-!-font-size-19">Design and build scalable case management pages</p>
          <A className="govuk-body govuk-!-font-size-19" href="/patterns/case-list-page">Browse pages</A>
        </aside>
      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Components</h2>
          <p className="govuk-body govuk-!-font-size-19">Save time with reusable, accessible components.</p>
          <A className="govuk-body govuk-!-font-size-19" href="/component">Browse components</A>
        </aside>
      </div>
      <div className="govuk-grid-column-one-third">
        <aside>
          <h2>Patterns</h2>
          <p className="govuk-body govuk-!-font-size-19">Make common licensing casework and regulatory patterns visible.</p>
          <A className="govuk-body govuk-!-font-size-19" href="/patterns">Browse patterns</A>
        </aside>
      </div>
    </div>
  </Fragment>
);

export default Page;
