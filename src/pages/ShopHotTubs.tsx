import "@/assets/css/tubfilter.css";
import MainLayout from "@/layouts/MainLayout";
import { _TubsData } from "@/services/modules/data";
import _ from "lodash";
import mixitup from "mixitup";
import multifilter from "mixitup-multifilter";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ShopHotTubs = () => {
  useEffect(() => {
    var containerEl = document.querySelector(".filter-area");
    var brandFilter: HTMLSelectElement | null =
      document.querySelector(".brandFilter");
    var seatingFilter: HTMLSelectElement | null =
      document.querySelector(".seatingFilter");

    /*Get the # in the address bar, change it to a class, filter by that
      ex: filter.php#Healthy
      filter.php#filter-seating-1
      
      */
    var hash = window.location.hash;
    var noHash = hash.replace("#", ".");

    if (noHash == ".all" || noHash == "") {
      var noHash = "all";
    }

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

    /*Echo the filter class inside the demo span for testing*/
    /*document.getElementById("demo").innerHTML = noHash;*/

    if (brandFilter)
      brandFilter.addEventListener("change", function () {
        var brandSelector = brandFilter?.value;
        mixer.filter(brandSelector);
      });

    if (seatingFilter)
      seatingFilter.addEventListener("change", function () {
        var seatingSelector = seatingFilter?.value;
        mixer.filter(seatingSelector);
      });
  }, []);
  // let products = _TubsData;
  let products = _.filter(_TubsData, (item) => item.brand !== "Swim Series");

  return (
    <MainLayout
      title="Shop Hot Tubs by Brand, Size and Price"
      description="Shop all Gulfsouth Spas hot tubs, or filter products by brand, size and cost to find your perfect hot tub."
    >
      <div className="container maincontent">
        <div className="row" style={{ marginTop: 75 }}>
          <div className="col-md-3" />
          <div className="col-md-9">
            <h1>Shop Hot Tubs</h1>
            <p>
              With so many options, finding the perfect hot tub can feel
              overwhelming. Refining your search to only include the models that
              meet your size and budget is an excellent place to begin your hot
              tub buying journey.
            </p>
            <p>
              Shop all models, or narrow your search using the brand, size and
              price filters, to find hot tubs that fit your criteria. Select any
              spa to learn more about its unique features.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="controls col-md-3">
            <div className="row">
              <div className="col-sm-4 col-md-12">
                <fieldset data-filter-group="">
                  <h2>Hot Tub Brands</h2>
                  <select className="brandFilter form-control">
                    <option value="">All Brands</option>
                    <option value=".TridentSeries">Trident Series</option>
                    <option value=".NauticalSeries">Nautical Series</option>
                    <option value=".CoastalSeries">Coastal Series</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-sm-4 col-md-12">
                <fieldset data-filter-group="">
                  <h2>Number of People</h2>
                  <select className="seatingFilter form-control">
                    <option value="" selected disabled>
                      Select Seating Capacity
                    </option>
                    <option value="">All Seating</option>
                    {/*<option value=".filter-seating-1">1-3 Adults</option>*/}
                    <option value=".filter-seating-2">4-5 Adults</option>
                    <option value=".filter-seating-3">6-8 Adults</option>
                  </select>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row items filter-area animated fadeIn">
              {products.map((item, index) => {
                let category_slug = _.lowerCase(item.brand).replace(
                  /\s+/g,
                  "-"
                );
                return (
                  <div
                    className={`col-xs-12 col-sm-6 col-lg-4 mix filter-item filter-seating-${
                      item.seats == 4 || item.seats == 5 ? "2" : "3"
                    } filter-price-${item.price} ${_.upperFirst(
                      _.replace(item.brand, " ", "")
                    )}`}
                    data-price={item.price}
                    data-seating={item.seats}
                    data-name={item.name}
                    key={index}
                  >
                    <div className="row filter-item-details">
                      <div className="col-xs-6">
                        <span className="tubwrap">
                          <img
                            loading="lazy"
                            className="img-responsive"
                            src={`/img/home-page/products/${item.image}.png`}
                            alt={`${item.name} ${item.brand}`}
                          />
                        </span>
                      </div>
                      <div className="col-xs-6 filter-item-specs">
                        <h3
                          className="bluetitle"
                          style={{ fontSize: 24, marginTop: 0 }}
                        >
                          {item.name}
                        </h3>
                        <p>
                          <img
                            loading="lazy"
                            width="20px"
                            height="20px"
                            alt="Blue icon of person"
                            src="/img/icons/icon-person.png"
                          />{" "}
                          :{" "}
                          <span className="seatingNumber">
                            {" "}
                            {item.seats} Adults
                          </span>
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
          <div className="col-xs-12 col-md-4 ">
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
                  left: 0,
                  right: 0,
                  margin: "auto",
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

export default ShopHotTubs;
