import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Case list page';
const description = 'Make pieces of information about a case easier to scan, prioritise and action for users';
const section = 'Patterns';
const subsection = 'Pages';



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







      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p>Use the case list page to make pieces of information about a case easier to scan, prioritise and action for users</p>

      <h2 className="govuk-heading-l">How to use</h2>
      <p>First understand what pieces of information are needed to prioritise and action cases.
        You should avoid using too many columns, and only provide users with information they really need.
        Use clear labels for column headings that describe the content.</p>


      <h3 className="govuk-heading-m">If you have a lot of information</h3>
      <p>Where case information can be dense, control vast amounts of data by using a filter. it allows caseworkers to prioritise the minimal essential information needed in order to handle next steps for the case.</p>

      <h2 className="govuk-heading-l">Research</h2>

      <p className="govuk-body">The filters are used on LITE. Caseworkers found it useful, especially to prioritise different information across various teams; the filter selection persists unless it's updated by the caseworker.</p>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>This pattern needs improving. We need evidence about:</p>
      <ul>
        <li>user research findings</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://docs.google.com/spreadsheets/d/1Q5M0fSTK3kdfXvac40pHC18885QQSHJEyaPO7FMPqOQ/edit?usp=sharing">discussion backlog</A>, or follow our <A href="../contributing">community guidance</A>.</p>

    </div>
</div>


);

export default Page;
