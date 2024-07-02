import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const menu = (
  <Fragment>
    <NavigationMenu items={[
          {
            href: '',
            text: 'Discuss on GitHub'
          },
          {
            href: '',
            text: 'Design system working group'
          }
        ]} />
  </Fragment>
);

export const title = 'Contribute';
const description = 'How to get involved and contribute to the DBT Design System'

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>{title} - DBT Design System</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={title} />
    </Helmet>
    <div className="govuk-grid-column-one-quarter">
      {menu}
    </div>
    <div className="govuk-grid-column-three-quarters">
    <h1 className="heading-section">Contribute to the design system</h1>
    <p>Anyone can contribute to the design system. For example, you can:</p>
    <ul>
      <li>ask questions about a style, component or pattern</li>
      <li>share an example use of a component or pattern</li>
      <li>share research relating to a style, component or pattern</li>
      <li>request an addition or improvement to the content style guide</li>
      <li>propose a new style, component or pattern</li>
    </ul>
    <h2>Make a suggestion</h2>
    <h3>Check if there's already a discussion</h3>
    <p><A href="#">Check if there are any open discussions</A> about your suggestion on the design system GitHub.</p>
    <h3>Create a new discussion</h3>
    <p>If there is not a discussion, <A href="#">start a new discussion</A> on GitHub. Select ‘ideas’ from the ‘select category’ list when starting to create the discussion.</p>
    <p>For help, use our <A href="#">GitHub guide</A> or ask the <A href="#">working group</A>.</p>


  </div>
  </div>

);

export default Page;
