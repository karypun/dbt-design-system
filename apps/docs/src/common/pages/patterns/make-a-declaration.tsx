import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Declarations';
const description = 'A declaration allows users to confirm that they have understood or agreed to something before they submit an online form.';
const section = 'Patterns';
const subsection = 'Ask users for';


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
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}>Also known as: declarations</p>
      </div>

      <p className="govuk-body">A declaration allows users to confirm that they have understood or agreed to something before they submit an online form.</p>

      <p>The following example shows how declarations can be used in services. Use these examples as a guide only and adapt them for your service.</p>
      <p>You must ask a legal representative to sign off your declaration content.</p>


      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p>Use this pattern when there are significant consequences if false information is given and the user needs to confirm that:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>the information they've given is correct</li>
        <li>they understand the consequences of not telling the truth</li>
        <li>they understand the information they have been given</li>
        <li>they need to agree to something</li>
      </ul>



      <h2 className="govuk-heading-l">Accessibility</h2>
      <p>If your service uses this pattern, let us know of any insights you have
      on accessibility considerations.</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p>This pattern is used by:</p>
      <ul className="govuk-list govuk-list--bullet">
      <li>Export licensing (SIELs)</li>
      <li>Apply for an export certificate</li>
      <li>Apply for an import licence</li>
      <li>MOD F680</li>
      <li>Sanctions</li>
      <li>Trade remedies service</li>
      </ul>

      <p className="govuk-body">More research is needed. If your service uses this
      pattern, share your user research findings.</p>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>This pattern needs improving. We need evidence about:</p>
      <ul>
        <li>how to write error messages</li>
        <li>user research findings</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://github.com/UKHomeOffice/design-system/discussions/378">GitHub discussion</A>, or follow our <A href="/contribute">contribute guidance</A>.</p>

    </div>
</div>


);

export default Page;
