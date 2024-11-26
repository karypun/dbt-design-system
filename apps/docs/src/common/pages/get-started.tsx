import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const menu = (
  <Fragment>

    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>DBT prototype</span>
    <NavigationMenu items={[

      {
        href: '',
        text: 'Set up your prototype'
      },
      {
        href: '',
        text: 'Build your protoype'
      }
    ]} />
    <span className="govuk-caption-m" style={{marginBottom: "1em"}}>Community resources</span>
    <NavigationMenu items={[
      {
        href: '',
        text: 'Design assets'
      }
    ]} />
  </Fragment>
);

export const title = 'Get started';
const description = 'The following introductory guides will help you to get set up';

const Page: FC<PageProps> = ({ location }) => (
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
        <p>This design system helps us understand what Trade and Regulatory Services look like and how they should behave. It builds on the <A href="https://design-system.service.gov.uk/">GOV.UK design system</A>.</p>

        <h2>Design assets</h2>
        <p>You can explore ideas and demonstrate page flows using these design assets:</p>
        <ul>
          <li><A href="https://internal.prototypes.uktrade.digital/lite-work">Licensing prototype kit (GOV.UK prototype kit)</A></li>
          <li><A href="https://app.mural.co/t/departmentforbusinessandtrad1574/m/departmentforbusinessandtrad1574/1718094413612/699e6b95d41d31ea4da1717eb1f645242da71026?sender=uf6ad2fb3e168bde1c2295660">Service blueprint template (Mural)</A></li>

        </ul>

        <h2>Development assets</h2>
        <p>LITE frontend contains the code you need to start building a user interface for LITE's services. 
          This includes both public facing transactional services and internal case management workflows.
        </p>
        <ul>
          <li><A href="https://github.com/uktrade/lite-frontend">LITE frontend</A></li>
        </ul>

    </div>
  </div>
);

export default Page;
