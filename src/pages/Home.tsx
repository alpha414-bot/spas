import MainLayout from "@/layouts/MainLayout";
import { useNavigation } from "react-router-dom";

const Home = () => {
  const navigation = useNavigation();
  return (
    <MainLayout
      title="Hot Tubs, Swim Spas and Portable Spas by Master Spas"
      description="Master Spas is an award-winning hot tub and swim spa manufacturer. All of our hot tub, swim spas and portable spas are full of top-of-the-line features and healing hydrotherapy."
    >
      <div>
        {/* <div>
          I am loa
        </div> */}
        <div className="maincontent">
          <div id="promoBanner">
            <div className="container">
              <div className="row">
                <div className="col-sm-7"></div>
                <div className="col-sm-5" id="promoColumn">
                  <form
                    className="form-inline"
                    id="promoCode"
                    name="promoCode"
                    action=""
                    method="post"
                  >
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Have a Promo Code?"
                        type="text"
                        name="code"
                        id="code"
                      />
                      <input
                        className="btn btn-default"
                        value="Go"
                        type="submit"
                        name="submit"
                        id="submit"
                      />
                      <div
                        id="error_message"
                        className="response alert alert-warning"
                      >
                        Examples
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <section id="cdnVideoHero">
            <div id="playerTextWrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div id="playerText">
                      <h1>Create your dream backyard oasis</h1>
                      <div id="playerTextSubset">
                        <h2>
                          with America's finest hot tubs and swim spas, by
                          Master Spas&reg;
                        </h2>
                        <div id="videoCTA">
                          <a href="find-a-dealer">
                            Find your local dealer and get pricing
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <video className="cdnVideoDtop" autoPlay loop playsInline muted>
              <source
                src="https://michaelphelpsswimspa.com/_video/masterspas/home2023/Homepage_BannerVid_HD(2023)(Short)(V2.1)(vbr.6.15).mp4"
                type="video/mp4"
              />
              <img
                className="img-responsive"
                alt="Michael Phelps and family in a master spas swim spa"
                src="https://michaelphelpsswimspa.com/_video/masterspas/home2021/widescreen-fallback.jpg"
                title=""
              />
            </video>
            <video className="cdnVideoMobile" autoPlay loop playsInline muted>
              <source
                src="https://michaelphelpsswimspa.com/_video/masterspas/home2023/Homepage_BannerVid_HD_Vert(2023)(Short)(V2.1)(vbr.4.12).mp4"
                type="video/mp4"
              />
              <img
                className="img-responsive"
                alt="Michael Phelps and family in a master spas swim spa"
                src="img/swimspas/video-preview.jpg"
                title=""
              />
            </video>
          </section>

          <section className="bgGray">
            <div className="container">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 text-center">
                  <div>
                    <h2 className="bluetitlelg">
                      Daily self-care on your doorstep.
                    </h2>
                    <ul className="checkmarkList">
                      <li>
                        <img
                          alt="checkmark"
                          src="https://masterspascdn.com/img/checkmark.png"
                        />{" "}
                        Enjoy Pure Relaxation
                      </li>
                      <li>
                        <img
                          alt="checkmark"
                          src="https://masterspascdn.com/img/checkmark.png"
                        />{" "}
                        Get Relief from Pain
                      </li>
                      <li>
                        <img
                          alt="checkmark"
                          src="https://masterspascdn.com/img/checkmark.png"
                        />
                        Reinvent Family Time
                      </li>
                    </ul>
                    <p>
                      Creating your dream backyard oasis should be simple.{" "}
                      <br />
                      With the Master Spas&reg; range of ultra-therapeutic hot
                      tubs hot tubs and swim spas, it is.
                    </p>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </section>

          <section id="hotTubLines">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="bluetitlelg text-center">
                    4 Distinct lines of hot tubs:
                  </h2>
                </div>
                <div className="col-md-6">
                  <div className="hotTubLineWrapper legend">
                    <div className="threeQuarter">
                      <a href="legend-series/">
                        <img
                          alt="Michael Phelps Legend Series Hot Tub"
                          src="https://masterspascdn.com/img/home-page/line-display/legend-tub.png"
                        />
                      </a>
                    </div>
                    <div className="hotTubLineDescription">
                      <h3>Michael Phelps Legend Series</h3>
                      <p>
                        Legendary performance for those who don't believe in
                        second best.
                      </p>
                      <div className="btn para">
                        <a href="legend-series/">See More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hotTubLineWrapper twilight">
                    <div className="threeQuarter">
                      <a href="twilight/">
                        <img
                          alt="Twilight Series Hot Tub"
                          src="https://masterspascdn.com/img/home-page/line-display/twilight-tub.png"
                        />
                      </a>
                    </div>
                    <div className="hotTubLineDescription">
                      <h3>Twilight Series</h3>
                      <p>
                        Luxurious perfection designed for discriminating tastes.
                      </p>
                      <div className="btn para">
                        <a href="twilight/">See More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hotTubLineWrapper clarity">
                    <div className="threeQuarter">
                      <a href="clarity/">
                        <img
                          alt="Clarity Spas Hot Tub"
                          src="https://masterspascdn.com/img/home-page/line-display/clarity-tub.png"
                        />
                      </a>
                    </div>
                    <div className="hotTubLineDescription">
                      <h3>Clarity Spas</h3>
                      <p>
                        A stylish, modern approach to relaxation and wellness.
                      </p>
                      <div className="btn para">
                        <a href="clarity/">See More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hotTubLineWrapper getaway">
                    <div className="threeQuarter">
                      <a href="getaway/">
                        <img
                          alt="Getaway Hot Tub"
                          src="https://masterspascdn.com/img/home-page/line-display/getaway-tub.png"
                        />
                      </a>
                    </div>
                    <div className="hotTubLineDescription">
                      <h3>Getaway Hot Tubs</h3>
                      <p>
                        Your passport to relaxation, offering quality and value.
                      </p>
                      <div className="btn para">
                        <a href="getaway/">See More</a>
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
                  <h2 className="bluetitlelg text-center">
                    2 Premium lines of swim spas:
                  </h2>
                </div>
                <div className="col-md-6">
                  <div className="swimSpaLineWrapper h2x">
                    <div className="threeQuarter">
                      <a href="https://h2xswimspa.com/">
                        <img
                          alt="H2X Fitness Swim Spa"
                          src="https://masterspascdn.com/img/home-page/line-display/h2x-spa.png"
                        />
                      </a>
                    </div>
                    <div className="swimSpaLineDescription">
                      <h3>H2X Fitness Swim Spas</h3>
                      <p>Jetted swim spa for training, fitness, and therapy.</p>
                      <div className="btn para">
                        <a href="https://h2xswimspa.com/">See More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="swimSpaLineWrapper mpss">
                    <div className="threeQuarter">
                      <a href="https://michaelphelpsswimspa.com">
                        <img
                          alt="Michael Phelps Signature swim spa"
                          src="https://masterspascdn.com/img/home-page/line-display/mpss-spa.png"
                        />
                      </a>
                    </div>
                    <div className="swimSpaLineDescription">
                      <h3>Michael Phelps Signature Swim Spas</h3>
                      <p>
                        Propulsion swim spas with a powerful, smooth current.
                      </p>
                      <div className="btn para">
                        <a href="https://michaelphelpsswimspa.com">See More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="awards">
            <h4 className="text-center bluetitlelg">
              Master Spas&reg; is an award winning company you can trust.
            </h4>
            <a href="/awards#bba">
              <span>
                <picture>
                  <source
                    srcSet="https://masterspascdn.com/img/bbb2.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="https://masterspascdn.com/img/bbb2.png"
                    type="image/png"
                  />
                  <img
                    src="https://masterspascdn.com/img/bbb2.png"
                    alt="Better Business Bureau A+ Accredidation"
                  />
                </picture>
              </span>
            </a>
            <a href="/awards#certified">
              <span>
                <picture>
                  <source
                    srcSet="https://masterspascdn.com/img/spa-certified2.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="https://masterspascdn.com/img/spa-certified2.png"
                    type="image/png"
                  />
                  <img
                    src="https://masterspascdn.com/img/spa-certified2.png"
                    alt="Master Spas is a Spa Certified Manufacturer"
                  />
                </picture>
              </span>
            </a>
            <a href="/awards#torch">
              <span>
                <picture>
                  <source
                    srcSet="https://masterspascdn.com/img/torch2.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="https://masterspascdn.com/img/torch2.png"
                    type="image/png"
                  />
                  <img
                    src="https://masterspascdn.com/img/torch2.png"
                    alt="Master Spas is a Better Business Bureau Torch Award for Business Ethics Recipient"
                  />
                </picture>
                <p>
                  Torch <br /> Award
                </p>
              </span>
            </a>
            <a href="/awards#inspire">
              <span>
                <picture>
                  <source
                    srcSet="https://masterspascdn.com/img/inspire2.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="https://masterspascdn.com/img/inspire2.png"
                    type="image/png"
                  />
                  <img
                    src="https://masterspascdn.com/img/inspire2.png"
                    alt="Master Spas is an Inspire Award Winner"
                  />
                </picture>

                <p>
                  Inspire <br /> Award
                </p>
              </span>
            </a>
            <a href="/awards#ernst">
              <span>
                <picture>
                  <source
                    srcSet="https://masterspascdn.com/img/ernst2.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="https://masterspascdn.com/img/ernst2.png"
                    type="image/png"
                  />
                  <img
                    src="https://masterspascdn.com/img/ernst2.png"
                    alt="Master Spas is an Ernst and Young Award Winner"
                  />
                </picture>
                <p>
                  Ernst &amp; Young <br /> Entrepreneur <br /> of the year
                </p>
              </span>
            </a>
            <a href="/awards#ihta">
              <span>
                <picture>
                  <source
                    srcSet="https://masterspascdn.com/img/apsp2.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="https://masterspascdn.com/img/apsp2.png"
                    type="image/png"
                  />
                  <img
                    src="https://masterspascdn.com/img/apsp2.png"
                    alt="The Association of Pool & Spa Professionals and Indiana Hot Tub Association"
                  />
                </picture>
              </span>
            </a>
            <br />
            <br />
          </section>
          <section className="feltItToo parallax">
            <div className="mobile blueOverlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="feltItTooText">
                    <h4>
                      That longing for your own backyard oasis to relax and
                      unwind in?
                    </h4>
                    <h5>We've felt it too.</h5>
                    <p>
                      At Master Spas&trade;, we understand that your hot tub or
                      swim spa has to meet your unique needs.
                    </p>
                    <p>
                      As America's largest hot tub and swim spa manufacturer,
                      we've been supplying an unrivaled range of premium home
                      hydrotherapy solutions to customers like you for three
                      decades. Whether you are looking for relief from pain,
                      pure relaxation, a therapeutic exercise aide, or to
                      reinvent time with family, we have a hot tub or swim spa
                      that will surpass your expectations.
                    </p>
                    <br />
                    <br />
                    <div className="btn para" style={{ width: "175px" }}>
                      <a href="/find-my-spa/">Find my spa quiz</a>
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
                    Finding your perfect Master Spas&reg; hot tub or swim spa is
                    simple.
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <ol className="bigNumberList">
                    <li>
                      <h4>Find Your Master Spas&reg; Dealer</h4>
                      <p>
                        Explore our full range of premium spas with confidence
                        as your local dealer answers any questions you may have.
                      </p>
                    </li>
                    <li>
                      <h4>Choose Your Perfect Spa</h4>
                      <p>
                        Your Master Spas&reg; dealer is there to help as you
                        choose the model that is right for your lifestyle and
                        space.{" "}
                      </p>
                    </li>
                    <li>
                      <h4>Live Better</h4>
                      <p>
                        Enjoy better daily living from the comfort of your own
                        home with Master Spas&reg;
                      </p>
                    </li>
                  </ol>
                </div>
                <div className="col-md-2"></div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="doublebuttons">
                    <div className="btn para">
                      <a href="find-a-dealer">Find a Dealer</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="parallax experience">
            <div className="experienceOverlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="parallaxText">
                    <h2>Experience the Master Spas&reg; difference.</h2>
                    <h3>
                      You'll wonder how you ever lived <br /> without one.
                    </h3>
                    <p>
                      Quality construction and innovative <br />
                      designs make Master Spas hot tubs
                      <br />
                      and swim spas easy to enjoy and <br />
                      easy to own.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bgGradient">
            <div className="container">
              <div className="row">
                <div className="parallaxOverlap">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-xs-4 col-md-12">
                        <a href="/hot-tub-features/bio-magnetic-therapy">
                          <img
                            className="img-responsive imgctr"
                            alt="Bio magnetic therapy"
                            src="https://masterspascdn.com/img/home-magnetic-therapy.jpg"
                          />
                        </a>
                      </div>
                      <div className="col-xs-8 col-md-12">
                        <h3 className="bluetitle">
                          <a href="/hot-tub-features/bio-magnetic-therapy">
                            Biomagnetic Therapy System
                          </a>
                        </h3>
                        <p>
                          Applies magnetic therapy to pressure points on the
                          neck and back. Increases blood flow, improves
                          circulation, and reduces swelling.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-xs-4 col-md-12">
                        <a href="/hot-tub-filter">
                          <img
                            className="img-responsive imgctr"
                            alt="EcoPur&reg; Charge Filtration System"
                            src="https://masterspascdn.com/img/home-eco-pur-filtration.jpg"
                          />
                        </a>
                      </div>
                      <div className="col-xs-8 col-md-12">
                        <h3 className="bluetitle">
                          <a href="/hot-tub-filter">
                            EcoPur&reg; Charge Filtration System
                          </a>
                        </h3>
                        <p>
                          Inspired by nature, our water filtration system
                          utilizes copper and zinc to purify water so that it is
                          crystal clear and fresh.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-xs-4 col-md-12">
                        <a
                          href="https://michaelphelpsswimspa.com/features-nonslip-floor-system"
                          target="_blank"
                        >
                          <img
                            className="img-responsive imgctr"
                            alt="Nonslip, Comfort Floor System"
                            src="https://masterspascdn.com/img/home-nonslip-floor-system.jpg"
                          />
                        </a>
                      </div>
                      <div className="col-xs-8 col-md-12">
                        <h3 className="bluetitle">
                          <a
                            href="https://michaelphelpsswimspa.com/features-nonslip-floor-system"
                            target="_blank"
                          >
                            Nonslip, Comfort Floor System
                          </a>
                        </h3>
                        <p>
                          Walk, jog, and exercise in the water without the need
                          for water shoes. The Nonslip, Comfort Floor System
                          prevents slips and provides a comfortable, cushioned
                          surface.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-xs-4 col-md-12">
                        <a
                          href="https://michaelphelpsswimspa.com/features-wave_technology"
                          target="_blank"
                        >
                          <img
                            className="img-responsive imgctr"
                            alt="Wave technology propulsion system"
                            src="https://masterspascdn.com/img/home-propulsion.jpg"
                          />
                        </a>
                      </div>
                      <div className="col-xs-8 col-md-12">
                        <h3 className="bluetitle">
                          <a
                            href="https://michaelphelpsswimspa.com/features-wave_technology"
                            target="_blank"
                          >
                            Wave Propulsion&reg; System
                          </a>
                        </h3>
                        <p>
                          Creates a deep and wide current of pure water flow
                          with virtually no turbulence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="doublebuttons">
                      <div className="btn para">
                        <a href="find-a-dealer">Find a Dealer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bgGray">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="bluetitlelg text-center">Spa Spotlight</h2>
                </div>
              </div>
            </div>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
              style={{ marginTop: "25px" }}
            >
              <div className="carousel-inner">
                <div className="item active">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <h3>H2X Challenger 15D</h3>
                        <div
                          data-bv-show="inline_rating"
                          data-bv-product-id="challenger-15d"
                          data-bv-redirect-url="https://www.h2xswimspa.com/swim-spas/challenger-series/challenger-15-d"
                        ></div>
                        <p>
                          The Challenger 15 D features a large uninhibited area
                          that is perfect for swimming, exercise, and family
                          fun.
                        </p>
                        <div className="doublebuttons dtop">
                          <div className="btn para">
                            <a href="https://www.h2xswimspa.com/swim-spas/challenger-series/challenger-15-d">
                              See Details
                            </a>
                          </div>
                        </div>
                        <br />
                      </div>
                      <div className="col-md-8">
                        <div
                          className="spotlightVideo"
                          style={{
                            backgroundImage:
                              "url('https://i1.ytimg.com/vi/F_w8renTAl8/sddefault.jpg')",
                          }}
                        >
                          <a
                            href="https://www.youtube.com/watch?v=F_w8renTAl8"
                            data-poster=""
                          >
                            <span></span>
                          </a>
                        </div>
                        <div className="doublebuttons mobile">
                          <div className="btn para">
                            <a href="https://www.h2xswimspa.com/swim-spas/challenger-series/challenger-15-d">
                              See Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <h3>Michael Phelps Legend Series LSX 800</h3>
                        <div
                          data-bv-show="inline_rating"
                          data-bv-product-id="lsx-800"
                          data-bv-redirect-url="https://www.masterspas.com/legend-series/lsx-800-hot-tub"
                        ></div>
                        <p>
                          This hot tub was inspired by the best so you can feel
                          your best. Designed with premium features for
                          exceptional hydrotherapy.
                        </p>
                        <div className="doublebuttons dtop">
                          <div className="btn para">
                            <a href="legend-series/lsx-800-hot-tub">
                              See Details
                            </a>
                          </div>
                        </div>
                        <br />
                      </div>
                      <div className="col-md-8">
                        <div
                          className="spotlightVideo"
                          style={{
                            backgroundImage:
                              "url('https://i1.ytimg.com/vi/WCuDGEeX2u0/sddefault.jpg')",
                          }}
                        >
                          <a
                            href="https://www.youtube.com/watch?v=WCuDGEeX2u0"
                            data-poster=""
                          >
                            <span></span>
                          </a>
                        </div>
                        <div className="doublebuttons mobile">
                          <div className="btn para">
                            <a href="legend-series/lsx-800-hot-tub">
                              See Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <h3>Twilight Series 8.2</h3>
                        <div
                          data-bv-show="inline_rating"
                          data-bv-product-id="ts-8_2"
                          data-bv-redirect-url="https://www.masterspas.com/twilight/ts-82"
                        ></div>
                        <p>
                          Roomy and comfortable, this hot tub is recognized for
                          its jet power and seating versatility &mdash;
                          including a contoured lounger.
                        </p>
                        <div className="doublebuttons dtop">
                          <div className="btn para">
                            <a href="twilight/ts-82">See Details</a>
                          </div>
                        </div>
                        <br />
                      </div>
                      <div className="col-md-8">
                        <div
                          className="spotlightVideo"
                          style={{
                            backgroundImage:
                              "url('https://i1.ytimg.com/vi/hf1dGlFs7w8/sddefault.jpg')",
                          }}
                        >
                          <a
                            href="https://www.youtube.com/watch?v=hf1dGlFs7w8"
                            data-poster=""
                          >
                            <span></span>
                          </a>
                        </div>
                        <div className="doublebuttons mobile">
                          <div className="btn para">
                            <a href="twilight/ts-82">See Details</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="left carousel-control"
                href="#myCarousel"
                data-slide="prev"
              >
                <span className="glyphicon glyphicon-chevron-left fa fa-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control"
                href="#myCarousel"
                data-slide="next"
              >
                <span className="glyphicon glyphicon-chevron-right fa fa-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </section>
          <section id="overviewTestimonial">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="bluetitlelg text-center">
                    See what our customers are saying
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="testimonial">
                    <div className="stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h4>Fully customizable</h4>
                    <p className="italic">
                      This hot tub is like no other I have ever been in. I love
                      that you can control the flow of water and direction of
                      the jets. I move from seat to seat for a full body
                      massage!
                      <br />
                      &mdash; Helen, Illinois
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="testimonial">
                    <div className="stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h4>So therapeutic</h4>
                    <p className="italic">
                      Our hot tub has brought so much joy & relaxation! My
                      aching body so appreciates the time spent in this heaven.
                      We look forward to each day of pure joy!
                      <br />
                      &mdash; Kay, Arizona
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="testimonial">
                    <div className="stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <h4>'No longer a dream but a reality'</h4>
                    <p className="italic">
                      This really is the best purchase I ever made. I can swim
                      day or night, and I love the water. It has wonderful
                      accessories that can allow me to get total fitness.
                      <br />
                      &mdash; Rita B., Tennessee
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="doublebuttons">
                    <div className="btn para">
                      <a href="find-a-dealer">Find My Dealer</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="homePlanningCTA">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <img
                    className="img-responsive"
                    alt="swim spa set into a deck"
                    src="https://masterspascdn.com/img/bypg.jpg"
                  />
                </div>
                <div className="col-md-5">
                  <div id="homePlanningTextWrap">
                    <div className="verticallyCenter">
                      <h6 className="bluetitlelg">
                        The 5 Secrets to Creating your Perfect Backyard Oasis
                      </h6>
                      <p>
                        Your essential guide to planning for the installation of
                        your Master Spas hot tub or swim spa.
                      </p>
                      <div className="doublebuttons">
                        <div className="btn para">
                          <a href="backyard-oasis-guide">Download Now</a>
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
