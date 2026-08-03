import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../component';

export const title = 'Timeline';
const description = 'How to help users to use the timeline';
const section = 'Component';
const subsection = 'Components';


const Page: FC<PageProps> = () => (
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


      <p>Show a record of events and messages in chronological order.</p>

      <h2 className="govuk-heading-l">How to use</h2>
      <p className="govuk-body">Show the most recent event first.</p>

      <h3 className="govuk-heading-m">What to include</h3>
      <p className="govuk-body">Each item should include:</p>
      <ul>
        <li>the date (or date and time)</li>
        <li>who or what made the update</li>
      </ul>

      <p className="govuk-body">You could also include:</p>
      <ul>
        <li>a free text box for adding case notes or other information and call to actions to add or cancel information onto the timeline</li>
        <li>a link to more detail</li>
      </ul>

      <h3 className="govuk-heading-m">For complex services</h3>
      <p className="govuk-body">You may have a bigger timeline which covers items at a higher level which should include:</p>
      <ul>
        <li>view all notes and timeline</li>
        <li>who or what made the update (for example, across multiple teams)</li>
      </ul>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This component is used in:</p>
      <ul>
        <li>Export licensing (LITE)</li>
      </ul>
      <p>which have tested really well with users.</p>

            <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://trello.com/b/TZ77oz57/design-system-working-group">Trello board</A>.</p>

    </div>
</div>


);

export default Page;
