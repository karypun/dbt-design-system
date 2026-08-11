import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';
import { menu } from '../component';

export const title = 'Task list';
const description = 'How to help users use the task list';
const section = 'Component';
const subsection = 'Components';

const sanctionsLinear = require('../../../../assets/images/patterns/sanctions-linear.png');
const sanctionsNonlinear = require('../../../../assets/images/patterns/sanctions-non-linear.png');
const sanctionsReview = require('../../../../assets/images/patterns/sanctions-review-submit.png');
const sanctionsHover = require('../../../../assets/images/patterns/sanctions-hover.png');
const sanctionsCaption = require('../../../../assets/images/patterns/sanctions-caption.png');

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

        <p>This is a variation of the <a href="https://design-system.service.gov.uk/components/task-list/">GOV.UK task list</a>, which has been adapted
        to include two approaches of handling complex tasks.</p>

        <h2 className="govuk-heading-l">When to use</h2>
        <p className="govuk-body">Use the tasklist pattern for services that require multiple tasks, and where users can benefit from seeing what tasks are required in the service journey.</p>
        <p>This pattern is useful in helping users understand:</p>
        <ul>
          <li>which tasks are needed to complete their transaction</li>
          <li>what order tasks need to be completed in</li>
          <li>when they’ve completed the tasks</li>
        </ul>

      <h2 className="govuk-heading-l">How to use</h2>
      <p className="govuk-body">Understand the needs of your user and the structure of your service, as there are two approaches to using the task list, namely, in a linear or non-linear fashion.</p>
  <p>When deciding which aspects of the journey fit into a task list, consider information architecture focused user research, to match the task list items into meaningful tasks for users.</p>

<h3 className="govuk-heading-m">Linear</h3>
<p>Use a linear task list for services that are complex, where users are expected to complete their transaction in a single session. This will help set user expectations, whilst at the same time reassure users as they are able to determine what they'll be asked about in the journey in a logical structure.</p>

<div className="example example-images confirmation" style={{marginBottom: "2em"}}>
  <img src={sanctionsLinear} className="image-examples" alt="An example of a linear task list for complex services" />
</div>

<h3 className="govuk-heading-m">Non-linear</h3>
<p>Use a non-linear task list for services that allow users to return to the services for completion over multiple sessions, for example, saving and returning. By having a non-linear task list, this enables users to complete their transaction bit by bit, giving them flexibility to complete tasks in a manner that suits them best. This is the <a href="https://design-system.service.gov.uk/components/task-list/">GOV.UK task list</a> pattern.</p>

<div className="example example-images confirmation" style={{marginBottom: "2em"}}>
  <img src={sanctionsNonlinear} className="image-examples" alt="An example of a non-linear task list allowing users to save and return" />
</div>

<h3 className="govuk-heading-m">Task list variation 1: Review and submit - linear and non-linear task list</h3>
<p>For both types of task list, we introduced a ‘review and submit’ task list item. This developed from user research findings, where users were unsure at what point they would be able to review and amend their answers. To address this need, we added in this task list item, which in the hint text sets the expectation to users, and upon clicking the link, takes them to ‘check your answers’. This section by default has the status of ‘cannot start yet’ until the mandatory task list items are complete. This addition was especially key for linear task lists, as users are not able to go back to amend sections within the core aspect of the journey.</p>

<div className="example example-images confirmation" style={{marginBottom: "2em"}}>
  <img src={sanctionsReview} className="image-examples" alt="An example of a new feature to review and submit on the task list" />
</div>

<h3 className="govuk-heading-m">Task list variation 2: Hover states - linear task list</h3>
<p>On linear task lists, as once a task is complete users move on to the next, we remove the hover state and only allow it for active task list items. This is so there is a visual cue for users to focus on the task at hand.</p>

<div className="example example-images confirmation" style={{marginBottom: "2em"}}>
  <img src={sanctionsHover} className="image-examples" alt="An example of a new feature to hover on the task list" />
</div>

<h3 className="govuk-heading-m">Task list variation 3: Captions - non-linear task list</h3>
<p>On non-linear task lists, it can be helpful to include a caption to give a reference point to the page, for when users want to return to the task list page when part way through a task list item for example having a ‘return to task list’ button [see save and return pattern].</p>

<div className="example example-images confirmation" style={{marginBottom: "2em"}}>
  <img src={sanctionsCaption} className="image-examples" alt="An example of a new captions feature on the task list" />
</div>

<h2 className="govuk-heading-l">Accessibility</h2>
<p className="govuk-body">Both task lists have passed the Digital Accessibility Centre (DAC) tests with user research completed on partially sighted and neurodiverse users.</p>
<p>Partially sighted users found the task lists relatively easy to navigate and status labels useful in understanding the progress of task list items. Neurodiverse users especially liked the linear task list, as it gave them a set structure providing expectation of what was coming next.</p>

      <h2 className="govuk-heading-l">Research</h2>
      <p className="govuk-body">These task lists were used in:</p>
      <ul>
        <li>Sanctions</li>
        <li>Prompt payments (as part of Portfolio Services) </li>
      </ul>

<h2 className="govuk-heading-l">Help us improve</h2>
  <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="https://trello.com/b/TZ77oz57/design-system-working-group">Trello board</A>.</p>
    </div>
</div>


);

export default Page;
