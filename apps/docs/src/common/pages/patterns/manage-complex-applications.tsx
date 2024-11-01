import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Manage complex applications';
const description = 'How to help users manage complex applications';
const section = 'Patterns';
const subsection = 'Help users to';

const taskList = require('../../../../assets/images/patterns/task-list-pattern.png');

const Page: FC<PageProps> = ({ location }) => (
<div className="govuk-grid-row">
  <Helmet>
    <title>{subsection} {title.toLowerCase()} - DBT Design System</title>
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

      <div className="example example-images confirmation" style={{marginBottom: "2em"}}>
        <img src={taskList} className="image-examples" alt="An example of a service verifying the user with passport details and date of birth" />
      </div>

      <h2 className="govuk-heading-l">When to use this pattern</h2>
      <p className="govuk-body">When asking users to complete a long complex application with lots of routing. If a user changes an answer, it may have
        an impact on the other parts of the application.</p>
        <p>Using the GOV.UK <a href="https://design-system.service.gov.uk/components/task-list/">task list component</a>, this has been adapted  
        to include:</p>
      <ul className="govuk-list govuk-list--bullet">
        <li>numbered sections to help tackle tasks in a specific order (depending on your input, this may impact subsequent tasks)</li>
        <li>if a user changes an answer in one section, they will be prompted by an alert to go to answer 
          any additional questions before returning to the task list
        </li>
      </ul>

   


      <h2 className="govuk-heading-l">Accessibility</h2>


      <p className="govuk-body">If your service uses this pattern, let us know of any insights you have on accessibility considerations.</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">More research is needed. If your service uses this pattern, get in touch to share your user research findings.</p>
      
      <p className="govuk-body">If you have evidence this also works for your users, you can contribute to our backlog.</p>

      <h2 className="govuk-heading-l">Help us improve this pattern</h2>
      <p>This pattern needs improving. We need evidence about:</p>
      <ul>
        <li>any other accessibility considerations</li>
        <li>any research findings</li>
      </ul>

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="#s">GitHub discussion</A>, or follow our <A href="#s">contribute guidance</A>.</p>
    </div>
</div>

);

export default Page;
