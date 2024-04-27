import "@/assets/css/tubfilter.css";
import { LoaderInterface, TubBrandType } from "@/function";
import MainLayout from "@/layouts/MainLayout";
import { _TubsData } from "@/services/modules/data";
import _ from "lodash";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ShopHotTubs = () => {
  const { filter_price, filter_seat } = useLoaderData() as LoaderInterface;
  const BrandData: TubBrandType[] = [
    "Nautical Series",
    "Coastal Series",
    "Trident Series",
  ];

  const [tubsQuery, setTubsQuery] = useState(_TubsData);
  const [searchBrand, setSearchBrand] = useState<string | null>(null);
  const [searchSeat, setSearchSeat] = useState<string>(filter_seat || "");
  const [searchPrice, setSearchPrice] = useState<string | null>(
    filter_price || null
  );
  const [searchSortOrder] = useState<
    "price:asc" | "price:desc" | "seat:asc" | "seat:desc" | ""
  >("");
  useEffect(() => {
    let query = tubsQuery;
    if (!!searchBrand || !!searchSeat || !searchPrice || !searchSortOrder) {
      query = _.filter(_TubsData, (item) => {
        let [lowerBound, upperBound] = searchSeat?.split("-").map(Number);

        let brandsearch: boolean = !!searchBrand
          ? _.lowerCase(item.brand) === _.lowerCase(searchBrand || "")
          : true;
        let seatInRange: boolean = !!searchSeat
          ? _.inRange(Number(item.seats), lowerBound, upperBound + 1)
          : true;
        let priceEqui: boolean = !!searchPrice
          ? Number(item.price) === Number(searchPrice)
          : true;

        return brandsearch && seatInRange && priceEqui;
      });
      if (!!searchSortOrder) {
        const [sortBy, sortOrder] = searchSortOrder.split(":");
        console.log(searchSortOrder, sortBy, sortOrder);
        query = _.orderBy(query, sortBy, sortOrder as "asc" | "desc");
      }

      setTubsQuery(query);
    } else {
      setTubsQuery(_TubsData);
    }
  }, [searchBrand, searchSeat, searchSeat, searchPrice, searchSortOrder]);
  useEffect(() => {
    setSearchPrice(filter_price);
    setSearchSeat(filter_seat);
  }, [filter_price, filter_seat]);
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
              spa to learn more about its unique features.{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="controls col-md-3">
            <div className="row">
              <div className="col-sm-4 col-md-12">
                <fieldset data-filter-group="">
                  <h2>Hot Tub Brands</h2>
                  <select
                    className="brandFilter form-control"
                    onChange={(e) => {
                      setSearchBrand(e.target.value);
                    }}
                  >
                    <option value="">All Brands</option>
                    {BrandData.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </fieldset>
              </div>
              <div className="col-sm-4 col-md-12">
                <fieldset data-filter-group="">
                  <h2>Number of People</h2>
                  <select
                    className="seatingFilter form-control"
                    defaultValue={filter_seat}
                    onChange={(e) => {
                      setSearchSeat(e.target.value);
                    }}
                  >
                    <option value="">All Seating</option>
                    <option value="1-3">1-3 Adults</option>
                    <option value="4-5">4-5 Adults</option>
                    <option value="6-8">6-8 Adults</option>
                  </select>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            {(tubsQuery?.length == 0 && (
              <div className="row" id="not_matches">
                <div className="col-md-12">
                  <h2>No Results</h2>
                  <p>
                    It looks like your search criteria did not return any
                    results. Try changing your search parameters.
                  </p>
                </div>
              </div>
            )) || (
              <div className="row items filter-area animated fadeIn">
                {tubsQuery.map((item, index) => {
                  let category_slug = _.lowerCase(item.brand).replace(
                    /\s+/g,
                    "-"
                  );
                  // let category_slug =
                  //   item.brand == "MP Legend"
                  //     ? "legend"
                  //     : _.lowerCase(item.brand).replace(/\s+/g, "-");
                  return (
                    <div
                      className={`col-xs-12 col-sm-6 col-lg-4 mix filter-item filter-seating-2 filter-price-1 ${item.brand} Hot Tubs`}
                      key={index}
                    >
                      <div className="row filter-item-details">
                        <div className="col-xs-6">
                          <span className="tubwrap">
                            <picture>
                              <source
                                srcSet={`/img/home-page/products/${item.image}.png`}
                                type="image/png"
                              />
                              <img
                                loading="lazy"
                                className="img-responsive"
                                src={`/img/home-page/products/${item.image}.png`}
                                alt={`${item.name} ${item.brand}`}
                              />
                            </picture>
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
            )}
          </div>
        </div>
        <section className="homemore row">
          <div className="col-xs-12 col-md-4 ">
            <div>
              <a href="/contact-us">
                <span>
                  <p>Found the perfect hot tub? Request pricing online.</p>
                </span>
                <img
                  loading="lazy"
                  src="/img/home-page/line-display/mpss-a.png"
                  alt="find the spa that's right for you!"
                />
              </a>
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
                <a href="/contact-us">Get Pricing</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ShopHotTubs;
