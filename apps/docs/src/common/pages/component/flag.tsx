import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../component';

export const title = 'Flag';
const description = 'How to help users to use flags';
const section = 'Component';
const subsection = 'Components';



const Page: FC<PageProps> = ({ location }) => (
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



      <h2 className="govuk-heading-l">When to use</h2>
      <p>Use the flag component when it’s possible for something to have more than one status and it’s useful for the user to know about
      that status. For example, you can use a flag to show whether an item in a [task list] has been ‘completed’.</p>

      <h2 className="govuk-heading-l">How to use</h2>
      <p>Flags are just used to indicate a status, so do not add links. Use adjectives rather than verbs for the names of your flags.
      Using a verb might make a user think that clicking on them will do something.</p>


      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">This component is used by:</p>
      <ul>
        <li>Export licensing (SIELs)</li>
      </ul>
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
