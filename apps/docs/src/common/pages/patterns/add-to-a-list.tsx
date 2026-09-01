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
const oldAutocomplete = require('../../../../assets/images/patterns/ecil-old-autocomplete.png');
const addAnotherDmas = require('../../../../assets/images/patterns/dmas.png');

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

      <p className="govuk-body">Allow users to add multiple pieces of information.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={addAnotherFlow} className="image-examples" alt="An example of an 'Add another' pattern" />
      </div>

      <p>Information may include things such as:</p>
      <ul>
        <li>countries and destinations</li>
        <li>products, codes, sectors and other similar items</li>
        <li>people and entities</li>
      </ul>

      <h2 className="govuk-heading-l">How it works</h2>
      <p>The 'Add to a list' has two layouts:</p>
      <ul>
        <li>across multiple pages</li>
        <li>on a single page</li>
      </ul>
<h2 className="govuk-heading-m">'Add to a list' across multiple pages</h2>
      <p>This pattern is used on public-facing transactional services and contains:</p>
      <ul>
        <li>an accessible typeahead such as the <A href="https://alphagov.github.io/accessible-autocomplete/">alphagov accessible autocomplete</A></li>
        <li><A href="https://design-system.service.gov.uk/components/summary-list/">summary list component</A> to view and edit the item</li>
        <li>question prompt to ask if another item should be added</li>
      </ul>

      <p>The Export Certificate Import Licensing (ECIL) service uses the multiple page layout to add multiple countries.</p>
      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={addAnotherEcil} className="image-examples" alt="An example of an 'Add another' pattern in Export certificate import licensing service" />
      </div>

      <h2 className="govuk-heading-m">'Add to a list' on a single page</h2>
            <p>This pattern has been used on internal services where more information needs to sit across a single screen. Like the multiple screen layout, it contains a typeahead and summary list but does not include the question prompt.</p>

            <p>The Digital Market Access System (DMAS) uses the single page layout for their internal service to add multiple sectors and government agencies.</p>

            <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
              <img src={addAnotherDmas} className="image-examples" alt="An example of an 'Add another' pattern on the Digital Market Access System" />
            </div>

      <h2 className="govuk-heading-l">Accessibility</h2>
      <p>On ECIL, the revised 'Add to a list' pattern removed the need for filter chips previously used due to accessibility issues such as the small control size for removing chips and lack of visible count of items. </p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={oldAutocomplete} className="image-examples" alt="An example of an old inaccessible 'Add another' pattern" />
      </div>
<p>It also relies on an accessible autocomplete to help users select from a pre-formatted list. To find out more about this feature, <A href="https://accessibility.blog.gov.uk/2018/05/15/what-we-learned-from-getting-our-autocomplete-tested-for-accessibility/">read the GOV.UK blog</A>.</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">The multiple page layout used in ECIL has allowed users to successfully add all intended countries to their application without a problem.
      Similar to <A href="https://design.tax.service.gov.uk/hmrc-design-patterns/add-to-a-list/">HMRC's design pattern</A> there are a few distinctions:</p>
      <ul>
        <li>this follows a more prescriptive "add to a list" pattern</li>
        <li>the autocomplete component and summary list of added items are on separate screens</li>
        <li>only one button would be visible on each page which should ensure fewer errors</li>
      </ul>
<p>This pattern may not be suitable for users who might need everying done on one page such as internal services.</p>




<h2 className="govuk-heading-l">Help us improve</h2>
            <p className="govuk-body">This pattern needs improving. We need evidence about adding to a list on a single page.</p>
            <p>To contribute, add your thoughts and research findings to our <A href="https://trello.com/b/TZ77oz57/design-system-working-group">Trello board</A>.
            </p>

    </div>
</div>


);

export default Page;
