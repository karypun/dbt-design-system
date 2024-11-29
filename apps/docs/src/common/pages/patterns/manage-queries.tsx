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
      <h3 className="govuk-heading-m">Related components</h3>
      <ul>
        <li><a href="/component/messages">messaging component</a></li>
        <li><a href="/component/picklist">picklist component</a></li>
      </ul>



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

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://docs.google.com/spreadsheets/d/1Q5M0fSTK3kdfXvac40pHC18885QQSHJEyaPO7FMPqOQ/edit?usp=sharing">discussion backlog</A>, or follow our <A href="../contributing">community guidance</A>.</p>
    </div>
</div>

);

export default Page;
