import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';

export const menu = (
  <Fragment>
    <NavigationMenu items={[
      {
        href: '/styles/colour',
        text: 'Colour'
      },

      {
        href: '/styles/typography',
        text: 'Typography'
      }
    ]} />
  </Fragment>
);

export const title = 'Styles';
const description = 'Make your service look and feel like a DBT service';

const applyPassportImage = require('../../../assets/images/apply-passport.png');
const ddatEventsImage = require('../../../assets/images/ddat-events.png');
const policeImage = require('../../../assets/images/police.png');

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
      <h1>{title}</h1>
      <p>We apply different styles to Regulatory Services and products depending on what domain they sit in and what kind of service it is.</p>
      <h2 className="govuk-heading-m">Regulatory Services design styles</h2>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
          <p>If your service:</p>
          <ul>
            <li>is internal, such as a caseworking system or admin service</li>

          </ul>
          <p>You should use:</p>
          <ul>
            <li><A href="/components?name=Page">Regulatory Services page template</A></li>
            <li><A href="https://fonts.google.com/specimen/Roboto#standard-styles">Roboto</A> font</li>
            <li><A href="/styles/colour">DBT colours</A></li>
          </ul>
        </div>
        <div className="govuk-grid-column-one-half">
          <img src={ddatEventsImage} alt="Screenshot of a DBT 'Digital, Data and Technology Together' events page" className="image-examples" />
          <span className="image-caption">Digital, Data and Technolgy (DDaT) Together page</span>
        </div>
      </div>
      <hr className="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />
      <h2 className="govuk-heading-m">GOV.UK design styles</h2>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
          <p>If your service:</p>
          <ul>
            <li>is public-facing and transactional, and</li>
            <li>sits on a gov.uk or service.gov.uk domain</li>
          </ul>
          <p>You should use:</p>
          <ul>
            <li><A href="https://design-system.service.gov.uk/styles/page-template/">GOV.UK page template</A></li>
            <li>the crown logo and GDS Transport font</li>
            <li><A href="https://design-system.service.gov.uk/styles/colour/">GOV.UK colours</A></li>
          </ul>

        </div>
        <div className="govuk-grid-column-one-half">
          <img src={applyPassportImage} alt="Screenshot of a gov.uk 'Apply for a passport' page" className="image-examples" />
          <span className="image-caption">Apply for an export licence using LITE</span>
        </div>
      </div>

    </div>
  </div>
);

export default Page;
