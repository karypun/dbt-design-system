import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Create an account';
const description = 'How to help users to create an account';
const section = 'Patterns';
const subsection = 'Help users to';

const applyAuthenticatePersonal = require('../../../../assets/images/patterns/access-service.png');
const applyAuthenticatePersonal2 = require('../../../../assets/images/patterns/govuk-one.png');
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



      <h2 className="govuk-heading-l">How it works</h2>
      <p>Only create an account if there is a need to do so. For example, to return to a saved application
        or to manage multiple applications. In LITE this is broken into these steps:</p>
      <h3 className="govuk-heading-m">1. Sign in or create a GOV.UK One Login</h3>
      

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyAuthenticatePersonal2} className="image-examples" alt="An example of a service verifying the user with passport details and date of birth" />
      </div>

      <h3 className="govuk-heading-m">2. Register your company details</h3>
      <p>Submit your application to request an account. An internal team will review your request.</p>
      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyAuthenticatePersonal} className="image-examples" alt="An example of a service verifying the user with passport details and date of birth" />
      </div>

      <h3 className="govuk-heading-m">3. Receive notifications about your account</h3>
      <p>Once your request has been submitted, you will receive a message from GOV.UK Notify that your request is being reviewed. If successful, you will receive another
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

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/476">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>

    </div>
</div>


);

export default Page;
