import "@/assets/css/tubfilter.css";
import { HotTubsDataInterface, LoaderInterface } from "@/function";
import MainLayout from "@/layouts/MainLayout";
import _ from "lodash";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ShopHotTubs = () => {
  const { filter_price, filter_seat } = useLoaderData() as LoaderInterface;
  const Tubs = [
    {
      brand: "Getaway",
      name: "1151L SIDE 2023",
      seat: 5,
      image: "1151L SIDE 2023",
      price: 1,
    },
    {
      brand: "LH Series",
      name: "1151L TOP",
      seat: 5,
      image: "1151L TOP",
      price: 1,
    },
    {
      brand: "LH Series",
      name: "NS8 TOP",
      seat: 6,
      image: "NS8 TOP",
      price: 1,
    },
    {
      brand: "Getaway",
      name: "NS8L SILVER TOP",
      seat: 4,
      image: "NS8L SILVER TOP",
      price: 1,
    },
    {
      brand: "Getaway",
      name: "SS12 GS",
      seat: 4,
      image: "SS12 GS",
      price: 1,
    },
    {
      brand: "Getaway",
      name: "SS13 OVO PARTY SWIM SPA",
      seat: 3,
      image: "SS13 OVO PARTY SWIM SPA",
      price: 1,
    },
    {
      brand: "Getaway",
      name: "SS14 SWIM",
      seat: 5,
      image: "SS14 SWIM",
      price: 2,
    },
    {
      brand: "Clarity",
      name: "SS16 SWIM",
      seat: 5,
      image: "SS16 SWIM",
      price: 2,
    },
    {
      brand: "Clarity",
      name: "SS19 SWIM",
      seat: 5,
      image: "SS19 SWIM",
      price: 2,
    },
   /*  {
      brand: "Twilight",
      name: "TS 6.2",
      seat: 5,
      image: "ts_62",
      price: 3,
    },
    {
      brand: "Twilight",
      name: "TS 67.25",
      seat: 5,
      image: "ts_6725",
      price: 3,
    },
    {
      brand: "Clarity",
      name: "Balance 9",
      seat: 8,
      image: "balance-9",
      price: 4,
    },
    {
      brand: "Twilight",
      name: "TS 7.2",
      seat: 6,
      image: "ts_72",
      price: 4,
    },
    {
      brand: "Twilight",
      name: "TS 7.25",
      seat: 7,
      image: "ts_725",
      price: 4,
    },
    {
      brand: "Twilight",
      name: "TS 8.2",
      seat: 6,
      image: "ts_82",
      price: 4,
    },
    {
      brand: "Twilight",
      name: "TS 8.25",
      seat: 7,
      image: "ts_825",
      price: 4,
    },
    {
      brand: "MP Legend",
      name: "LSX MPL 700",
      seat: 5,
      image: "LSX_700",
      price: 5,
    },
    {
      brand: "MP Legend",
      name: "LSX MPL 800",
      seat: 6,
      image: "LSX_800",
      price: 5,
    },
    {
      brand: "MP Legend",
      name: "LSX MPL 850",
      seat: 7,
      image: "LSX_850",
      price: 5,
    },
    {
      brand: "MP Legend",
      name: "LSX MPL 900",
      seat: 8,
      image: "LSX_900",
      price: 5,
    }, */
  ] as HotTubsDataInterface[];
  const [tubsQuery, setTubsQuery] = useState(Tubs);
  const [searchBrand, setSearchBrand] = useState<string | null>(null);
  const [searchSeat, setSearchSeat] = useState<string>(filter_seat || "");
  const [searchPrice, setSearchPrice] = useState<string | null>(
    filter_price || null
  );
  const [searchSortOrder, setSearchSortOrder] = useState<
    "price:asc" | "price:desc" | "seat:asc" | "seat:desc" | ""
  >("");
  useEffect(() => {
    let query = tubsQuery;
    if (!!searchBrand || !!searchSeat || !searchPrice || !searchSortOrder) {
      query = _.filter(Tubs, (item) => {
        let [lowerBound, upperBound] = searchSeat?.split("-").map(Number);

        let brandsearch: boolean = !!searchBrand
          ? _.lowerCase(item.brand) === _.lowerCase(searchBrand || "")
          : true;
        let seatInRange: boolean = !!searchSeat
          ? _.inRange(Number(item.seat), lowerBound, upperBound + 1)
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
      setTubsQuery(Tubs);
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
                    <option value="MP Legend">MP Legend</option>
                    <option value="Twilight">Twilight</option>
                    <option value="Clarity">Clarity</option>
                    <option value="LH Series">LH Series</option>
                    <option value="Getaway">Getaway</option>
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
              <div className="col-sm-4 col-md-12">
                <fieldset data-filter-group="">
                  <h2>Price</h2>
                  <select
                    className="priceFilter form-control"
                    defaultValue={filter_price}
                    onChange={(e) => {
                      setSearchPrice(e.target.value);
                    }}
                  >
                    <option value="">All Prices</option>
                    <option
                      value="5"
                      selected={filter_price && filter_price.toString() === "5"}
                    >
                      $$$$${" "}
                    </option>
                    <option
                      value="4"
                      selected={filter_price && filter_price.toString() === "4"}
                    >
                      $$$${" "}
                    </option>
                    <option
                      value="3"
                      selected={filter_price && filter_price.toString() === "3"}
                    >
                      $$${" "}
                    </option>
                    <option
                      value="2"
                      selected={filter_price && filter_price.toString() === "2"}
                    >
                      $${" "}
                    </option>
                    <option
                      value="1"
                      selected={filter_price && filter_price.toString() === "1"}
                    >
                      $
                    </option>
                  </select>
                </fieldset>
              </div>
              <div className="col-sm-4 col-md-12">
                <h2>Sort Order</h2>
                <select
                  className="selectSort select-sort form-control"
                  onChange={(e) => {
                    setSearchSortOrder(
                      e.target.value as
                        | "price:asc"
                        | "price:desc"
                        | "seat:asc"
                        | "seat:desc"
                    );
                  }}
                >
                  <option value="price:asc">Price Ascending</option>
                  <option value="price:desc">Price Descending</option>
                  <option value="seat:asc">Seating Ascending</option>
                  <option value="seat:desc">Seating Descending</option>
                </select>
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
                  let category_slug =
                    item.brand == "MP Legend"
                      ? "legend"
                      : _.lowerCase(item.brand).replace(/\s+/g, "-");
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
                                srcSet={`/img/placeholder.png`}
                                type="image/png"
                              />
                              <img
                                loading="lazy"
                                className="img-responsive"
                                src={`/img/placeholder.png`}
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
                              {item.seat} Adults
                            </span>
                          </p>
                          <p>
                            <img
                              loading="lazy"
                              width="20px"
                              height="20px"
                              alt="Blue icon of a dollar"
                              src="/img/icons/icon-dollar.png"
                            />{" "}
                            :{" "}
                            <span className="dollars">
                              {"$".repeat(item.price)}
                            </span>
                          </p>
                          <Link
                            className="btn btn-info btn-sm upper"
                            to={`/${category_slug}/${_.lowerCase(
                              item.name
                            ).replace(/\s+/g, "-")}`}
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
              <Link to="javascript:void">
                <span>
                  <p>Found the perfect hot tub? Request pricing online.</p>
                </span>
                <img
                  loading="lazy"
                  src="/img/request-hot-tub-pricing.jpg"
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
                <Link to="javascript:void">Get Pricing</Link>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 ">
            <div>
              <Link to="javascript:void">
                <span>
                  <p>Compare the features of all Gulfsouth Spas hot tubs.</p>
                </span>
                <img
                  loading="lazy"
                  src="/img/compare-hot-tubs.jpg"
                  alt="Compare Hot Tubs"
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
                <Link to="javascript:void">Compare Hot Tubs</Link>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 ">
            <div>
              <Link to="javascript:void">
                <span>
                  <p style={{ color: "#00aad4" }}>
                    Use our tool to discover your new hot tub.
                  </p>
                </span>
                <img
                  loading="lazy"
                  src="/img/find-spa-no-text.jpg"
                  alt=""
                  title=""
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
                <Link to="javascript:void">Find a Hot Tub</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ShopHotTubs;
