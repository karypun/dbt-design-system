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
        <p>This design system provides reusable building blocks that help standardise both public-facing and internal case management systems for domestic and international regulations, licensing and trade.</p>
        <p>It builds on the <A href="https://design-system.service.gov.uk/">GOV.UK design system</A> and supplements BIST and other portfolio design systems, providing TREGS-specific elements where evidenced.</p>

        <h2>Licensing case management working model</h2>
        <p>This shared working model sits in <A href="https://uktrade.atlassian.net/wiki/spaces/DCMSS/pages/5200347262/Licensing+Case+Management+Shared+Working+Model">Confluence</A> and contains an MVP caseworking spine with reusable stages, service patterns and capabilities which feeds into some of the caseworking components, patterns and pages in the design system.</p>
        <p> By standardising the model, this will allow TREGS services to have a more consistent case management approach to solving common caseworking problems.</p>


        <h2>Design assets</h2>
        <ul>
          <li><A href="https://app.mural.co/t/departmentforbusinessandtrad1574/m/departmentforbusinessandtrad1574/1718094413612/699e6b95d41d31ea4da1717eb1f645242da71026?sender=uf6ad2fb3e168bde1c2295660">Service blueprint template (Mural)</A></li>
        </ul>

    </div>
  </div>
);

export default Page;
