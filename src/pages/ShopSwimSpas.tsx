import "@/assets/css/tubfilter.css";
import MainLayout from "@/layouts/MainLayout";

const ShopSwimSpas = () => {
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
              <div
                className="col-xs-12 col-sm-6 col-lg-4 mix filter-item filter-therapy-1 filter-recreation-1 filter-endurance-0 filter-sprint-0 SwimSeries"
                data-price={5}
              >
                <div className="row filter-item-details">
                  <div className="col-xs-12">
                    <span className="tubwrap">
                      <a href="javascript:void(0)">
                        <img
                          alt="Swim Series"
                          className="img-responsive"
                          src="/img/home-page/products/TS11PS.png"
                        />
                      </a>
                    </span>
                  </div>
                  <div className="filter-item-specs">
                    <h3
                      className="bluetitle"
                      style={{ fontSize: 24, marginTop: 0 }}
                    >
                      TS11P
                    </h3>
                    <p>Therapy / Fitness / Recreation</p>
                    <a
                      className="btn btn-info btn-sm upper"
                      href="products/ts11p.html"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-lg-4 mix filter-item filter-therapy-0 filter-recreation-1 filter-endurance-0 filter-sprint-0 SwimSeries"
                data-price={5}
              >
                <div className="row filter-item-details">
                  <div className="col-xs-12">
                    <span className="tubwrap">
                      <a href="javascript:void(0)">
                        <img
                          alt=""
                          className="img-responsive"
                          src="/img/home-page/products/SS12GS.png"
                        />
                      </a>
                    </span>
                  </div>
                  <div className="filter-item-specs">
                    <h3
                      className="bluetitle"
                      style={{ fontSize: 24, marginTop: 0 }}
                    >
                      SS12
                    </h3>
                    <p>Therapy / Fitness / Recreation</p>
                    <a
                      className="btn btn-info btn-sm upper"
                      href="products/ss12.html"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-lg-4 mix filter-item filter-therapy-1 filter-recreation-0 filter-endurance-1 filter-sprint-1 SwimSeries"
                data-price={4}
              >
                <div className="row filter-item-details">
                  <div className="col-xs-12">
                    <span className="tubwrap">
                      <a href="javascript:void(0)">
                        <img
                          alt=""
                          className="img-responsive"
                          src="/img/home-page/products/ssp13.png"
                        />
                      </a>
                    </span>
                  </div>
                  <div className="filter-item-specs">
                    <h3
                      className="bluetitle"
                      style={{ fontSize: 24, marginTop: 0 }}
                    >
                      SSP13
                    </h3>
                    <p>Therapy / Fitness / Recreation</p>
                    <a
                      className="btn btn-info btn-sm upper"
                      href="products/ssp13.html"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-lg-4 mix filter-item filter-therapy-0 filter-recreation-1 filter-endurance-0 filter-sprint-0 SwimSeries"
                data-price={5}
              >
                <div className="row filter-item-details">
                  <div className="col-xs-12">
                    <span className="tubwrap">
                      <a href="javascript:void(0)">
                        <img
                          alt="Swim Series"
                          className="img-responsive"
                          src="/img/home-page/products/ss14.png"
                        />
                      </a>
                    </span>
                  </div>
                  <div className="filter-item-specs">
                    <h3
                      className="bluetitle"
                      style={{ fontSize: 24, marginTop: 0 }}
                    >
                      SS14
                    </h3>
                    <p>Therapy / Fitness / Recreation</p>
                    <a
                      className="btn btn-info btn-sm upper"
                      href="products/ss14.html"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-lg-4 mix filter-item filter-therapy-1 filter-recreation-1 filter-endurance-1 filter-sprint-1 SwimSeries"
                data-price={5}
              >
                <div className="row filter-item-details">
                  <div className="col-xs-12">
                    <span className="tubwrap">
                      <a href="javascript:void(0)">
                        <img
                          alt="Swim Series"
                          className="img-responsive"
                          src="/img/home-page/products/ss16.png"
                        />
                      </a>
                    </span>
                  </div>
                  <div className="filter-item-specs">
                    <h3
                      className="bluetitle"
                      style={{ fontSize: 24, marginTop: 0 }}
                    >
                      SS16
                    </h3>
                    <p>Therapy / Fitness / Recreation</p>
                    <a
                      className="btn btn-info btn-sm upper"
                      href="products/ss16.html"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xs-12 col-sm-6 col-lg-4 mix filter-item filter-therapy-1 filter-recreation-1 filter-endurance-0 filter-sprint-0 SwimSeries"
                data-price={5}
              >
                <div className="row filter-item-details">
                  <div className="col-xs-12">
                    <span className="tubwrap">
                      <a href="javascript:void(0)">
                        <img
                          alt="Swim Series"
                          className="img-responsive"
                          src="/img/home-page/products/ss19.png"
                        />
                      </a>
                    </span>
                  </div>
                  <div className="filter-item-specs">
                    <h3
                      className="bluetitle"
                      style={{ fontSize: 24, marginTop: 0 }}
                    >
                      SS19
                    </h3>
                    <p>Therapy / Fitness / Recreation</p>
                    <a
                      className="btn btn-info btn-sm upper"
                      href="products/ss19.html"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="homemore row">
          <div className="col-xs-12 col-md-4 " style={{ textAlign: "center" }}>
            <div>
              <a href="/contact-us.html">
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
                <a href="/contact-us.html">Get Pricing</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ShopSwimSpas;
