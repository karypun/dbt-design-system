import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Add to a list';
const description = 'How to help users add to a list';
const section = 'Patterns';
const subsection = 'Help users to';

const addAnotherFlow = require('../../../../assets/images/patterns/add-another-flow.png');
const addAnotherEcil = require('../../../../assets/images/patterns/add-another-ecil01.png');
const addAnotherEcilCard = require('../../../../assets/images/patterns/add-another-ecil02.png');
const oldAutocomplete = require('../../../../assets/images/patterns/ecil-old-autocomplete.png');
const addAnotherDmas = require('../../../../assets/images/patterns/dmas.png');
const entryLookup = require('../../../../assets/images/patterns/lozenge.png');

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

      <p className="govuk-body">Allow users to add multiple pieces of similar information.</p>

      <h2 className="govuk-heading-l">When to use</h2>
      <p>Use this pattern to manually add several things. Do not use to add things in bulk.</p>

      <p>Information may include things such as:</p>
      <ul>
        <li>countries</li>
        <li>products, codes, sectors and other similar items</li>
        <li>people and entities</li>
      </ul>

      <h2 className="govuk-heading-l">How it works</h2>
      <p>The 'Add to a list' pattern across TREGS is created using 3 components:</p>
      <ul>
        <li><A href="https://design-system.service.gov.uk/components/table/">tables</A></li>
        <li><A href="https://design-system.service.gov.uk/components/summary-list/">cards</A></li>
        <li>lozenges, or <A href="https://design.sis.gov.uk/components/feedback-progress/chip/">chips</A></li>
      </ul>

      <h3 className="govuk-heading-m">Table</h3>
      <p>Use tables to capture simple pieces of data.</p>
    
      <h4 className="govuk-heading-s">Using a table on transactional services</h4>
      <p>On ECIL, the table component was used across multiple pages which allowed users to successfully add all intended countries to their application without a problem.</p>
      <p>The autocomplete component and summary list of added items are on separate screens.</p>
      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={addAnotherEcil} className="image-examples" alt="An example of an 'Add another' pattern in Export certificate import licensing service" />
      </div>

      <h3 className="govuk-heading-m">Card</h3>
      <p>Use cards to capture complex or grouped data.</p>

<h4 className="govuk-heading-s">Using a card on transactional services</h4>
<p>ECIL uses cards to capture nested sets of information. Each card contains a set of actions to view or edit the card's dataset through its summary list. Cards can be stacked to form a multi-card list view.</p>
      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={addAnotherEcilCard} className="image-examples" alt="An example of an 'Add another' pattern in Export certificate import licensing service" />
      </div>

      <h4 className="govuk-heading-s">Using a card on internal services</h4>
      <p>DMAS uses a card on its internal service where more information needs to sit across a single page. It contains a typahead and summary list that sits within a single card. This pattern was developed by the BIST design working group to standardise internal services.</p>

<div className="example example-images confirmation" style={{marginBottom: "2em"}}>
  <img src={addAnotherDmas} className="image-examples" alt="An example of an 'Add another' pattern on the Digital Market Access System" />
</div>




            <h3 className="govuk-heading-m">Lozenge (chip)</h3>
            <p>Use lozenges where space is limited.</p>

<h4 className="govuk-heading-s">Using lozenges on internal and transactional services</h4>
  <p>DMAS uses lozenges as part of its filters which sits above the typahead whereas LITE uses them to capture control list entries on application forms; these sit beneath the typahead.
  More research is needed to understand its usage, in particular with accessibility.</p>
            <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
              <img src={entryLookup} className="image-examples" alt="An example of an interaction that shows contextual help" />
            </div>

            <h2 className="govuk-heading-l">Research</h2>
            <p className="govuk-body">On ECIL, the table component was used across multiple pages which allowed users to successfully add all intended countries to their application without a problem.
            Similar to <A href="https://design.tax.service.gov.uk/hmrc-design-patterns/add-to-a-list/">HMRC's design pattern</A> there are a few distinctions:</p>
            <ul>
              <li>this follows a more prescriptive "Add to a list" pattern which includes an 'Are you sure you want to remove' question to avoid accidental removal of items</li>
              <li>the autocomplete component and summary list of added items are on separate screens</li>
              <li>only one button would be visible on each page which should ensure fewer errors</li>
            </ul>
      <p>The multi-page format is not suitable for users who might need everying done on one page such as internal services.</p>
        <p>More research is needed on the pattern using lozenges for its accessibility.</p>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p>On ECIL, the revised 'Add to a list' pattern removed the need for lozenges previously used due to accessibility issues such as the small control size for removing chips and lack of visible count of items, although soms services like LITE have adapted their code to make it more accessible off a DAC report in 2024.</p>
<p>Across all services, use an accessible typeahead such as the <A href="https://alphagov.github.io/accessible-autocomplete/">alphagov accessible autocomplete</A> to help users select from a pre-formatted list. To find out more about this feature, <A href="https://accessibility.blog.gov.uk/2018/05/15/what-we-learned-from-getting-our-autocomplete-tested-for-accessibility/">read the GOV.UK blog</A>.</p>



<h2 className="govuk-heading-l">Help us improve this pattern</h2>

            <p>This pattern needs improving in these areas:</p>
            <ul>
              <li>more information needed on services using cards and lozenges</li>
              <li>insight from ECIL's research on multi-card list view with application completion/submission</li>
              <li>considerations to standardise content on how we add things to a list, whether invidvidually or in bulk</li>
              <li>accessibility findings around lozenges and how code was made more accessible</li>
            </ul>

    </div>
</div>


);

export default Page;
