import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const menu = (
  <Fragment>
  </Fragment>
);

export const title = 'Get started';
const description = 'The following introductory guides will help you to get set up';

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
        <p>The design system for the Trade and Regulatory Services provides reusable building blocks that help standardise both public-facing and internal case management systems. It builds on the <A href="https://design-system.service.gov.uk/">GOV.UK design system</A> and supplements BIST and other portfolio design systems, providing TREGS-specific elements where evidenced.</p>

        <h2>Licensing case management: a shared working model</h2>
        <p>This <A href="https://uktrade.atlassian.net/wiki/spaces/DCMSS/pages/5200347262/Licensing+Case+Management+Shared+Working+Model">Confluence hub</A> brings together the shared working model for licensing case management across TREGS. It provides a common way to describe licensing casework using shared stages, service patterns and capabilities which feeds into some of the caseworking components, patterns and pages in the design system.</p>


        <h2>Design assets</h2>
        <ul>
          <li><A href="https://app.mural.co/t/departmentforbusinessandtrad1574/m/departmentforbusinessandtrad1574/1718094413612/699e6b95d41d31ea4da1717eb1f645242da71026?sender=uf6ad2fb3e168bde1c2295660">Service blueprint template (Mural)</A></li>
        </ul>

    </div>
  </div>
);

export default Page;
