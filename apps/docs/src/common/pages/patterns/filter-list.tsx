import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Filter a list';
const description = 'How to help users to filter a list';
const section = 'Patterns';
const subsection = 'Help users to';

const Page: FC<PageProps> = ({ location }) => (
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
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}></p>
      </div>


      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p>Use this pattern to help users filter a list of items, such as a list of cases or search results.</p>
      <p>You should only provide users with filters they really need.</p>


      <h2 className="govuk-heading-l">How to use</h2>
      <p className="govuk-body">Users can select one or more filters. When the user clicks 'Apply filters' the Page
      refreshes to show the items that match the filters.</p>

      <p className="govuk-body">The selected filters are displayed at the top or side to let users see what they've selected
      and remove them easily.</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This pattern has been used on LITE to sift through cases and view certain information at a glance.</p>

      <p className="govuk-body">More research is needed. If your service uses this
      pattern, get in touch to share your user research findings.</p>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>This pattern needs improving. We need evidence about:</p>
      <ul>
        <li>alterations for internal caseworking systems</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/353">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>

    </div>
</div>


);

export default Page;