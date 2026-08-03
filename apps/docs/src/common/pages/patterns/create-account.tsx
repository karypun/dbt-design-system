import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Create an account';
const description = 'How to help users to create an account';
const section = 'Patterns';
const subsection = 'Help users to';

const accessService = require('../../../../assets/images/patterns/access-service.png');
const applyAuthenticatePersonal3 = require('../../../../assets/images/patterns/govuk-notify.png');

const Page: FC<PageProps> = () => (
<div className="govuk-grid-row">
  <Helmet>
    <title>{title} - DBT design system</title>
    <meta name="description" content={description} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:article:section" content={section} />
  </Helmet>

    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>

    <div className="govuk-grid-column-three-quarters">
      <h1>
        <span className="caption">{subsection}</span>
        {title}
      </h1>
      <div style={{marginTop: "-2em"}}>
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}>Use this pattern if you need to set up an account securely using GOV.UK One Login.</p>
      </div>

      <p className="govuk-body"></p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={accessService} className="image-examples" alt="An example of a service verifying the user with passport details and date of birth" />
      </div>

      <h2 className="govuk-heading-l">How it works</h2>
      <p>Only create an account if there is a need to do so. For example, to return to a saved application
        or to manage multiple tasks in one place. See the <a href="https://design-system.service.gov.uk/patterns/create-accounts/">Create accounts pattern</a> in the GOV.UK Design System for more information.</p>

        <h3 className="govuk-heading-m">What to include</h3>
        <p className="govuk-body">The pattern should include:</p>
        <ul>
          <li>a sign in or create a GOV.UK One Login</li>
          <li>company details registration pages</li>
          <li>notifications about your account status (GOV.UK Notify)</li>
        </ul>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyAuthenticatePersonal3} className="image-examples" alt="An example of a service verifying the user with passport details and date of birth" />
      </div>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This pattern is used in:</p>
      <ul>
        <li>Export Certificate Import Licence (ECIL)</li>
        <li>LITE</li>
      </ul>

      <p>More research is needed. If your service uses this pattern, get in touch to share your research findings.</p>

  <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://trello.com/b/TZ77oz57/design-system-working-group">Trello board</A>.</p>

    </div>
</div>


);

export default Page;
