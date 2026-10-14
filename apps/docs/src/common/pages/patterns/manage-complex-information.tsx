import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Manage grouped information';
const description = 'How to help users to manage grouped information in a systematic way';
const section = 'Patterns';
const subsection = 'Help users to';

const applyGroupInformation = require('../../../../assets/images/patterns/multicard-list-view.png');

const Page: FC<PageProps> = () => (
<div className="govuk-grid-row">
  <Helmet>
    <title>{title} - DBT Design System</title>
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

      <p className="govuk-body">Allow users to manage groups of similar information in a systematic way.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyGroupInformation} className="image-examples" alt="An example of an interaction that shows grouped information" />
      </div>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p>Use this pattern when there is a lot of information on an item.</p>
<p>Avoid using on an item with fewer pieces of information. Consider using a table instead.</p>
      <h2 className="govuk-heading-l">How it works</h2>
      <p>Sometimes an application may ask a series of questions to gather information on a particular item; if a user wants to add another item, they will be asked those same questions again for a second item and so on.</p>
      <p className="govuk-body">This pattern is used on public-facing licensing services and contains:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>a set of questions for an item</li>
        <li>a <A href="https://design-system.service.gov.uk/components/summary-list/">summary list</A> component</li>
        <li>a <A href="https://design-system.service.gov.uk/components/summary-list/">summary card</A> component</li>
        <li>question prompt to ask if another item gets added</li>
      </ul>
      <p>The pattern draws on GOV.UK's summary list and summary card together. The summary list provides all the information for the item, whereas the summary card highlights key information to help minimise overwhelming users, especially if multiple cards are used (multiple card list view).</p>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p>If your service uses this pattern, let us know of any insights you have on
      accessibility considerations.</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This pattern is used in Export certificate import licensing (ECIL). Research had found this to be clear for users. If your service uses this, let us know.</p>


      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>To contribute, add your thoughts and research findings to our <A href="https://trello.com/b/TZ77oz57/design-system-working-group">Trello board</A>.</p>

    </div>
</div>


);

export default Page;
