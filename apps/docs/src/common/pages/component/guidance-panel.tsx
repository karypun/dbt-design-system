import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../component';

export const title = 'Up to date guidance panel';
const description = 'How to help users to use flags';
const section = 'Component';
const subsection = 'Components';

const panel = require('../../../../assets/images/patterns/guidance-card.png');
const panelSitu = require('../../../../assets/images/patterns/guidance-panel-situ.png');

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


      <p>Let users know when a guidance page was last updated and when it will be checked again.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={panel} className="image-examples" alt="An example of an interaction that shows contextual help" />
      </div>
      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={panelSitu} className="image-examples" alt="An example of an interaction that shows contextual help" />
      </div>

      <h2 className="govuk-heading-l">How to use</h2>

      <p className="govuk-body">The component is composed of:</p>

      <ul>
      <li>a header that the page is up to date</li>
      <li>the date when it was last reviewed</li>
      <li>the date when it will be reviewed again</li>
      <li>a link to provide an email address to sign up for updates</li>
      </ul>
      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This component is used in:</p>
      <ul>
        <li><A href="https://www.gov.uk/guidance/launching-or-returning-a-rocket-or-space-plane-rules-and-regulations">Launching or returning a rocket or space plane: rules and regulations</A></li>
      </ul>
      <p className="govuk-body">More research is needed as this scales out - about which users sign up for notifications
      and where there are overlaps, to test hypotheses about usage and user populations. If your service uses this
      pattern, get in touch to share your user research findings.</p>


      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/353">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>

    </div>
</div>


);

export default Page;
