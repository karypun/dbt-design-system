import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Add to a list';
const description = 'How to help users to add to a list';
const section = 'Patterns';
const subsection = 'Help users to';

const addAnotherFlow = require('../../../../assets/images/patterns/add-another-flow.png');
const addAnotherEcil = require('../../../../assets/images/patterns/add-another-ecil01.png');
const oldAutocomplete = require('../../../../assets/images/patterns/ecil-old-autocomplete.png');

const Page: FC<PageProps> = () => (
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
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}>Also known as: Add another or Add multiple things </p>
      </div>

      <p className="govuk-body">Allow users to add information several times on a page.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={addAnotherFlow} className="image-examples" alt="An example of an 'Add another' pattern" />
      </div>

      <h2 className="govuk-heading-l">How to use</h2>
      <p>Allow users to add single or multiple pieces of information, check they are correct
      and provide an option to add more or edit the list.</p>
      <p className="govuk-body">For users such as exporters, the information may include:</p>
      <ul>
        <li>export countries and destinations</li>
        <li>products, product codes and other related items</li>
        <li>people and entities</li>
      </ul>

      <h2 className="govuk-heading-l">How it works</h2>
      <p>The pattern relies on using:</p>
      <ul>
        <li>an accessible typeahead such as the <A href="https://alphagov.github.io/accessible-autocomplete/">alphagov accessible autocomplete</A> (for selecting export countries) </li>
        <li><A href="https://design-system.service.gov.uk/components/summary-list/">summary list component</A></li>
      </ul>


      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={addAnotherEcil} className="image-examples" alt="An example of an 'Add another' pattern in Export certificate import licensing service" />
      </div>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p className="govuk-body">Use an accessible autocomplete to help users select from a pre-formatted list. To find out more about this feature, <A href="https://accessibility.blog.gov.uk/2018/05/15/what-we-learned-from-getting-our-autocomplete-tested-for-accessibility/">read the GOV.UK blog</A>.</p>
      <p>The latest pattern has removed the need for filter chips used in the previous version as there were accessibility issues due to the small control size for removing chips and lack of visible count of items. </p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={oldAutocomplete} className="image-examples" alt="An example of an old inaccessible 'Add another' pattern" />
      </div>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This pattern is used in:</p>
      <ul>
        <li>Export Certificate Import Licensing (ECIL)</li>
      </ul>
      <p>This version's current redesign has allowed users to successfully add all intended countries to their application without a problem.
      Similar to <A href="https://design.tax.service.gov.uk/hmrc-design-patterns/add-to-a-list/">HMRC's design pattern</A> there are a few distinctions:</p>
      <ul>
        <li>this follows a more prescriptive "add to a list" pattern</li>
        <li>the autocomplete component and summary list of added items are on separate screens</li>
        <li>only one button would be visible on each page which should ensure fewer errors</li>
      </ul>



            <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://trello.com/b/TZ77oz57/design-system-working-group">Trello board</A>.
            </p>

    </div>
</div>


);

export default Page;
