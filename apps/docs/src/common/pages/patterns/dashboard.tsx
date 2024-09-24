import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'View their dashboard';
const description = 'How to help users to view their dashboard';
const section = 'Patterns';
const subsection = 'Help users to';

const viewDashboard = require('../../../../assets/images/patterns/dashboard.png');

const Page: FC<PageProps> = ({ location }) => (
<div className="govuk-grid-row">
  <Helmet>
    <title>{title} - Home Office Design System</title>
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
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}></p>
      </div>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={viewDashboard} className="image-examples" alt="An example of a service verifying the user with passport details and date of birth" />
      </div>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p>Use this pattern to help users view and track items, such as new and previous applications and any decisions in one place.</p>
      <p>You should only provide users with the information they really need.</p>



      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This pattern has been used on LITE to sift through cases and view certain information at a glance.</p>

      <p className="govuk-body">More research is needed. If your service uses this
      pattern, get in touch to share your user research findings.</p>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>This pattern needs improving. We need evidence about:</p>
      <ul>
        <li>alterations for internal caseworking systems</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/353">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>

    </div>
</div>


);

export default Page;
