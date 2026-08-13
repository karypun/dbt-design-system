import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Know when a page is up to date';
const description = 'Know when a page is up to date';
const section = 'Patterns';
const subsection = 'Help users to';

const panel = require('../../../../assets/images/patterns/guidance-card.png');

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

      <p>Let users know when a guidance page was last updated and when it will be checked again.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={panel} className="image-examples" alt="An example of an up-to-date guidance panel from a GOV.UK regulations guidance page" />
      </div>

      <h2 className="govuk-heading-l">When to use</h2>
      <p className="govuk-body">Use this review date pattern on guidance pages where the content will be updated on a continual basis and the user needs to be kept informed. Place it somewhere near the top of the guidance page, where it can easily be found. It should not be used on transactional services.
</p>

      <h2 className="govuk-heading-l">How to use</h2>

      <h3 className="govuk-heading-m">What to include</h3>
      <p className="govuk-body">The review date pattern should include:</p>
      <ul>
        <li>a title that the page is up to date</li>
        <li>the date when it was last reviewed</li>
        <li>the date when it will be reviewed again</li>
        <li>a link to provide an email address to sign up for updates</li>
      </ul>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This pattern is used in:</p>
      <ul>
        <li><A href="https://www.gov.uk/guidance/letting-out-a-self-catering-holiday-home-in-england-rules-and-regulations">Letting out a self-catering holiday home in England: rules and regulations - GOV.UK</A></li>
        <li><A href="https://www.gov.uk/guidance/brewing-beer-rules-and-regulations-for-commercial-brewing">Brewing beer: rules and regulations - GOV.UK</A></li>
        <li><A href="https://www.gov.uk/government/collections/spaceflight-activities-rules-and-regulations">Spaceflight activities: rules and regulations - GOV.UK</A></li>
      </ul>
      <p className="govuk-body">More research is needed as this scales out - about which users sign up for notifications
      and where there are overlaps, to test hypotheses about usage and user populations. If your service uses this
      pattern, get in touch to share your user research findings.</p>

<h2 className="govuk-heading-l">Help us improve</h2>
      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://trello.com/b/TZ77oz57/design-system-working-group">Trello board</A>.</p>

    </div>
</div>


);

export default Page;
