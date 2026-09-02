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
const mvpSpine = require('../../../assets/images/patterns/mvp-spine.png');

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
        <p>The TREGS design system encourages teams to learn from the work of others, reuse where possible and solve common problems across the portfolio.</p>


        <h2>Licensing case management working model</h2>
        <p>This shared working model contains an MVP caseworking spine with reusable stages, service patterns and capabilities which feeds into some of the caseworking components, patterns and pages in the design system.</p>
        <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
          <img src={mvpSpine} className="image-examples" alt="A table showing the breakdown of the caseworking spine into stages, service pattern, capabilities and evidence" />
        </div>
<p> By reusing the model, this allows TREGS services to have a more consistent case management approach to solving common caseworking problems. Visit the <A href="https://uktrade.atlassian.net/wiki/spaces/DCMSS/pages/5200347262/Licensing+Case+Management+Shared+Working+Model">Confluence hub</A> to find out more.</p>
        <h2>Design resources</h2>
        <ul>
          <li><A href="https://app.mural.co/t/departmentforbusinessandtrad1574/m/departmentforbusinessandtrad1574/1718094413612/699e6b95d41d31ea4da1717eb1f645242da71026?sender=uf6ad2fb3e168bde1c2295660">Service blueprint template (Mural)</A></li>
        </ul>

        <h2>Development resources</h2>
        <ul>
          <li><A href="https://github.com/uktrade/govuk-onelogin-django">GOV.UK One Login Django (GitHub)</A></li>
        </ul>

    </div>
  </div>
);

export default Page;
