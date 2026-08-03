import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Add to a list';
const description = 'How to help users to add to a list';
const section = 'Patterns';
const subsection = 'Help users to';

const entryLookup = require('../../../../assets/images/patterns/entry-lookup.png');

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
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}>Also known as: add another</p>
      </div>

      <p className="govuk-body">Allow users to add information several times on a page.</p>


      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={entryLookup} className="image-examples" alt="An example of an interaction to add multiple addresses" />
      </div>

      <h2 className="govuk-heading-l">How to use</h2>
      <p>Allow users to add single or multiple pieces of information, check they are correct
      and provide an option to add more or edit the list.</p>
      <p className="govuk-body">The information users add include:</p>
      <ul>
        <li>countries</li>
        <li>products or items</li>
        <li>people or entities</li>
      </ul>



      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This pattern is used in:</p>
      <ul>
        <li>Export licensing (LITE)</li>
        <li>Export Certificate Import Licensing (ECIL)</li>
      </ul>
      <p>which have tested really well with users.</p>

            <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://trello.com/b/TZ77oz57/design-system-working-group">Trello board</A>.
            </p>

    </div>
</div>


);

export default Page;
