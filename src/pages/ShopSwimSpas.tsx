import "@/assets/css/tubfilter.css";
import MainLayout from "@/layouts/MainLayout";
import { _TubsData } from "@/services/modules/data";
import $ from "jquery";
import _ from "lodash";
import mixitup from "mixitup";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import multifilter from "mixitup-multifilter";

const ShopSwimSpas = () => {
  useEffect(() => {
    var containerEl = document.querySelector(".filter-area");
    var brandFilter: HTMLSelectElement | null =
      document.querySelector(".brandFilter");
    var swimmingFilter: HTMLSelectElement | null =
      document.querySelector(".swimmingFilter");
    var hash = window.location.hash;
    var noHash = hash.replace("#", ".");

    if (noHash == ".all" || noHash == "") {
      var noHash = "all";
    }
    // mixitup(".filter-area");
    if (containerEl) {
      mixitup.use(multifilter);
      var mixer = mixitup(containerEl, {
        multifilter: {
          enable: true,
        },
        load: {
          filter: noHash,
        },
      });
    }

    if (brandFilter) {
      brandFilter.addEventListener("change", function () {
        var brandSelector = brandFilter?.value;

        mixer.filter(brandSelector);
      });
    }
    if (swimmingFilter) {
      swimmingFilter.addEventListener("change", function () {
        var swimmingSelector = swimmingFilter?.value;

        mixer.filter(swimmingSelector);
      });
    }

    $("#not_matches").hide();

    $("select").on("change", function () {
      window.setTimeout(function () {
        if (!$(".filter-item:visible").length) $("#not_matches").fadeIn();
      }, 1200);
    });

    $("select").on("change", function () {
      if ($("#not_matches").is(":visible")) $("#not_matches").hide();
    });
  }, []);
  let products = _.filter(
    _TubsData,
    (item) => item.brand.toLowerCase() === "Swim Series".toLowerCase()
  );

  return (
    <MainLayout
      title="Swim Spas by Gulfsouth Spas"
      description="Gulfsouth Spas makes two premium lines of swim spas."
    >
      <div className="container maincontent">
        <div className="row" style={{ marginTop: 75 }}>
          <div className="col-md-3" />
          <div className="col-md-9">
            <h1>Shop Swim Spas</h1>
            <p>
              With so many options, finding the perfect swim spa can feel
              complicated. There's so much choice, so many features, and myriad
              models — you simply don't know where to start. Here, you can shop
              all models at a glance, or narrow your search using the filters to
              find swim spas that fit your lifestyle. Select any spa to learn
              more about its unique features.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="controls col-md-3">
            <div className="row">
              <div className="col-sm-4 col-md-12">
                <fieldset data-filter-group="">
                  <h2>Swim Spa Brands</h2>
                  <select className="brandFilter form-control">
                    <option value="" selected disabled>
                      Select a Brand
                    </option>
                    <option value="">All Brands</option>
                    <option value=".SwimSeries">Swim Series</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-sm-4 col-md-12">
                <fieldset data-filter-group="">
                  <h2>Shop By Use</h2>
                  <select className="swimmingFilter form-control">
                    <option value="" selected disabled>
                      Select Primary Swim Usage
                    </option>
                    <option value="">Shop all swim spas</option>
                    <option value=".filter-therapy-1">Therapy/Fitness</option>
                    <option value=".filter-recreation-1">
                      Recreation/Swim/Fitness
                    </option>
                    <option value=".filter-endurance-1">
                      Endurance Swim Training
                    </option>
                    <option value=".filter-sprint-1">
                      Fast/Sprint Swimming
                    </option>
                  </select>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row items filter-area animated swim-spas fadeIn display-flex">
              {products.map((item, index) => {
                let category_slug = _.lowerCase(item.brand).replace(
                  /\s+/g,
                  "-"
                );
                // if
                return (
                  <div
                    key={index}
                    className={`col-xs-12 col-sm-6 col-lg-4 mix filter-item filter-therapy-${
                      !!item.therapy_fitness ? 1 : 0
                    } filter-recreation-${
                      !!item.recreation_swim_fitness ? 1 : 0
                    } filter-endurance-${
                      !!item.endurance_swim_training ? 1 : 0
                    } filter-sprint-${!!item.fast_sprint ? 1 : 0} SwimSeries`}
                    data-price={item.price}
                  >
                    <div className="row filter-item-details">
                      <div className="col-xs-12">
                        <span className="tubwrap">
                          <Link
                            to={`/products/${category_slug}/${_.lowerCase(
                              item.name
                            ).replace(/\s+/g, "")}`}
                          >
                            <img
                              loading="lazy"
                              className="img-responsive"
                              src={`/img/home-page/products/${item.image}.png`}
                              alt={`${item.name} ${item.brand}`}
                            />
                          </Link>
                        </span>
                      </div>
                      <div className="filter-item-specs">
                        <h3
                          className="bluetitle"
                          style={{ fontSize: 24, marginTop: 0 }}
                        >
                          {item.name}
                        </h3>
                        <p>
                          {!!item.therapy_fitness ? "Therapy & Fitness" : ""}{" "}
                          {!!item.recreation_swim_fitness
                            ? "Recreation & Swim & Fitness"
                            : ""}
                          {!!item.endurance_swim_training
                            ? " / Endurance "
                            : ""}
                          {!!item.fast_sprint ? " / Fast Sprint " : ""}
                        </p>
                        <Link
                          className="btn btn-info btn-sm upper"
                          to={`/products/${category_slug}/${_.lowerCase(
                            item.name
                          ).replace(/\s+/g, "")}`}
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <section className="homemore row">
          <div className="col-xs-12 col-md-4 " style={{ textAlign: "center" }}>
            <div>
              <Link to="/contact-us">
                <span>
                  <p>Found the perfect hot tub? Request pricing online.</p>
                </span>
                <img
                  loading="lazy"
                  src="/img/home-page/line-display/mpss-a.png"
                  alt="find the spa that's right for you!"
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
                <Link to="/contact-us">Get Pricing</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ShopSwimSpas;
