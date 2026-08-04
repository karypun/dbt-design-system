import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Manage complex tasks';
const description = 'How to help users manage complex applications';
const section = 'Patterns';
const subsection = 'Help users to';

const sanctionsLinear = require('../../../../assets/images/patterns/sanctions-linear.png');
const sanctionsNonlinear = require('../../../../assets/images/patterns/sanctions-non-linear.png');

const Page: FC<PageProps> = () => (
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

        <p>This is a variation of the <a href="https://design-system.service.gov.uk/components/task-list/">GOV.UK task list</a>, which has been adapted
        to include two approaches of handling complex tasks.</p>
    

      <h2 className="govuk-heading-l">How to use</h2>
      <p className="govuk-body">Firstly, understand the needs of your user and the structure of your service, as there are two approaches to using the task list, namely, in a linear or non-linear fashion.</p>
  <p>When deciding which aspects of the journey fit into a task list, consider information architecture focused user research, to match the task list items into meaningful tasks for users.</p>

<h3 className="govuk-heading-m">Linear</h3>
<p>Use a linear task list for services that are complex, where users are expected to complete their transaction in a single session. This will help set user expectations, whilst at the same time reassure users as they are able to determine what they'll be asked about in the journey in a logical structure.</p>

<div className="example example-images confirmation" style={{marginBottom: "2em"}}>
  <img src={sanctionsLinear} className="image-examples" alt="An example of a service verifying the user with passport details and date of birth" />
</div>

<h3 className="govuk-heading-m">Non-linear</h3>
<p>Use a non-linear task list for services that allow users to return to the services for completion over multiple sessions, for example, saving and returning. By having a non-linear task list, this enables users to complete their transaction bit by bit, giving them flexibility to complete tasks in a manner that suits them best.</p>

<div className="example example-images confirmation" style={{marginBottom: "2em"}}>
  <img src={sanctionsNonlinear} className="image-examples" alt="An example of a service verifying the user with passport details and date of birth" />
</div>

<h2 className="govuk-heading-l">Accessibility</h2>
<p className="govuk-body">Both task lists have passed the Digital Accessibility Centre (DAC) tests with user research completed on partially sighted and neurodiverse users.</p>
<p>Partially sighted users found the task lists relatively easy to navigate and status labels useful in understanding the progress of task list items. Neurodiverse users especially liked the linear task list, as it gave them a set structure providing expectation of what was coming next.</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">These task lists were used in:</p>
      <ul>
        <li>Apply for licence to provide sanctioned trade services</li>
        <li>Report a suspected breach of trade sanctions</li>
        <li>Prompt payments</li>
      </ul>



  <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://trello.com/b/TZ77oz57/design-system-working-group">Trello board</A>.</p>
    </div>
</div>

);

export default Page;
