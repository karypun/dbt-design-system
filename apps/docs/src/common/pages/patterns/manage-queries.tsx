import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Manage queries';
const description = 'How to help users manage queries';
const section = 'Patterns';
const subsection = 'Help users to';

const manageQuery = require('../../../../assets/images/patterns/manage-query.png');

const Page: FC<PageProps> = ({ location }) => (
<div className="govuk-grid-row">
  <Helmet>
    <title>{subsection} {title.toLowerCase()} - DBT Design System</title>
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

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={manageQuery} className="image-examples" alt="An example of a service verifying the user with passport details and date of birth" />
      </div>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p className="govuk-body">Internal caseworkers send messages to tell users:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>what is happening with their application</li>
        <li>whether more information is needed to support their case (known as RFIs or queries)</li>
        <li>what they need to do next</li>
      </ul>
      <p className="govuk-body">LITE sends messages through <A href="https://www.notifications.service.gov.uk/">GOV.UK Notify</A>.</p>


      <h2 className="govuk-heading-l">Accessibility</h2>


      <p className="govuk-body">If your service uses this pattern, let us know of any insights you have on accessibility considerations.</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">More research is needed. If your service uses this pattern, get in touch to share your user research findings.</p>
      
      <p className="govuk-body">If you have evidence this also works for your users, you can contribute to our backlog.</p>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>This pattern needs improving. We need evidence about:</p>
      <ul>
        <li>any other accessibility considerations</li>
        <li>any research findings</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/377">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>
    </div>
</div>

);

export default Page;
