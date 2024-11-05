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
        <h3 id="accessory">Accessory</h3>
        <p>An accessory is different to a component. LITE defines the term in the application for users.</p>
        <p>Current definition: an accessory is an optional item that when fitted to a functioning product adds features or capability. An accessory can also be removed without detriment to the product.</p>
        <h3 id="air waybill">Air waybill</h3>
        <p>Any definitions provided to users should match what's on <a href="https://great.gov.uk/learn/categories/selling-across-borders-product-and-services-regulations-licensing-and-logistics/get-your-goods-into-the-destination-country/understand-international-trade-terms/">great.gov.uk</a>.</p>
        <p>Suggested hint text: We need to know if the product will undergo any processing or alteration work, for example being forged, coated or machined.</p>
        <h3 id="altered">Altered products</h3>
        <p>Also known as a processed product.</p>
        <p>Suggested hint text: we need to know if the product will undergo any processing or alteration work, for example being forged, coated or machined.</p>
        <h3 id="apply">Apply</h3>
        <p>Use "apply" anytime a user is completing a form or application for a specific licence or approval, except for open general export licences (OGELS).</p>
        <p>Use the term "register" for OGELs.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="b">B</h2>
        <h3 id="bill of lading">Bill of lading</h3>
        <p>Any definitions provided to users should match what's on <a href="https://great.gov.uk/learn/categories/selling-across-borders-product-and-services-regulations-licensing-and-logistics/get-your-goods-into-the-destination-country/understand-international-trade-terms/">great.gov.uk</a>.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="c">C</h2>

        <h3 id="component">Component</h3>
         <p>A component is different to an accessory. LITE defines the term in the application for users.</p>
         <p>Current definition: a component is a constituent part or element of a product.</p>

        <h3 id="consignee">Consignee</h3>
        <p>LITE defines the term in the application for users.</p>
        <p>Current definition: a consignee receives the products then delivers or sells them to the end user.</p>

        <h3 id="control list entry">Control list entry (CLE)</h3>
        <p>Products that are 'controlled' and require authorisation to be exported from the UK have a CLE. Each type of product has a specific CLE. 
          We publish a <a href="https://www.gov.uk/government/publications/uk-strategic-export-control-lists-the-consolidated-list-of-strategic-military-and-dual-use-items-that-require-export-authorisation">list of CLEs</a> on GOV.UK.</p>
        <p>If a product does not require authorisation, users will have a 'no licence required' document.</p>
        <p>The LITE system only allows users to choose from a bank of CLEs. They cannot type in a CLE that is not on the pre-populated list.</p>

        <h3 id="cryptography">Cryptography</h3>
        <p>Many applications ask users if the products they are exporting include cryptography or other security features</p>
        <p>Suggested hint text: for example, authentication, encryption, cryptanalysis, digital anti-tamper or any other information security feature.</p>
        <p>LITE provides several paragraphs of guidance about government security classifications using the <a href="https://design-system.service.gov.uk/components/details/">GDS design system details component.</a></p>
        <p>Current guidance: information security features include cryptography, authentication and cryptanalytic functions. They are often found
          in wireless or internet-based products and in communication, digital forensics and surveillance tools.</p>


        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="d">D</h2>
        <h3 id="dual-use">Dual-use</h3>
        <p>Hyphenate as "dual-use" not "dual use”.</p>
        <p>Dual-use products (including software and technology) can be used for both civil and military purposes. Dual-use products also includes all products which have non-explosive uses or assist in any way with the manufacture of nuclear weapons or other nuclear explosive devices.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="e">E</h2>
    
        <h3>Economic Operators Registration and Identification (EORI) number</h3>
        <p>Always capitalise "Economic", "Operators", "Registration" and "Identification". Do not capitalise "number".</p>
        <p>Usually just referred to as an EORI number. It is mandatory for customers clearance in the customer territory of the European Union.</p>
        <p>UK registered companies will have an EORI number that begins with GB or XI, so this can be built into the validation.</p>
        <p>Suggested hint text: The first two letters are the country code, like GB or XI. This is followed by 12 or 15 numbers, like GB 123456123456.</p>
        <p>The suggested help text is also used by HMRC across their services.</p>

        <h3 id="end user">End user</h3>
        <p>Do not hyphenate "end user" or "ultimate end user". Has historically been hyphenated so may be inconsistent across older services, forms and guidance.</p>
        <p>LITE defines the term in the application for users.</p>
        <p>Current definition: an end user receives the products in the destination country. They either use the products themselves, resell from stock or export them again to another country.</p>

        <h3 id="end user document">End user document</h3>
        <p>Do not hyphenate. Includes the:</p>
        <ul>
          <li><a href="https://www.gov.uk/government/publications/end-user-undertaking-euu-form">end user undertaking (EUU) form</a></li> 
          <li><a href="https://www.gov.uk/government/publications/stockist-undertaking-su-form">stockist undertaking (SU) form</a></li>
          <li><a href="https://www.gov.uk/government/publications/open-individual-export-licence-oiel-undertaking-template">open individual export licence (OIEL) undertaking template</a></li> 
        </ul>
        <p>Applicants must provide at least one of these documents as part of some licence applications (like OIELs and single individual export licences (SIELs)). It's important to tell users that the information they
        provide in their application should match what's in the end user documentation.</p>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="f">F</h2>

        <h3>Form 680 (F680)</h3>
        <p>LITE provides guidance on F680s using the <a href="https://design-system.service.gov.uk/components/details/">GDS design system details component.</a></p>
        <p>Current guidance: the F680 is an approval to export security classified products to overseas organisations or individuals, when they do not
        directly contribute towards a UK government defence contract. An F680 approval is always required before a UK company releases US International Traffic in Arms regulations (ITAR) materials to any foreign entity.
        For these purposes, US ITAR material means defence articles including technical data relating thereto or derived therefrom that is subject to controls under the US ITAR.</p>

        <h3>Form 1686 (F1686)</h3>
        <p>LITE provides guidance on F1686s using the <a href="https://design-system.service.gov.uk/components/details/">GDS design system details component.</a></p>
        <p>Current guidance: the F1686 is an approval to subcontract or collaborate with overseas organisations or individuals on MOD projects that involve classified information.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="g">G</h2>

        <h3>Government security classification</h3>
        <p>Synonym: government security grading</p>
        <p>Write in all lower case unless it's at the start of a sentence.</p>
        <p>LITE provides several paragraphs of guidance about government security classifications using the <a href="https://design-system.service.gov.uk/components/details/">GDS design system details component.</a></p>
        <p>Current guidance: the government classifies information assets to ensure they are appropriately protected.</p>
        <p><a href="https://www.gov.uk/government/publications/government-security-classifications">Guidance on government security gradings (opens in a new tab)</a></p>
        <p>The grading can sometimes include a prefix and suffix. There are many in use and so it is important that you know the full classification of the product.</p>
        <p>If the product was developed with Minstry of Defense (MOD) funding you will find the grading in the Security Aspects Letter provided by the MOD project team.</p>
        <p>If the product was developed with overseas government support that government is responsible for providing the grading.</p>
        <p>If the project was developed without UK or overseas government support you should apply for a private venture grading using <a href="https://spire.trade.gov.uk/spire/fox/espire/LOGIN/login">SPIRE - the online export licensing system</a>.
            The grading will be provided by MOD.</p>

     <h3>GOV.UK</h3>
     <p>All upper case.</p>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="h">H</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="i">I</h2>
        <h3 id="incorporate">Incorporate</h3>
        <p>Synonym: Integrate</p>
        <p>Incorporation is when one product is put into a new product, like a processing chip product is incorporated into a computer. In incorporation the item isn't changed, just added to a new product.</p>
        <p>Suggested hint text: incorporation means integrating a product into a higher system, platform or software and then exporting it in its new form.</p>


        <h3>International Traffic in Arms regulations (ITAR)</h3>
       <p>Always capitalise "International", "Traffic" and "Arms". Do not capitalise “regulations".</p>
       

        <h3 id="item">Item</h3>
        <p>The term 'item' is used when asking how many of each product you are exporting. For example, how many items of 'x' type of firearm are you exporting.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="j">J</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="k">K</h2>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="l">L</h2>
        <h3 id="licence">Licence</h3>
        <p>Always spell it this way when using licence as a noun.</p>
        <p>When it's a verb, use the spellings "license", "licensing" and “licensed".</p>


        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="m">M</h2>

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
    
        <h3 id="product name">Product name</h3>
        <p>Users need to give each new product a name when they add it to their application. This helps case officers understand what
        they want to export. It also makes it easier for users to add saved products to future applications.</p>
        <p>The product name should include the make, model and type of item.</p>
        <p>It should not include serial numbers or part numbers.</p>

        <p>Suggested hint text: try to match the name as closely as possible to any documentation such as the technical specification, end user
        certificate or firearm certificate.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="q">Q</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="r">R</h2>
        <h3 id="Register">Register</h3>
        <p>Use "register" for open general export licences (OGELS).</p>
        <p>Use the term "apply" for other licences and approvals, like standard individual export licences (SIELs) and MOD Form 680 (F680).</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="s">S</h2>
        <h3 id="security approval">Security approval</h3>
        <p>Term to cover getting Ministry of Defense (MOD) approval through Form 680 (F680) or Form 1686 (F1686).</p>

        <h3>Signatory name</h3>
        <p>Suggested hint text: this is the name of the person who signed the end user document.</p>

        <h3>Standard industrial classification (SIC) code</h3>
        <p>Do not capitalise unless it's at the start of a sentence.</p>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="t">T</h2>
        <h3>Third party</h3>
        <p>LITE defines the term in the application for users.</p>
        <p>Current definition: a third party is involved in the export but not regarded as a consignee, end user or ultimate end user. They might be an agent, broker, consultant or distributor.</p>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="u">U</h2>

        <h3 id="VAT">UK VAT number</h3>
        <p>VAT does not need to be spelled out the first time you use the term.</p>
        <p>Suggested help text: This is 9 numbers, sometimes with 'GB' at the start, for example 123456789 or GB123456789. You can find it on your VAT registration certificate.</p>
        <p>The suggested help text is also used by HMRC across their services.</p>

        <h3 id="ultimate end user">Ultimate end user</h3>
        <p>Do not hyphenate. Has hystorically been hyphenated so may be inconsistent across older services, forms and guidance.</p>
        <p>LITE defines the term in the application for users.</p>
        <p>Current definition: an ultimate end user in either the destination country or a third country receives the products from the end user, or occasionally via a consignee after the end user.
        This can be after products have been altered, processed or incorporated into a higher level system.</p>


        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="v">V</h2>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="w">W</h2>
        <h3 id="VAT">Words to avoid</h3>
         <p>Avoid using these words:</p>
         <ul>
          <li>licensee, use applicant or exporter instead</li>
          <li>goods, use products instead</li>
          <li>workbasket, use dashboard or account home instead</li>
          </ul>

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
