import "@/assets/css/glider.css";
import { HotTubsBrandInterface, ProductHotTubsInterface } from "@/function";
import MainLayout from "@/layouts/MainLayout";
import Glider from "glider-js";
import _ from "lodash";
import { useLayoutEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

interface CategoryLoaderData {
  category: HotTubsBrandInterface;
}
const CategoryPage = () => {
  const { category } = useLoaderData() as CategoryLoaderData;

  useLayoutEffect(() => {
    let glider: HTMLHtmlElement | null = document.querySelector(".glider");
    if (glider) {
      new Glider(glider, {
        slidesToScroll: 1,
        slidesToShow: 3.5,
        draggable: true,
        dots: ".dots",
        arrows: {
          prev: ".glider-prev",
          next: ".glider-next",
        },
      });
    }
  }, []);
  return (
    <MainLayout
      title={`${category.title} - Gulfsouth Spas`}
      description={category.slogan}
    >
      <>
        <div className="container tronTainer" id="twilight">
          <section id="doubleButtonWrap">
            <img
              src={category.heroImage}
              className="img-responsive dtop slantMask"
              alt={`${category.title} Hot Tub`}
            />
            <img
              src={category.heroImage}
              style={{ width: "100%" }}
              className="slantMask img-responsive mobile"
              alt={`${category.title} Hot Tube mobile image`}
            />
            <div id="doubleButtonHome" style={{ top: "70% !important" }}>
              <div className="twilight-lead">
                <img
                  src={category.brandLogo}
                  alt={`${category.title} Hot Tub brand logo`}
                  className="twilight-logo-light"
                />
                <img
                  src={category.brandDarkLogo}
                  alt={`${category.title} Hot Tub dark brand logo`}
                  className="twilight-logo-dark"
                />
                <br />
                <p style={{ width: "100%" }}>{category.slogan}</p>
              </div>
              <div className="btn para">
                <Link to="/hot-tubs">Models</Link>
              </div>
              <div className="btn para">
                <Link to="/contact-us">Get Pricing</Link>
              </div>
            </div>
          </section>
        </div>
        <div className="container maincontent">
          <div className="row mobile">
            <div className="col-md-12"></div>
          </div>
          <div className="row mobile" id="carouselReplace">
            <div className="col-md-12">
              <h1>{category.slogan}</h1>
              <p>{category.textDescription}. </p>
              <div style={{ marginTop: 24, marginBottom: 4 }}>
                <div className="btn para outline blue">
                  <Link to="/hot-tubs">Models</Link>
                </div>
              </div>
            </div>
          </div>
          <div
            id="carousel-example-generic"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="twilight-carousel carousel-info dtop">
              <div>
                <img
                  src={category.brandDarkLogo}
                  alt={`${category.title} Hot Tub dark logo`}
                />
                <h2>{category.slogan}</h2>
                <p>{category.textDescription}</p>
                <div className="btn para outline blue">
                  <Link to="/hot-tubs">Models</Link>
                </div>
              </div>
              <img
                alt="next/previous arrow for carousel"
                className="carousel-arrow"
                src="/img/carousel-arrow.jpg"
              />
            </div>
            {/* Wrapper for carousel slides */}
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src="/img/Ozone.png" alt="hot tub water feature" />
                <div className="carousel-caption"></div>
              </div>
            </div>
          </div>
          <section className="homemore row">
            <div className="col-xs-12 col-md-4 ">
              <div>
                <Link to={`/gallery/${category?.slug}`}>
                  <span>
                    <p style={{ color: "#00aad4" }}>
                      Envision yourself in a {category.title} hot tub.
                    </p>
                  </span>
                  <img
                    src="/img/Gallery.png"
                    alt={`Image gallery of ${category.title}`}
                    title={`Navigate to gallery of images of ${category.title} Hot Tubs`}
                  />
                </Link>
                <div
                  className="btn para"
                  style={{
                    position: "absolute",
                    bottom: 50,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    paddingTop: 6,
                    paddingBottom: 3,
                  }}
                >
                  <Link to={`/gallery/${category?.slug}`}>Gallery</Link>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-4 ">
              <div>
                <Link to={`/features/${category?.slug}`}>
                  <span>
                    <p>Explore all the magical features Swim SPA brings.</p>
                  </span>
                  <img
                    src="/img/Features.png"
                    alt="Trident Series Swim SPA features"
                    title="Navigate to Trident Series Swim SPA Features"
                  />
                </Link>
                <div
                  className="btn para outline blue infillWhite"
                  style={{
                    position: "absolute",
                    bottom: 50,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    paddingTop: 6,
                    paddingBottom: 3,
                  }}
                >
                  <Link to={`/features/${category?.slug}`}>Features</Link>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-4 ">
              <div>
                <Link to="/hot-tub-benefits">
                  <span>
                    <p>Improve your well-being with hydrotherapy</p>
                  </span>
                  <img
                    src="/img/Benefits.png"
                    alt="Swim SPA Benefits"
                    title="Navigate to Swim SPA Benefits"
                  />
                </Link>
                <div
                  className="btn para"
                  style={{
                    position: "absolute",
                    bottom: 50,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    paddingTop: 6,
                    paddingBottom: 3,
                  }}
                >
                  <Link to="/hot-tub-benefits">
                    {category?.title === "Swim Series"
                      ? "Swim Spas"
                      : "Hot Tub"}{" "}
                    Benefits
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section id="modelCarousel">
            <div className="row">
              <div className="col-md-2" />
              <div className="col-md-8 text-center">
                <h3 className="bluetitle" style={{ marginBottom: 15 }}>
                  {category.slogan}
                </h3>
                <p>
                  Designed to restore body and spirit, the Trident Series'
                  exclusive features and indulgent design create an unrivaled
                  spa experience.
                </p>
                <br />
              </div>
              <div className="col-md-2" />
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="glider-contain">
                  <div className="glider">
                    {category.products.map(
                      (item: ProductHotTubsInterface, i: any) => {
                        let slugged_name = _.lowerCase(item.name).replace(
                          /\s+/g,
                          ""
                        );
                        return (
                          <div key={i} className="modelItem">
                            <Link
                              to={`/products/${category.slug}/${slugged_name}`}
                            >
                              <img
                                src={`/img/home-page/products/${slugged_name}.png`}
                                alt={`${item.name} ${item.brand} Hot Tub on Gulfsouthspas `}
                              />
                              <h4>
                                {item.brand} {item.type.toUpperCase()}
                              </h4>
                              <p>{item.measurements} </p>
                            </Link>
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div role="tablist" className="dots" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </MainLayout>
  );
};

export default CategoryPage;
