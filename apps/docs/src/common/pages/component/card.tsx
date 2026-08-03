import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../component';

export const title = 'Card';
const description = 'How to help users to use flags';
const section = 'Component';
const subsection = 'Components';

const ecilCard = require('../../../../assets/images/patterns/ecil-cards.png');

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


      <p>Display links and grouped information on a dashboard or a homepage in an organised way.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={ecilCard} className="image-examples" alt="An example of an interaction that shows contextual help" />
      </div>

      <h2 className="govuk-heading-l">How to use</h2>

      <p className="govuk-body">Use the card on a dashboard or homepage to present links and a description of the link to users.</p>
      <p>This component is similar to the <A href="https://design.education.gov.uk/design-system/components/card">Department for Education's (DfE) card component</A> and HMRC's version as it uses the entire card as the link, which works well - there are no competing links within the card. Both designs use a department-specific blue hover state with white text.</p>
<p>However, the difference with this card is:</p>
      <ul>
        <li>a subtle grey background similar to HMRC which gives it more presence</li>
        <li>larger heading and body copy sizes of DfE </li>
      </ul>


      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This component is used in:</p>
      <ul>
        <li>Export Certificate Import Licencing (ECIL)</li>
      </ul>
<p>which have tested really well with users.</p>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://trello.com/b/TZ77oz57/design-system-working-group">Trello board</A>.</p>

    </div>
</div>


);

export default Page;
