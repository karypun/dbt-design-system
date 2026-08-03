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

const Page: FC<PageProps> = () => (
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

      <div style={{marginTop: "-2em"}}>
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}>Use this pattern for requesting more information from users.</p>
      </div>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={manageQuery} className="image-examples" alt="An example of a service verifying the user with passport details and date of birth" />
      </div>

      <h2 className="govuk-heading-l">How it works</h2>
      <p className="govuk-body">Internal caseworkers send messages to tell users:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>what is happening with their application</li>
        <li>whether more information is needed to support their case, known as queries or RFIs (request further information)</li>
        <li>what they need to do next</li>
      </ul>
      <p className="govuk-body">The user will receive an email notification via GOV.UK Notify with a link to their account
        where they can navigate to the application in question. From there, they can respond directly through their account.
      </p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This pattern is used in:</p>
      <ul>
        <li>Export licensing (LITE)</li>
      </ul>

      <p>More research is needed. If your service uses this pattern, get in touch to share your research findings.</p>

  <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://trello.com/b/TZ77oz57/design-system-working-group">Trello board</A>.</p>
    </div>
</div>

);

export default Page;
