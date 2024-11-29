import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../component';

export const title = 'Messages';
const description = 'How to help users to view messages';
const section = 'Component';
const subsection = 'Components';

const applyContextualHelp = require('../../../../assets/images/patterns/messages.png');
const manageQuery = require('../../../../assets/images/patterns/manage-query.png');

const Page: FC<PageProps> = ({ location }) => (
<div className="govuk-grid-row">
  <Helmet>
    <title>{title} - Trade and Regulatory Services Design System</title>
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

      <p>Use this component in your service to display a list of messages in chronological order between different people or systems.
      For example, between case workers and external businesses.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyContextualHelp} className="image-examples" alt="An example of an interaction that shows contextual help" />
      </div>

      <h2 className="govuk-heading-l">When to use</h2>
      <p>When asking users: </p>
      <ul>
        <li>what is happening with their applications</li>
        <li>whether more information is needed to support their case, known as queries or RFIs (request further information)</li>
        <li>what they need to do next</li>
      </ul>

      <p>Diagram below shows how the messaging component is used between caseworkers and applicants. See pattern for <a href="/patterns/manage-queries">managing queries</a>.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={manageQuery} className="image-examples" alt="An example of an interaction that shows contextual help" />
      </div>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">More research is needed. If your service uses this pattern, get in touch to share your user research findings.</p>

      <p>If you have evidence this also works for your users, you can contribute to our backlog.</p>
      

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>This pattern needs improving. We need evidence about:</p>
      <ul>
        <li>alterations for internal caseworking systems</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://docs.google.com/spreadsheets/d/1Q5M0fSTK3kdfXvac40pHC18885QQSHJEyaPO7FMPqOQ/edit?usp=sharing">discussion backlog</A>, or follow our <A href="../contributing">community guidance</A>.</p>

    </div>
</div>


);

export default Page;
