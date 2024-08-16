import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'User satisfaction';
const description = 'Ask users for user satisfaction';
const section = 'Patterns';
const subsection = 'Ask users for';

const applyAddAnother = require('../../../../assets/images/patterns/h-csat.png');

const Page: FC<PageProps> = ({ location }) => (
<div className="govuk-grid-row">
  <Helmet>
    <title>{title} - Regulatory Services Design System</title>
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

      <p className="govuk-body">We must measure users' satisfaction with our services.</p>
      <p className="govuk-body">User satisfaction is one of the Government Digital Service's 4 <A href="https://www.gov.uk/service-manual/measuring-success/measuring-user-satisfaction">mandatory key performance indicators</A> (KPIs).</p>
      <p className="govuk-body">DBT's way of measuring satisfaction is called Harmonised Customer Satisfaction Tool (H-CSAT).
      Following this pattern lets us collect data in a consistent way so that we can compare services' performance.</p>

      <h2 className="govuk-heading-l">When to use</h2>
      <p>Measure user satisfaction at the end of a transaction. Some services do not have a transactional flow. You can discuss how to measure user satisfaction
       in non-transactional services with the <A href="mailto:evaluation@businessandtrade.gov.uk">Monitoring and Evaluation team </A>(M&E).</p>


      <h2 className="govuk-heading-l">How it works</h2>
      <p>This pattern consists of 3 mandatory parts and one optional part:</p>
      <ol>
        <li>A five-point satisfaction question</li>
        <li>A question on whether the user had any problems using the service</li>
        <li>A question on how we could improve the service</li>
        <li>Optionally, service-specific questions</li>
      </ol>


      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={applyAddAnother} className="image-examples" alt="A series of screens to capture user satisfaction" />
      </div>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p className="govuk-body">You must test that your designs meet the WCAG 2.2 AA accessibility standard.
      By using standard components such as radios and text areas, you can make your design more accessible without custom development work.</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This pattern is used by:</p>
      <ul>
        <li>Apply for a licence to provide sanctioned trade services</li>
        <li>Digital Market Access Service</li>
        <li>LITE</li>
        <li>Search for UK subsidies</li>
        <li>Trade Remedies Service</li>
      </ul>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>We need more:</p>
      <ul>
        <li>examples of where user satisfaction has been measured in non-transactional services</li>
        <li>user research findings</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="#">GitHub discussion</A>, or follow our <A href="#">contribute guidance</A>.</p>

    </div>
</div>


);

export default Page;
