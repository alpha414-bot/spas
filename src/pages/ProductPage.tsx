import { HotTubsBrandInterface, ProductHotTubsInterface } from "@/function";
import _ from "lodash";
import MainLayout from "@/layouts/MainLayout";
import LightGallery from "lightgallery/react";
import { Link, useLoaderData } from "react-router-dom";

// import styles
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

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
                {category?.title} - {product?.name}
              </h1>
              <div
                data-bv-show="rating_summary"
                data-bv-productid="gs-bar-harbor-se"
              />
              <p itemProp="description">{category?.textDescription}</p>
            </div>
            <div className="col-sm-2" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="newSpecs">
              <div className="dimensions">
                <span>Dimensions</span>
                <span>{product?.measurements}</span>
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
                <span>Seats</span>
                <span>{product?.seats}</span>
                <span>&nbsp;</span>
              </div>
            </div>
          </div>
          <div className="doublebuttons">
            <div className="btn para outline blue infillWhite">
              <Link to="/contact-us">Contact Us</Link>
            </div>
          </div>
        </div>
        <section className="modelDissection">
          <div className="bgGray maincontent">
            <div className="container">
              <div className="row">
                <div className="col-md-1" />
                <div
                  className="col-md-5"
                  style={{
                    padding:
                      product?.brand === "Swim Series" ? "8em 0 0 0" : "",
                    minHeight: product?.brand === "Swim Series" ? "25em" : "",
                  }}
                >
                  <div
                    style={{
                      transform:
                        product?.brand === "Swim Series" ? "rotate(90deg)" : "",
                    }}
                  >
                    <span id="dissectBarHarborSE" className="dissectionWrap">
                      <img
                        itemProp="image"
                        src={`/img/home-page/products/${product?.image}.png`}
                        alt={`${product?.name} ${product?.brand}`}
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
                          <img
                            className="img-responsive"
                            alt="EcoPur Filtration feature video"
                            src="/img/home-page/products/0.png"
                          />
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
                          <span>
                            {category?.title} - {product?.name.toUpperCase()}
                          </span>
                        </h4>
                        <table className="table modelSpecifications">
                          <tbody>
                            <tr>
                              <td>Dimensions</td>
                              <td>{product?.measurements}</td>
                            </tr>
                            {product?.swim_jets && (
                              <tr>
                                <td>Swim Jets</td>
                                <td>{product?.swim_jets}</td>
                              </tr>
                            )}
                            {product?.water_fall && (
                              <tr>
                                <td>Water Falls</td>
                                <td>({product?.water_fall}) Water Fall</td>
                              </tr>
                            )}
                            {product?.eth_water_fall && (
                              <tr>
                                <td>18" Water Fall</td>
                                <td>{product?.eth_water_fall}</td>
                              </tr>
                            )}
                            {product?.sth_water_fall && (
                              <tr>
                                <td>7" Water Fall</td>
                                <td>{product?.sth_water_fall}</td>
                              </tr>
                            )}
                            {product?.fountains && (
                              <tr>
                                <td>Fountains</td>
                                <td>{product?.fountains}</td>
                              </tr>
                            )}
                            <tr>
                              <td>Weight (Dry/Full)</td>
                              <td>
                                Dry Weight {product?.weight_dry} lbs. - Filled
                                Weight {product?.weight_filled.toLocaleString()}{" "}
                                lbs.
                              </td>
                            </tr>
                            <tr>
                              <td>Gallons</td>
                              <td>{product?.gallons}</td>
                            </tr>
                            <tr>
                              <td>Power Requirement</td>
                              <td>{product?.power_requirement}</td>
                            </tr>
                            <tr>
                              <td>Seating Capacity</td>
                              <td>{product?.seats}</td>
                            </tr>
                            <tr>
                              <td>LED Lighting</td>
                              <td>({product?.led_lighting}) LED Light</td>
                            </tr>
                            {product?.exclusive_features &&
                              product?.exclusive_features?.length > 0 && (
                                <tr>
                                  <td>Exclusive Features</td>
                                  <td>
                                    {product?.exclusive_features?.join(", ")}.
                                  </td>
                                </tr>
                              )}
                            {category?.title === "Swim Series" && (
                              <tr>
                                <td>Premium Options</td>
                                <td>
                                  <strong>
                                    {!!product?.therapy_fitness
                                      ? "Therapy & Fitness"
                                      : ""}{" "}
                                    {!!product?.recreation_swim_fitness
                                      ? "Recreation & Swim & Fitness"
                                      : ""}
                                    {!!product?.endurance_swim_training
                                      ? " / Endurance "
                                      : ""}
                                    {!!product?.fast_sprint
                                      ? " / Fast Sprint "
                                      : ""}
                                  </strong>
                                </td>
                              </tr>
                            )}
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
                </div>
              </div>
              <div className="col-md-1" />
            </div>
          </div>
        </section>
        <section id="colorPicker">
          <div className="container maincontent">
            <div className="row">
              <div
                className="col-md-12"
                style={{
                  padding: product?.brand === "Swim Series" ? "12em 0 0 0" : "",
                  minHeight: product?.brand === "Swim Series" ? "36em" : "",
                }}
              >
                <div
                  className="tubContainer"
                  style={{
                    transform:
                      product?.brand === "Swim Series" ? "rotate(90deg)" : "",
                  }}
                >
                  <div id="shell">
                    <img
                      id="shellImageOne"
                      src={`/img/home-page/products/${product?.image}.png`}
                      alt={`${product?.name} ${product?.brand}`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h3 className="bluetitle">Colors Available:</h3>
              </div>
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {_.filter(
                category?.colors,
                (item) => item === "sterling" || item === "storm"
              ).length > 0 && (
                <div className="col-md-6">
                  <p className="shellLabel bluetitle">
                    Acrylic: <span>Color Options</span>
                  </p>
                  <div id="shellSwatches">
                    <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                      {category?.colors.includes("sterling") && (
                        <a
                          data-sub-html={`<h3>Sterling Marble</h3>`}
                          href={`/img/getaway/colors/Sterling.png`}
                        >
                          <img
                            src={`/img/getaway/colors/Sterling.png`}
                            className="img-responsive"
                          />

                          <p className="text-center">Sterling Marble</p>
                        </a>
                      )}
                      {category?.colors.includes("storm") && (
                        <a
                          data-sub-html={`<h3>Sterling Marble</h3>`}
                          href={`/img/getaway/colors/Storm.png`}
                        >
                          <img
                            src={`/img/getaway/colors/Storm.png`}
                            className="img-responsive"
                          />
                          <p className="text-center">Storm Clouds</p>
                        </a>
                      )}
                      {category?.colors.includes("tuscan") && (
                        <a
                          data-sub-html={`<h3>Tuscan Sun</h3>`}
                          href={`/img/getaway/colors/Tuscan.png`}
                        >
                          <img
                            src={`/img/getaway/colors/Tuscan.png`}
                            className="img-responsive"
                          />

                          <p className="text-center">Tuscan Sun</p>
                        </a>
                      )}
                      {category?.colors.includes("smoky") && (
                        <a
                          data-sub-html={`<h3>Smoky Mountain</h3>`}
                          href={`/img/getaway/colors/Smoky.png`}
                        >
                          <img
                            src={`/img/getaway/colors/Smoky.png`}
                            className="img-responsive"
                          />

                          <p className="text-center">Smoky Mountain</p>
                        </a>
                      )}
                    </LightGallery>
                  </div>
                </div>
              )}
              {_.filter(
                category?.colors,
                (item) => item === "ash" || item === "black" || item === "gray"
              ).length > 0 && (
                <div className="col-md-6">
                  <p className="skirtLabel bluetitle">
                    Skirt: <span>Color Options</span>
                  </p>
                  <div id="skirtSwatches">
                    <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                      {category?.colors.includes("gray") && (
                        <a
                          data-sub-html={`<h3>Gray</h3><p>STANDARD</p>`}
                          href={`/img/getaway/colors/Gray.png`}
                        >
                          <img
                            src={`/img/getaway/colors/Gray.png`}
                            className="img-responsive skirtSelected"
                          />

                          <p className="text-center">
                            Gray <br />
                            (STANDARD)
                          </p>
                        </a>
                      )}
                      {category?.colors.includes("black") && (
                        <a
                          data-sub-html={`<h3>Black</h3><p>STANDARD</p>`}
                          href={`/img/getaway/colors/Black.png`}
                        >
                          <img
                            src={`/img/getaway/colors/Black.png`}
                            className="img-responsive"
                          />

                          <p className="text-center">
                            Black <br />
                            (STANDARD)
                          </p>
                        </a>
                      )}
                      {category?.colors.includes("coastal") && (
                        <a
                          data-sub-html={`<h3>Elite Coastal Gray</h3><p>OPTIONAL</p>`}
                          href={`/img/getaway/colors/Elite-Coastal.png`}
                        >
                          <img
                            src={`/img/getaway/colors/Elite-Coastal.png`}
                            className="img-responsive"
                          />

                          <p className="text-center">
                            Elite Coastal Gray <br />
                            (OPTIONAL)
                          </p>
                        </a>
                      )}
                      {category?.colors.includes("ash") && (
                        <a
                          data-sub-html={`<h3>Elite Ash</h3><p>OPTIONAL</p>`}
                          href={`/img/getaway/colors/Elit-Ash.png`}
                        >
                          <img
                            src={`/img/getaway/colors/Elit-Ash.png`}
                            className="img-responsive"
                          />

                          <p className="text-center">
                            Elite Ash <br />
                            (OPTIONAL)
                          </p>
                        </a>
                      )}
                    </LightGallery>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <div className="container maincontent">
          <div className="row">
            <div className="col-md-12">
              <div className="doublebuttons">
                <div className="btn para outline blue">
                  <Link to={`/gallery/${category?.slug}`}>Gallery</Link>
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
