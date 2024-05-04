import { HotTubsBrandInterface, ProductHotTubsInterface } from "@/function";
import MainLayout from "@/layouts/MainLayout";
import { useLoaderData } from "react-router-dom";

interface ProductLoaderInterface {
  product: ProductHotTubsInterface;
  category: HotTubsBrandInterface;
}
const ProductPage = () => {
  const { product, category } = useLoaderData() as ProductLoaderInterface;
  return (
    <MainLayout
      title={`${product?.name} - ${category?.title} - Gulfsouth Spas Product`}
      description={`${category?.textDescription}`}
    >
      <div className="maincontent">
        <div className="heroWrap">
          <img
            className="img-responsive dtop"
            style={{ margin: "auto", width: "100%" }}
            alt={`${category?.title} heroImage`}
            src={category?.heroImage}
          />
          <img
            className="img-responsive mobile"
            style={{ margin: "auto", width: "100%" }}
            alt={`${category?.title} heroImage`}
            src={category?.heroMobileImage}
          />
        </div>
        <div className="container">
          <div className="row models">
            <div className="col-sm-2" />
            <div className="col-xs-12 col-sm-8">
              <h1 itemProp="name" content="Coastal Series">
                {/*<span itemprop="brand">Coastal Series</span>*/}
                {category.title} - {product.name}
              </h1>
              <div
                data-bv-show="rating_summary"
                data-bv-productid="gs-bar-harbor-se"
              />
              <p itemProp="description">{category.textDescription}</p>
            </div>
            <div className="col-sm-2" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="newSpecs">
              <div className="dimensions">
                <span>Dimensions</span>
                <span>{product.measurements}</span>
                <span>&nbsp;</span>
              </div>
              <div className="gallons">
                <span>Gallons</span>
                <span>{product?.gallons}</span>
                <span>&nbsp;</span>
              </div>
              <div className="jets">
                <span>OVO Jets</span>
                <span>{product?.jets}</span>
                <span>&nbsp;</span>
              </div>
              <div className="seating">
                <span>Seat(s)</span>
                <span>{product.seats}</span>
                <span>&nbsp;</span>
              </div>
            </div>
          </div>
          <div className="doublebuttons">
            <div className="btn para outline blue infillWhite">
              <a href="/contact-us">Contact Us</a>
            </div>
          </div>
        </div>
        <section className="modelDissection">
          <div className="bgGray maincontent">
            <div className="container">
              <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5">
                  <div>
                    <span id="dissectBarHarborSE" className="dissectionWrap">
                      <img
                        itemProp="image"
                        src={`/img/home-page/products/${product.image}.png`}
                        alt="Bar Harbor SE downshot"
                      />

                      <button
                        className="ecoPurDot dot animated pulse infinite selected"
                        data-target="#dissectionCarousel"
                        data-slide-to={0}
                      >
                        +
                      </button>
                    </span>
                    <div className="num" />
                  </div>
                </div>
                <div className="col-md-5">
                  <div
                    id="dissectionCarousel"
                    className="carousel slide vertical"
                    data-ride="carousel"
                    data-interval="false"
                  >
                    {/* Wrapper for slides */}
                    <div className="carousel-inner">
                      <div className="item active">
                        <h2>INSULATION</h2>
                        <span className="videoFeatureWrap">
                          {/*<a href="https://www.youtube-nocookie.com/embed/zTW0s8qeOMo"*/}
                          {/*     data-poster="">*/}
                          {/*<span></span>*/}
                          <img
                            className="img-responsive"
                            alt="EcoPur Filtration feature video"
                            src="/img/home-page/products/0.png"
                          />
                          {/*</a>*/}
                        </span>
                        <ul style={{ paddingLeft: "100px !important" }}>
                          <li>Up to 7 times the R-value of other hot tubs</li>
                          <li>
                            The isolating reflective panel redirects the heat
                          </li>
                          <li>Added protection against freezing</li>
                          <li>Acts as sound barrier</li>
                          <li>The unique design protects equipment</li>
                          <li>Allows easy access for service and upgrading</li>
                        </ul>
                      </div>
                    </div>
                    {/*<a class="left carousel-control" href="#dissectionCarousel" data-slide="prev">
                                       <img src="https://masterspascdn.com/img/arrow.png">
                                       <span class="sr-only">Previous</span>
                                   </a>
                                   <a class="right carousel-control" href="#dissectionCarousel" data-slide="next">
                                       <img src="https://masterspascdn.com/img/arrow.png">
                                       <span class="sr-only">Next</span>
                                   </a>*/}
                  </div>
                </div>
                <div className="col-md-1" />
              </div>
            </div>
          </div>
        </section>
        <section id="modelAccordion">
          <div className="container">
            <div className="row">
              <div className="col-md-1" />
              <div className="col-md-10">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          + Model Specifications
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseOne"
                      className="panel-collapse collapse "
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="panel-body">
                        <h4 className="lineModelTitle text-center">
                          <span>Coastal Series 5L</span>
                        </h4>
                        <table className="table modelSpecifications">
                          <tbody>
                            <tr>
                              <td>Dimensions</td>
                              <td>62” X 82.5” X 33”</td>
                            </tr>
                            <tr>
                              <td>Weight (Dry/Full)</td>
                              <td>
                                Dry Weight 375 lbs. - Filled Weight 2,275 lbs.
                              </td>
                            </tr>
                            <tr>
                              <td>Gallons</td>
                              <td>225</td>
                            </tr>
                            <tr>
                              <td>Power Requirement</td>
                              <td>220 volt (1) x 3 BHP</td>
                            </tr>
                            <tr>
                              <td>Seating Capacity</td>
                              <td>6</td>
                            </tr>
                            <tr>
                              <td>LED Lighting</td>
                              <td>(1)LED Light</td>
                            </tr>
                            <tr>
                              <td>Exclusive Features</td>
                              <td>Digital Topside</td>
                            </tr>
                            <tr>
                              <td>Premium Options</td>
                              <td>Comfortable Headsets</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          + Standard Features
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseTwo"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                    >
                      <div className="panel-body">
                        <div className="row" id="standardFeatures">
                          <div className="col-sm-6 col-md-4">
                            <div>
                              <img
                                className="img-responsive"
                                src="/img/home-page/products/1.jpg"
                                alt="LED Lighting for Getaway Series Hot Tubs"
                              />
                              <h4>Illuminated Air &amp; Water Diverters</h4>
                              <p>
                                Add a beautiful glow to your hot tub with
                                Colorscape Lighting. With multiple color modes,
                                these LED lights are a fun hot tub feature.
                                <br />
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div>
                              <img
                                className="img-responsive"
                                src="/img/home-page/products/2.jpg"
                                alt="LED Lighting for Getaway Series Hot Tubs"
                              />
                              <h4>Illuminated Underwater Jet</h4>
                              <p>
                                Add a beautiful glow to your hot tub with
                                Colorscape Lighting. With multiple color modes,
                                these LED lights are a fun hot tub feature.
                                <br />
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div>
                              <img
                                className="img-responsive"
                                src="/img/home-page/products/3.jpg"
                                alt="LED Lighting for Getaway Series Hot Tubs"
                              />
                              <h4>Massaging Jets</h4>
                              <p>
                                Add a beautiful glow to your hot tub with
                                Colorscape Lighting. With multiple color modes,
                                these LED lights are a fun hot tub feature.
                                <br />
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div>
                              <img
                                className="img-responsive"
                                src="/img/home-page/products/4.jpg"
                                alt="LED Lighting for Getaway Series Hot Tubs"
                              />
                              <h4>Illuminated Water Fountains</h4>
                              <p>
                                Add a beautiful glow to your hot tub with
                                Colorscape Lighting. With multiple color modes,
                                these LED lights are a fun hot tub feature.
                                <br />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          + Premium Options
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseThree"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                    >
                      <div className="panel-body">
                        <div className="row" id="premiumOptions">
                          <div className="col-sm-6 col-md-4">
                            <div>
                              <span className="videoFeatureWrap">
                                <img
                                  alt="Bluetooth Speaker feature video"
                                  className="img-responsive"
                                  src="/img/home-page/products/5.png"
                                />
                              </span>
                              <h4>Bluetooth Speaker</h4>
                              <p>
                                It comes with an in.p4 docking station that
                                connects, protects and lets you control your
                                audio player or smartphone directly from your
                                spa keypad.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          + Warranty
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseFour"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingFour"
                    >
                      <div className="panel-body">
                        <ul className="warrantyList">
                          <li>20 YEARS - Shell Structure</li>
                          <li>3 YEAR - Surface Finish</li>
                          <li>5 YEAR - Electrical Equipment Components</li>
                          <li>5 YEAR - PLUMBING</li>
                          <li>1 YEAR - Other Components </li>
                        </ul>
                        <p>
                          <small>*If equipped. Options vary by model.</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-1" />
            </div>
          </div>
        </section>
        <div className="container maincontent">
          <div id="energyrow" className="row">
            <div className="col-md-12">
              <h2 className="energytitle">Estimated Monthly Operation Cost</h2>
              {/*<h2 class="energycost">$$$.$$</h2>*/}
              <div className="doublebuttons">
                <div className="btn para">
                  <a href="/contact-us">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="colorPicker">
          <div className="container maincontent">
            <div className="row">
              <div className="col-md-12">
                <div className="tubContainer">
                  <div id="shell">
                    <img
                      alt="Pebble Beach"
                      id="shellImageOne"
                      src="/img/home-page/products/cs5l.png"
                    />
                    {/*<img alt="Sea Salt" id="shellImageTwo"*/}
                    {/*     src="/img/home-page/products/cs5l.png" />*/}
                  </div>
                  {/* <div id="skirt" class="skirtGetaway">
                                            <img alt="Espresso Skirting" id="skirtImageOne"
                                                 src="/img/color-picker/render/getaway/skirt/espresso.png" />
                                            <img alt="Graphite Grey Skirting" id="skirtImageTwo"
                                                 src="/img/color-picker/render/getaway/skirt/graphite-grey.png" />
                                       </div> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h3 className="bluetitle">Colors Available:</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className="shellLabel bluetitle">
                  Acrylic: <span>Color Options</span>
                </p>
                <div id="shellSwatches">
                  <div>
                    <a
                      id="rotoshellOne"
                      className="shellOne shellSelected"
                      title="Sterling Marble"
                      href="javascript:void(0)"
                    />
                    <p className="text-center">Sterling marble</p>
                  </div>
                  <div>
                    <a
                      id="rotoshellTwo"
                      className="shellTwo"
                      title="Storm Cloud"
                      href="javascript:void(0)"
                    />
                    <p className="text-center">Storm Clouds</p>
                  </div>
                  <div>
                    <a
                      id="rotoshellThree"
                      className="shellThree"
                      title="Tuscan Sun"
                      href="javascript:void(0)"
                    />
                    <p className="text-center">Tuscan Sun</p>
                  </div>
                  <div>
                    <a
                      id="rotoshellFour"
                      className="shellFour"
                      title="Smoky Mountain"
                      href="javascript:void(0)"
                    />
                    <p className="text-center">Smoky Mountain</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <p className="skirtLabel bluetitle">
                  Skirt: <span>Color Options</span>
                </p>
                <div id="skirtSwatches">
                  <div>
                    <a
                      id="rotoskirtOne"
                      className="skirtOne skirtSelected"
                      title="DuraMaster Espresso"
                      href="javascript:void(0)"
                    />
                    <p className="text-center">
                      Gray <br />
                      (STANDARD)
                    </p>
                  </div>
                  <div>
                    <a
                      id="rotoskirtTwo"
                      className="skirtTwo"
                      title="DuraMaster Graphite"
                      href="javascript:void(0)"
                    />
                    <p className="text-center">
                      Black <br />
                      (STANDARD)
                    </p>
                  </div>
                  <div>
                    <a
                      id="rotoskirtThree"
                      className="skirtThree"
                      title="Elite Coastal Gray"
                      href="javascript:void(0)"
                    />
                    <p className="text-center">
                      Elite Coastal Gray <br />
                      (OPTIONAL)
                    </p>
                  </div>
                  <div>
                    <a
                      id="rotoskirtFour"
                      className="skirtFour"
                      title="Elite Ash"
                      href="javascript:void(0)"
                    />
                    <p className="text-center">
                      Elite Ash <br />
                      (OPTIONAL)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container maincontent">
          <div className="row">
            <div className="col-md-12">
              <div className="doublebuttons">
                <div className="btn para outline blue">
                  <a href="/subpages/coastal-gallery">Gallery</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <section className="bgGray">
          <div id="featureWrap" className="container maincontent">
            <div className="howToBuy" id="howToBuy">
              <div className="row">
                <div className="col-md-12">
                  <p
                    style={{
                      fontSize: 24,
                      textAlign: "center",
                      maxWidth: 500,
                      fontWeight: 300,
                      margin: "auto",
                      marginTop: 35,
                      lineHeight: 1,
                    }}
                  >
                    At Gulfsouth Spas, we make buying a hot tub or swim spa just
                    as relaxing as using one.
                  </p>
                </div>
                <div className="col-md-4">
                  <figure>
                    <picture>
                      <source
                        srcSet="/img/swimspas/icon-welcom-to-event.webp"
                        type="image/webp"
                      />
                      <source
                        srcSet="/img/swimspas/icon-welcom-to-event.png"
                        type="image/png"
                      />
                      <img
                        className="img-responsive"
                        loading="lazy"
                        src="/img/swimspas/icon-welcom-to-event.png"
                        alt="Come visit our showroom"
                      />
                    </picture>
                    <figcaption>
                      Visit our showroom or schedule a video chat
                    </figcaption>
                  </figure>
                  <span>
                    See a hot tub or swim spa, select the perfect size.
                  </span>
                </div>
                <div className="col-md-4">
                  <figure>
                    <picture>
                      <source
                        srcSet="/img/swimspas/icon-professional-evaluation.webp"
                        type="image/webp"
                      />
                      <source
                        srcSet="/img/swimspas/icon-professional-evaluation.png"
                        type="image/png"
                      />
                      <img
                        className="img-responsive"
                        loading="lazy"
                        src="/img/swimspas/icon-professional-evaluation.png"
                        alt="Professional evaluates your space"
                      />
                    </picture>
                    <figcaption>
                      A professional will evaluate your space
                    </figcaption>
                  </figure>
                  <span>
                    We can do this with a photo &amp; dimensions or by visiting
                    your backyard.
                  </span>
                </div>
                <div className="col-md-4">
                  <figure>
                    <picture>
                      <source
                        srcSet="/img/swimspas/icon-installation.webp"
                        type="image/webp"
                      />
                      <source
                        srcSet="/img/swimspas/icon-installation.png"
                        type="image/png"
                      />
                      <img
                        className="img-responsive"
                        loading="lazy"
                        src="/img/swimspas/icon-installation.png"
                        alt="Schedule hot tub or swim spa installation"
                      />
                    </picture>
                    <figcaption>Schedule a day for installation</figcaption>
                  </figure>
                  <span>
                    When you're ready, a hot tub or swim spa can be installed in
                    one day.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ProductPage;
