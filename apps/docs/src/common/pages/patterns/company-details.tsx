import { FC, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, DateInput, Details, Radios, TextInput, Select } from '@not-govuk/components';
import { menu } from '../patterns';

export const title = 'Commercial organisation details';
const description = 'How to ask users for their commercial organisation details';
const section = 'Patterns';
const subsection = 'Ask users for';

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
      <p className="govuk-caption-m" style={{marginBottom: "2em"}}>Also known as: Register a commercial organisation</p>
      </div>


      <div className="app-example">
      <h2 className="govuk-heading-l">Register a commercial organisation</h2>
        <TextInput
          label="Name of organisation"
          name="passport-number"
        />
        <TextInput
          label="European Union registration and identification number (EORI)"
          hint="The first two letters are the country code, like GB or XI. This is followed by 12 or 15 numbers, like GB123456123456. Get an EORI number if you do not have one."
          name="passport-number"
        />
        <TextInput
          label="Standard industrial classification (SIC)"
          hint="Find your SIC code. If you have more than one, enter the SIC code you use most frequently"
          name="passport-number"
        />
        <TextInput
          label="UK VAT number"
          hint="This is 9 numbers, sometimes with 'GB' at the start, for example 123456789 or GB123456789. You can find it on your VAT registration certificate."
          name="passport-number"
        />
        <TextInput
          label="Companies House registration number (CRN)"
          hint="8 numbers or 2 letters followed by 6 numbers"
          name="passport-number"
        />
      </div>


      <h2 className="govuk-heading-l">When to use this pattern</h2>


      <p className="govuk-body">Follow this pattern if a user is applying for an export licence on behalf of a commercial organisation. </p>

      <p className="govuk-body">Ask for this information after the user has signed in to or registered for a GOV.UK One Login account (where One Login is being used).</p>

      <h2 className="govuk-heading-l">How it works</h2>

      <p className="govuk-body">There are two types of commercial organisations:</p>
      <ul>
        <li>in the United Kingdom</li>
        <li>outside of the United Kingdom</li>
      </ul>

      <p className="govuk-body">You should ask the user where the organisation is based before asking for the organisation's details. </p>

      <div className="app-example">

        <Radios


   label={
    <h1 className="govuk-heading-l">
      Where is your organisation based?
    </h1>
  }

          name="select-base"
          options={[
            {
              value: "In",
              label: "In the United Kingdom"
            },
            {
              value: "Male",
              label: "Outside of the United Kingdom"
            }
          ]}

        />

      </div>

    <h3 className="govuk-heading-m">Make registration numbers optional for foreign organisations</h3>
<p className="govuk-body">Commercial organisations based outside of the UK may not have any of the identification and registration numbers asked for.</p>

<p className="govuk-body">Continue to ask the same questions but make them optional.</p>

<div className="app-example">
<h2 className="govuk-heading-l">Register a commercial organisation</h2>
  <TextInput
    label="Name of organisation"
    name="passport-number"
  />
  <TextInput
    label="European Union registration and identification number (EORI) (optional)"
    hint="Get an EORI number if you don't have one"
    name="passport-number"
  />
  <TextInput
    label="Standard industrial classification (SIC) (optional)"
    hint="Find your SIC code. If you have more than one, enter the SIC code you use most frequently"
    name="passport-number"
  />
  <TextInput
    label="UK VAT number (optional)"
    hint="9 digits long with the first 2 letters indicating the country code of the registered business"
    name="passport-number"
  />
  <TextInput
    label="Companies House registration number (CRN) (optional)"
    hint="8 numbers or 2 letters followed by 6 numbers"
    name="passport-number"
  />
</div>

<h2 className="govuk-heading-l">Research</h2>
<p className="govuk-body">This pattern is currently used in an export licensing system which has gone through usability testing.</p>
<p className="govuk-body">It has not yet been used in other applications.</p>

      

      <p className="govuk-body">To contribute, add your thoughts and research findings to our <A href="#s">GitHub discussion</A>, or follow our <A href="#s">contribute guidance</A>.</p>
    </div>
</div>

);

export default Page;
