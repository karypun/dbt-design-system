import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Case list page';
const description = 'Make pieces of information about a case easier to scan, prioritise and action for users';
const section = 'Patterns';
const subsection = 'Pages';

const caseSimple = require('../../../../assets/images/patterns/case-list-simple.png');
const caseCapabilities = require('../../../../assets/images/patterns/case-list-capabilities.png');
const caseComplex = require('../../../../assets/images/patterns/case-list-complex.png');

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

      </div>



      <p>Use the case list page to make pieces of information about a case easier to scan, prioritise and action for users</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={caseSimple} className="image-examples" alt="An example of case showing minimal information to help caseworkers" />
      </div>

      <h2 className="govuk-heading-l">How it works</h2>
      <p>First understand what pieces of information are needed to prioritise and action cases.
      The <A href="https://uktrade.atlassian.net/wiki/spaces/DCMSS/pages/5200347262/Licensing+Case+Management+Shared+Working+Model">TREGS case management model</A> provides key information (core capabilities) that services require
      for their case management systems.
        </p>
        <p>On a case list page, these core capabilities include:</p>
        <ul>
          <li>a clear case reference to identify and track the case</li>
          <li>case is appropriately classified to an identity type or route</li>
          <li>minimum information present to route case onwards</li>
          <li>clear routing or priority signals to help caseworkers direct this case forward</li>
        </ul>

        <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
          <img src={caseCapabilities} className="image-examples" alt="An example highlighting core capabilities on a case" />
        </div>

<p>User research will tell you what other key information is needed. You should avoid using too many columns, and only provide users with information they really need. Use clear labels for column headings that describe the content.</p>
      <h3 className="govuk-heading-m">If you have a lot of information</h3>
      <p>Where case information can be dense, consider a filter to control vast amounts of data which allows caseworkers to prioritise the minimal essential information needed.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={caseComplex} className="image-examples" alt="An example of a complex case using filters" />
      </div>

      <h2 className="govuk-heading-l">Research</h2>

      <p className="govuk-body">The case list pages are being reviewed using the <A href="https://uktrade.atlassian.net/wiki/spaces/DCMSS/pages/5200347262/Licensing+Case+Management+Shared+Working+Model">TREGS case management model</A> across these licensing services:</p>
      <ul>
      <li>Export Certificate Import Licensing (ECIL)</li>
        <li>Export licensing (LITE)</li>
        <li>Sanctions</li>
      </ul>
<p>The model is continually being developed and refined and we'll share more updates as the case management pages evolve.</p>
      <p className="govuk-body">The filters are used on LITE. Caseworkers found it useful, especially to prioritise different information across various teams; the filter selection persists unless it's updated by the caseworker.</p>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://trello.com/b/TZ77oz57/design-system-working-group">Trello board</A>.</p>

    </div>
</div>


);

export default Page;
