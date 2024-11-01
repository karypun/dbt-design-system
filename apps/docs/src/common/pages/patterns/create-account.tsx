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

const Page: FC<PageProps> = ({ location }) => (
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
      <p>In LITE, the pattern is further extended by showing how it is applied in practice with export licensing to create an account using the GOV.UK One Login. These are the steps
        LITE uses to create an account:</p>
      <h3 className="govuk-heading-m">1. Sign in or create a GOV.UK One Login</h3>
      <p>Go to <a href="https://www.sign-in.service.gov.uk/users-create-an-account-upfront-pdf-february-2023">GOV.UK One Login</a> to see how it works.</p>


      <h3 className="govuk-heading-m">2. Register your company details</h3>
      <p>Once logged in, you will be asked to complete your company details as part of the application process to request a LITE account. An internal team will review your request.</p>
      

      <h3 className="govuk-heading-m">3. Receive notifications about your account</h3>
      <p>After your request has been submitted, you will receive a message from GOV.UK Notify that your request is being reviewed. If successful, you will receive another
         email that it has been approved with a link to access your new account.</p>
      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyAuthenticatePersonal3} className="image-examples" alt="An example of a service verifying the user with passport details and date of birth" />
      </div>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p>If your service uses this pattern, let us know of any insights you have on
      accessibility considerations.</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p>More research is needed. If your service uses this pattern, get in touch to
      share your user research findings.</p>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>This pattern needs improving. We need evidence about:</p>
      <ul>
        <li>how to write for this pattern</li>
        <li>any research findings</li>
        <li>any accessibility considerations</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="#s">GitHub discussion</A>, or follow our <A href="#s">contribute guidance</A>.</p>

    </div>
</div>


);

export default Page;
