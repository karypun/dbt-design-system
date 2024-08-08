import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Add multiple things';
const description = 'How to help users to add multiple things';
const section = 'Patterns';
const subsection = 'Help users to';

const applyAddAnother = require('../../../../assets/images/patterns/add-another.svg');

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

      <p className="govuk-body">H-CSAT (Harmonised Customer Satisfactin Tool) is DBT's standardised instrument for gathering the <A href="https://www.gov.uk/service-manual/measuring-success/measuring-user-satisfaction">Government Digital Service metric of user satisfaction</A>.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyAddAnother} className="image-examples" alt="An example of an interaction to add multiple addresses" />
      </div>

      <h2 className="govuk-heading-l">How it works</h2>
      <p>The H-CSAT consists of three standard questions:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>a five-point rating system</li>
        <li>question regarding any encountered issues</li>
        <li>a free-text response box for suggestions to improve the service</li>
      </ul>
      <p>It can be accessed at any point in the service, either from the feedback banner or at the end of the user's journey.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyAddAnother} className="image-examples" alt="An example of an interaction to add multiple addresses" />
      </div>

<p>In addition to the standard questions, you may choose to include 1-2 optional service-specific questions. Contact the M&E team on how to select and develop
these questions. They will also help to outline the stages in the user's journey for H-CSAT implementation.</p>


      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This pattern is used by:</p>
      <ul>
        <li>Digital Market Access Service</li>
        <li>LITE</li>
      </ul>
      <p className="govuk-body">More research is needed. If your service uses this
      pattern, get in touch to share your user research findings.</p>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>This pattern needs improving. We need evidence about:</p>
      <ul>
        <li>where H-CSAT has been placed in a journey</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/353">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>

    </div>
</div>


);

export default Page;
