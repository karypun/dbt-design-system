import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../component';

export const title = 'Picklist';
const description = 'How to help users to use the picklist';
const section = 'Component';
const subsection = 'Components';

const pickList = require('../../../../assets/images/patterns/picklist-pattern.png');
const pickListComponent = require('../../../../assets/images/patterns/picklist-component.png');

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
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}></p>
      </div>

      <p>Help internal users to quickly select frequent prompts when requesting further information from applications.</p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={pickListComponent} className="image-examples" alt="An example of an interaction that shows contextual help" />
      </div>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p>When internal users such as caseworkers need to request further information (known as RFIs) or have a query on an application.
        The picklist component helps to list out most frequent queries which an internal user can select to save time writing out the query.
      </p>

      <h2 className="govuk-heading-l">How it works</h2>
      <p>A picklist link opens a modal dialog (also known as a pop-up window)
        with reusable prompts. Finding the prompt can be done through a search or by scrolling through the list which orders topics alphabetically. Once the right prompt is found, this can then be added to the query which can either be adapted or sent directly to the applicant.
      </p>

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={pickList} className="image-examples" alt="An example of an interaction that shows contextual help" />
      </div>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">More research is needed. If your service uses this pattern, get in touch to share your user research findings.</p>

      <p>If you have evidence this also works for your users, you can contribute to our backlog.</p>
      

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>This pattern needs improving. We need evidence about:</p>
      <ul>
        <li>alterations for internal caseworking systems</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://docs.google.com/spreadsheets/d/1Q5M0fSTK3kdfXvac40pHC18885QQSHJEyaPO7FMPqOQ/edit?usp=sharing">discussion backlog</A>, or follow our <A href="../contributing">community guidance</A>.</p>

    </div>
</div>


);

export default Page;
