import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../component';

export const title = 'Entry lookup';
const description = 'How to help users select the right entries';
const section = 'Component';
const subsection = 'Components';

const entryLookup = require('../../../../assets/images/patterns/entry-lookup.png');


const Page: FC<PageProps> = ({ location }) => (
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
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}>Also known as: finder, typeahead, autocomplete, picker</p>
      </div>

      <p>Use this component when you do not want users to input answers in free text format.
This component allows users to select one or more choices from a pre-defined drop-
down list.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={entryLookup} className="image-examples" alt="An example of an interaction that shows contextual help" />
      </div>

      <h2 className="govuk-heading-l">When to use this component</h2>
      <p>Use this component when:</p>
      <ul>
        <li>users need to give one or more defined answers to a question (like multiple
          CLEs for a product)</li>
        <li>free text would likely result in users writing answers in a variety of ways which
          could affect accuracy of data (like users writing the United States of America
          as USA, U.S.A., America, etc)</li>
        <li>there is a pre-defined list of answers which the user can give (like countries,
          CLEs, postcodes, etc)</li>
      </ul>
      

      <h2 className="govuk-heading-l">How to use this component</h2>
      <p>Always have a drop-down list for users to choose from. This helps limit user error. It
      also ensures that answers are consistent across applications.</p>
      <p>Depending on the question, a user may need to add multiple answers. If this is the
case, they should all appear below the answer box once selected. Each selected
choice should have an “x” to allow users to easily remove it if necessary.</p>

      

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This component is currently used in LITE to select and add control list entries (CLE)
      and countries to applications. It has not been used for other data types to date.</p>
      <p>If you have evidence this also works for your users, you can contribute to our
      backlog.</p>
      

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://docs.google.com/spreadsheets/d/1Q5M0fSTK3kdfXvac40pHC18885QQSHJEyaPO7FMPqOQ/edit?usp=sharing">discussion backlog</A>, or follow our <A href="../contributing">community guidance</A>.</p>

    </div>
</div>


);

export default Page;
