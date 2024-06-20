import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { NavigationMenu } from '@not-govuk/components';
import { DocsPage } from '@not-govuk/docs-components';

const reduceToLookup = (acc: object, cur) => ({...acc, [cur.default.title]: cur});
const buildLookup = v => v.reduce(reduceToLookup, {});

const mainStories = [
  require('../../../../../components/alert/spec/Alert.stories.mdx')
];

const mainComponents = buildLookup(mainStories);
//const unofficialComponents = buildLookup(unofficialStories);
//const internalComponents = buildLookup(internalStories);

const subpages = {
  ...mainComponents,
//  ...unofficialComponents,
//  ...internalComponents
};

const nameParam = 'name';

const buildLink = (v: string) => ({
  href: `/components?${nameParam}=${encodeURIComponent(subpages[v].default.title)}`,
  text: v
});

const buildLinks = v => Object.keys(v).sort().map(buildLink);

const mainLinks = buildLinks(mainComponents);
//const unofficialLinks = buildLinks(unofficialComponents);
//const internalLinks = buildLinks(internalComponents);

export const title = 'Components';
const description = 'The components provided in DBT design system';

const Page: FC<PageProps> = ({ location }) => {
  const componentName = location.query[nameParam];
  const stories = subpages[componentName];

  return (
    <div className="govuk-grid-row">
      <Helmet>
        <title>{title} - DBT design system</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:article:section" content={title} />
      </Helmet>
      <div className="govuk-grid-column-one-quarter">
        <NavigationMenu items={mainLinks} />
      </div>
      <div className="govuk-grid-column-three-quarters">
        {
          stories ? (
            <Fragment>
              <span className="govuk-caption-xl">{title}</span>
              <DocsPage siteName="DBT design system" stories={stories} />
            </Fragment>
          ) : (
            componentName ? (
              null // should be a 404!
            ) : (
              <Fragment>
                <h1>{title}</h1>
                <p>
                  Components are reusable parts of the user interface that have been made to support a variety of applications.
                </p>
                <p>
                  Individual components can be used in multiple different patterns and contexts. For example, the text input component can be used to ask for an email address, a National Insurance number or someone’s name.
                </p>
              </Fragment>
            )
          )
        }
      </div>
    </div>
  );
};

export default Page;
