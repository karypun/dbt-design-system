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
        <p>When a product is altered or processed to change what it was - for example,  being forged, coated or machined.</p>

 <p>Suggested help text for users: We need to know if the product will undergo any processing or alteration work, for example being forged, coated or machined.</p>


        <h2 className="a-z-header" id="b">B</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>


        <h2 className="a-z-header" id="c">C</h2>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="d">D</h2>
        <h3 id="dbs adult first">Dual-use</h3>
        <p>Dual-use products (including software and technology) can be used for both civil and military purposes. Dual-use products also includes all products which have non-explosive uses or assist in any way with the manufacture of nuclear weapons or other nuclear explosive devices.</p>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="e">E</h2>
        <h3 id="eea biometric residence card">End user</h3>
        <p>An end-user receives the products in the destination country. They either use the products themselves, resell from stock, or export them again to another country.</p>
        <h3 id="egates">End user undertaking</h3>
        <p>A form that an exporter has to complete for single individual export licences (SIELs) and standard individual trade control licences (SITCLs). It asks details about the products being exported. Exporter must complete one if the products are being shipped to be used when they arrive or if an end user is incorporating the products (such as installing them into another product or higher-level system).</p>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="f">F</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="g">G</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="h">H</h2>
        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="i">I</h2>
        <h3 id="immigration adviser">Incorporate</h3>
        <p>Synonym: Integrate</p>
        <p>Incorporation is when one product is put into a new product - for example a processing chip product is incorporated into a computer. In incorporation the item isn't changed, just added to a new product. In the new SIEL application, items are incorporated into a 'higher platform' (for example adding a gun to a tank).</p>
        <p>Suggested help text for users: We need to know if the product will be onward exported, regardless of whether it has been integrated into a higher system, platform or software.</p>
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

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="n">N</h2>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="o">O</h2>

        <a className="back-to-top" href="#a-z-nav">Back to top</a>

        <h2 className="a-z-header" id="p">P</h2>
        <h3 id="passport control">Product</h3>
        <p>Each type of thing you are exporting. Products include goods, items, technology, data and services.</p> 
        <p>For example, if you are exporting firearms and ammunitions,  you’re exporting 2 products. You may be exporting several firearms, but they still count as one product.</p> 
         <p>Legacy systems use the word ‘goods’. The word product has been tested and found to be easier for users to understand.</p>

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
