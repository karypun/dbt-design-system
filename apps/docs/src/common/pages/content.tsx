import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A, NavigationMenu } from '@not-govuk/components';
import { AZNavigation } from '@hods/components';

export const title = 'Content style guide';
const description = 'How to write content for Home Office services.';

const Page: FC<PageProps> = ({ location }) => (
  <Fragment>
    <Helmet>
      <title>{title} - DBT design system</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:article:section" content={title} />
    </Helmet>

    <h1>{title}</h1>
    <AZNavigation id="a-z-nav" />

    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <h2 className="a-z-header" id="a">A</h2>
        <h3 id="altered">Altered or processed products</h3>
        <p>When a product is altered or processed to change what it was - for example, being forged, coated or machined.</p>
        <p>Suggested hint text: We need to know if the product will undergo any processing or alteration work, for example being forged, coated or machined.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="b">B</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="c">C</h2>

        <h3 id="CRN">Company registration number (CRN)</h3>
        <p>Suggested help text: 8 numbers, or 2 letters followed by 6 numbers.</p>
        <h3 id="consignee">Consignee</h3>
        <p>A consignee receives the products then delivers or sells them to the end user</p>

        <h3 id="control list entry">Control list entry (CLE)</h3>
        <p>Products that are 'controlled' and require authorisation to be exported from the UK have a CLE. Each type of product has a specific CLE. 
          We publish a <a href="https://www.gov.uk/government/publications/uk-strategic-export-control-lists-the-consolidated-list-of-strategic-military-and-dual-use-items-that-require-export-authorisation">list of CLEs</a> on GOV.UK.</p>
        <p>If a product does not require authoritsation, users will have a 'no licence required' document.</p>
        <p>The LITE system only allows users to choose from a bank of CLEs. They cannot type in a CLE that is not on the pre-populated list.</p>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="d">D</h2>
        <h3 id="dual-use">Dual-use</h3>
        <p>Hyphenate</p>
        <p>Dual-use products (including software and technology) can be used for both civil and military purposes. Dual-use products also includes all products which have non-explosive uses or assist in any way with the manufacture of nuclear weapons or other nuclear explosive devices.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="e">E</h2>
        <h3 id="eea biometric residence card">End user</h3>
        <p>An end user receives the products in the destination country. They either use the products themselves, resell from stock, or export them again to another country.</p>
        
        <h3 id="EORI">Economic Operators Registration and Identification (EORI) number</h3>
        <p>Usually just referred to as an EORI number. It is mandatory for customers clearance in the customer territory of the European Union.</p>
        <p>UK registered companies will have an EORI number that begins with GB or XI, so this can be built into the validation.</p>
        <p>Suggested hint text: The first two letters are the country code, like GB or XI. This is followed by 12 or 15 numbers, like GB 123456123456.</p>
        <p>The suggested help text is also used by HMRC across their services.</p>


        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="f">F</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="g">G</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="h">H</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="i">I</h2>
        <h3 id="incorporate">Incorporate</h3>
        <p>Synonym: Integrate</p>
        <p>Incorporation is when one product is put into a new product - for example a processing chip product is incorporated into a computer. In incorporation the item isn't changed, just added to a new product. In the new SIEL application, items are incorporated into a 'higher platform' (for example adding a gun to a tank).</p>
        <p>Suggested help text: We need to know if the product will be onward exported, regardless of whether it has been integrated into a higher system, platform or software.</p>
        <h3 id="item">Item</h3>
        <p>The term 'item' is used when asking how many of each product you are exporting. For example, how many items of 'x' type of firearm are you exporting.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="j">J</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="k">K</h2>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="l">L</h2>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="m">M</h2>

        <h3 id="modified military">Modified for military use</h3>
        <p>Goods determined to have a clear military function and altered for military use.</p>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="n">N</h2>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="o">O</h2>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="p">P</h2>
        <h3 id="passport control">Product</h3>
        <p>Each type of thing you are exporting. Products include goods, items, technology, data and 
          services.</p>
        <p>For example, if you are exporting firearms and ammunitions, you’re exporting 2 products. You may be exporting several firearms, but they still count as one product.</p>
        <p>Legacy systems use the word ‘goods’. The word product has been tested and found to be easier for users to understand.</p>
        <p>What is being being exported can:</p>
        <ul>
          <li>be a complete product - hardware such as devices, systems platforms, vehicles, equipment</li>
          <li>be part of a product - components and accessories or raw materials and substances</li>
          <li>help operate a product - software or information such as technology manuals and specifications</li>
          </ul>
        <h3 id="passport control">Product name</h3>
        <p>Users need to give each new product a name when they add it to their application. This helps case officers understand what
        they want to export. It also makes it easier for users to add saved products to future applications.</p>
        <p>The product name should include the make, model and type of item.</p>
        <p>It should not include serial numbers or part numbers.</p>
        <p>Suggested hint text: Try to match the name as closely as possible to any documentation such as the technical specification, end-user
        certificate or firearm certificate.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="q">Q</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="r">R</h2>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="s">S</h2>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="t">T</h2>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="u">U</h2>

        <h3 id="VAT">UK VAT number</h3>
        <p>VAT does not need spelled out the first time you use the term.</p>
        <p>Suggested the help text: This is 9 numbers, sometimes with 'GB' at the start, for example 123456789 or GB123456789. You can find it on your VAT registration certificate.</p>
        <p>The suggested help text is also used by HMRC across their services.</p>


        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="v">V</h2>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="w">W</h2>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="x">X</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="y">Y</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="z">Z</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2>Help improve this guide</h2>
        <p>To contribute, add it to the <A href="https://github.com/UKHomeOffice/design-system/discussions/470">GitHub discussion</A>.</p>
      </div>
    </div>
  </Fragment>
);

export default Page;
