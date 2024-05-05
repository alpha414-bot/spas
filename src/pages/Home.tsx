import MainLayout from "@/layouts/MainLayout";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Home = () => {
  return (
    <MainLayout
      title="Gulfsouth Spas"
      description="Gulfsouth Spas is an award-winning hot tub and swim spa manufacturer. All of our hot tub, swim spas and portable spas are full of top-of-the-line features and healing hydrotherapy."
    >
      <div>
        <div className="maincontent">
          <section id="cdnVideoHero">
            <div id="playerTextWrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div id="playerText">
                      <h1>Relaxation Redefined</h1>
                      <div
                        id="playerTextSubset"
                        style={{ bottom: "-13px !important" }}
                      >
                        <h2>
                          with America's finest hot tubs and swim spas, by
                          Gulfsouth Spas
                        </h2>
                        <div id="videoCTA">
                          <Link to="/contact-us"> Contact Us </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cdnVideoDtop">
              <img
                className="img-responsive"
                style={{ width: "100%", height: "100%" }}
                alt="Gulfsouth swim spas"
                src="/img/swimspas/widescreen-fallback.jpg"
                title=""
              />
            </div>
            <div className="cdnVideoMobile">
              <img
                className="img-responsive"
                alt="Gulfsouth swim spas"
                style={{ width: "100%", height: "100%" }}
                src="/img/swimspas/widescreen-fallback.jpg"
                title=""
              />
            </div>
          </section>
          <section className="bgGray">
            <div className="container">
              <div className="row">
                <div className="col-md-2" />
                <div className="col-md-8 text-center">
                  <div>
                    <h2 className="bluetitlelg">
                      Enjoy self-care daily in your backyard.
                    </h2>
                    <ul className="checkmarkList">
                      <li>
                        <img alt="checkmark" src="/img/checkmark.png" />
                        Relaxation Redefined
                      </li>
                      <li>
                        <img alt="checkmark" src="/img/checkmark.png" /> Get
                        Relief from Pain
                      </li>
                      <li>
                        <img alt="checkmark" src="/img/checkmark.png" />
                        Rediscover Family Time
                      </li>
                    </ul>
                    <p>
                      Creating your dream backyard oasis should be simple.
                      <br />
                      With the Gulfsouth Spas range of ultra-therapeutic hot
                      tubs hot tubs and swim spas, it is.
                    </p>
                  </div>
                </div>
                <div className="col-md-2" />
              </div>
            </div>
          </section>
          <section id="hotTubLines">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="bluetitlelg text-center">
                    3 Distinct lines of hot tubs:
                  </h2>
                </div>
                <div className="col-md-6">
                  <div className="hotTubLineWrapper legend">
                    <div className="threeQuarter">
                      <Link to="/category/trident-series">
                        <img
                          alt="Trident Series by Gulfsouth Spas"
                          src="/img/home-page/line-display/trident-tub.png"
                        />
                      </Link>
                    </div>
                    <div className="hotTubLineDescription">
                      <h3>Trident Series</h3>
                      <p>
                        Legendary performance for those who don't believe in
                        second best.
                      </p>
                      <div className="btn para">
                        <Link to="/category/trident-series">See More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hotTubLineWrapper twilight">
                    <div className="threeQuarter">
                      <Link to="/category/nautical-series">
                        <img
                          alt="Nautical series by Gulfsouth Spas"
                          src="/img/home-page/line-display/nautical-tub.png"
                        />
                      </Link>
                    </div>
                    <div className="hotTubLineDescription">
                      <h3>Nautical Series</h3>
                      <p>
                        Luxurious perfection designed for discriminating tastes.
                      </p>
                      <div className="btn para">
                        <Link to="/category/nautical-series">See More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hotTubLineWrapper clarity">
                    <div className="threeQuarter">
                      <Link to="/category/coastal-series">
                        <img
                          alt="Coastal Series by Gulfsouth Spas"
                          src="/img/home-page/line-display/coastal-tub.png"
                        />
                      </Link>
                    </div>
                    <div className="hotTubLineDescription">
                      <h3>Coastal Series</h3>
                      <p>
                        A stylish, modern approach to relaxation and wellness.
                      </p>
                      <div className="btn para">
                        <Link to="/category/coastal-series">See More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="swimSpaLines" className="bgGray">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="bluetitlelg text-center">Swim Spa Series</h2>
                </div>
                <div className="col-md-6">
                  <div className="swimSpaLineWrapper mpss">
                    <div className="threeQuarter">
                      <Link to="/category/swim-series">
                        <img
                          alt="Swim series by Gulfsouth Spas"
                          src="/img/home-page/line-display/swim-spa.png"
                        />
                      </Link>
                    </div>
                    <div className="swimSpaLineDescription">
                      <h3>Swim Spas</h3>
                      <p>Jetted swim spa for training, fitness, and therapy.</p>
                      <div className="btn para">
                        <Link to="/category/swim-series">See More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="feltItToo parallax">
            <div className="blueOverlay" />
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="feltItTooText">
                    <h4>Relaxation Redefined</h4>
                    {/*<h5>We've felt it too.</h5>*/}
                    <p>
                      At Gulfsouth Spas, we understand that your hot tub or swim
                      spa is specific to your needs.
                    </p>
                    <p>
                      As America best hot tub and swim spa brand, our purpose
                      goes beyond making spas, it is to offer a life-changing
                      product and to build these true durable friendships: with
                      our employees, with our suppliers, with our customers, but
                      mostly, for the consumer.
                    </p>
                    <br />
                    <br />
                    <div className="btn para" style={{ width: 175 }}>
                      <Link to="/contact-us">Contact Us</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="bigList">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="text-center bluetitlelg">
                    Finding your perfect Gulfsouth Spas hot tub or swim spa is
                    simple.
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2" />
                <div className="col-md-8">
                  <ol className="bigNumberList">
                    <li>
                      <h4>Contact Gulfsouth Spas</h4>
                      <p>
                        Explore our full range of premium spas with confidence
                        as your local dealer answers any questions you may have.
                      </p>
                    </li>
                    <li>
                      <h4>Choose Your Perfect Spa</h4>
                      <p>
                        Your Gulfsouth Spas dealer is there to help as you
                        choose the model that is right for your lifestyle and
                        space.
                      </p>
                    </li>
                    <li>
                      <h4>Live Better</h4>
                      <p>
                        Enjoy better daily living from the comfort of your own
                        home with Gulfsouth Spas
                      </p>
                    </li>
                  </ol>
                </div>
                <div className="col-md-2" />
              </div>
            </div>
          </section>
          <section className="parallax experience">
            <div className="experienceOverlay" />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="parallaxText">
                    <h2>Gulfsouth Spas, Relaxation Redefined</h2>
                    <h3>The relaxation you deserve.</h3>
                    <p>
                      Quality construction and innovative <br />
                      designs make Gulfsouth Spas hot tubs
                      <br />
                      and swim spas easy to enjoy and <br />
                      easy to own.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*<section class="bgGradient">*/}
          <section className="bgGray">
            <div className="container">
              <div className="row">
                <div className="parallaxOverlap">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-xs-4 col-md-12">
                        <div>
                          <img
                            className="img-responsive imgctr"
                            alt="Bio magnetic therapy"
                            src="/img/Intouch.png"
                          />
                        </div>
                      </div>
                      <div className="col-xs-8 col-md-12">
                        <h3 className="bluetitle">
                          <span>In.Touch Features</span>
                        </h3>
                        <p>
                          Controll all functions of your spa from your iOS or
                          Android smartphone or tablet and the In.touch.2® app.
                          Use predefined spa experiences or customize your own.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-xs-4 col-md-12">
                        <div>
                          <img
                            className="img-responsive imgctr"
                            alt="EcoPur Charge Filtration System"
                            src="/img/Stream.png"
                          />
                        </div>
                      </div>
                      <div className="col-xs-8 col-md-12">
                        <h3 className="bluetitle">
                          <span>Stream Features</span>
                        </h3>
                        <p>
                          Streamed from your spa, your favorite music never
                          sounded so good! in.stream 2 audio station is a
                          compact, rugged and splash proof all in one outdoor
                          audio system.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-xs-4 col-md-12">
                        <div>
                          <img
                            className="img-responsive imgctr"
                            alt="Nonslip, Comfort Floor System"
                            src="/img/Digitalized.png"
                          />
                        </div>
                      </div>
                      <div className="col-xs-8 col-md-12">
                        <h3 className="bluetitle">
                          <span>Digital Features</span>
                        </h3>
                        <p>
                          No matter what kind of Digital Topside Control you
                          have on your GulfSouth Spa, It will be easy to use and
                          manage with a different variety of Pumps, Packs and
                          Digital Topsides.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-xs-4 col-md-12">
                        <div>
                          <img
                            className="img-responsive imgctr"
                            alt="Wave technology propulsion system"
                            src="/img/Engineering.png"
                          />
                        </div>
                      </div>
                      <div className="col-xs-8 col-md-12">
                        <h3 className="bluetitle">
                          <span>Engineering Features</span>
                        </h3>
                        <p>
                          At GulfSouth Spa we have a knowledgeable Engineering
                          Department, that thrives to bring the consumer the
                          very best up to date equipment available.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <img
                    className="img-responsive"
                    alt="swim spa set into a deck"
                    src="/img/bypg.jpg"
                  />
                </div>
                <div className="col-md-5">
                  <div id="homePlanningTextWrap">
                    <div className="verticallyCenter">
                      <div className="doublebuttons">
                        <div
                          className="btn para"
                          style={{ width: "350px !important" }}
                        >
                          <Link to="/contact-us">Contact Us</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};
export default Home;
