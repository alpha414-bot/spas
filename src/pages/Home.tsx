import { CustomSliderArrowType } from "@/function";
import MainLayout from "@/layouts/MainLayout";
import { Link } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Home = () => {
  const slider_settings: Settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 25000,
    // autoplaySpeed: 500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const CustomSliderArrow: React.FC<CustomSliderArrowType> = ({
    type,
    classes,
    svgClassName = "w-5 h-5 text-gray-700",
    onClick,
    style,
    ...rest
  }) => {
    return (
      <Link
        to="javascript:void"
        {...rest}
        onClick={onClick}
        className={`carousel-control ${type == "prev" ? "left" : "right"}`}
        style={{ zIndex: "9999" }}
      >
        <span
          className={`glyphicon fa ${
            type == "prev"
              ? "glyphicon-chevron-left fa-chevron-left"
              : "glyphicon-chevron-right fa-chevron-right"
          }`}
        ></span>
        <span className="sr-only">{type == "prev" ? "Previous" : "Next"}</span>
      </Link>
    );
  };
  return (
    <MainLayout
      title="Gulfsouth Spas"
      description="Gulfsouth Spas is an award-winning hot tub and swim spa manufacturer. All of our hot tub, swim spas and portable spas are full of top-of-the-line features and healing hydrotherapy."
    >
      <div>
        {/* <div>
          I am loa
        </div> */}
        <div className="maincontent">
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
                          Gulfsouth Spas
                        </h2>
                        <div id="videoCTA">
                          <Link to="javascript:void">
                            Find your local dealer and get pricing
                          </Link>
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
                alt="Michael Phelps and family in a Gulfsouth spas swim spa"
                src="/img/swimspas/widescreen-fallback.jpg"
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
                alt="Michael Phelps and family in a Gulfsouth spas swim spa"
                src="/img/swimspas/video-preview.jpg"
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
                        <img alt="checkmark" src="/img/checkmark.png" /> Enjoy
                        Pure Relaxation
                      </li>
                      <li>
                        <img alt="checkmark" src="/img/checkmark.png" /> Get
                        Relief from Pain
                      </li>
                      <li>
                        <img alt="checkmark" src="/img/checkmark.png" />
                        Reinvent Family Time
                      </li>
                    </ul>
                    <p>
                      Creating your dream backyard oasis should be simple.{" "}
                      <br />
                      With the Gulfsouth Spas&reg; range of ultra-therapeutic hot
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
                    3 Distinct lines of hot tubs:
                  </h2>
                </div>
                <div className="col-md-6">
                  <div className="hotTubLineWrapper legend">
                    <div className="threeQuarter">
                      <Link to="javascript:void">
                        <img
                          alt="Michael Phelps Legend Series Hot Tub"
                          src="/img/home-page/line-display/legend-tub.png"
                        />
                      </Link>
                    </div>
                    <div className="hotTubLineDescription">
                      <h3>Trident</h3>
                      <p>
                        Legendary performance for those who don't believe in
                        second best.
                      </p>
                      <div className="btn para">
                        <Link to="javascript:void">See More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hotTubLineWrapper twilight">
                    <div className="threeQuarter">
                      <Link to="javascript:void">
                        <img
                          alt="Twilight Series Hot Tub"
                          src="/img/home-page/line-display/twilight-tub.png"
                        />
                      </Link>
                    </div>
                    <div className="hotTubLineDescription">
                      <h3>Nautical</h3>
                      <p>
                        Luxurious perfection designed for discriminating tastes.
                      </p>
                      <div className="btn para">
                        <Link to="javascript:void">See More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="hotTubLineWrapper clarity">
                    <div className="threeQuarter">
                      <Link to="javascript:void">
                        <img
                          alt="Clarity Spas Hot Tub"
                          src="/img/home-page/line-display/clarity-tub.png"
                        />
                      </Link>
                    </div>
                    <div className="hotTubLineDescription">
                      <h3>Coastal</h3>
                      <p>
                        A stylish, modern approach to relaxation and wellness.
                      </p>
                      <div className="btn para">
                        <Link to="javascript:void">See More</Link>
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
                    Swim Spa Series
                  </h2>
                </div>
                <div className="col-md-6">
                  <div className="swimSpaLineWrapper h2x">
                    <div className="threeQuarter">
                      <Link to="https://h2xswimspa.com/">
                        <img
                          alt="H2X Fitness Swim Spa"
                          src="/img/home-page/line-display/h2x-spa.png"
                        />
                      </Link>
                    </div>
                    <div className="swimSpaLineDescription">
                      <h3>H2X Fitness Swim Spas</h3>
                      <p>Jetted swim spa for training, fitness, and therapy.</p>
                      <div className="btn para">
                        <Link to="https://h2xswimspa.com/">See More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                      At Gulfsouth Spas&trade;, we understand that your hot tub or
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
                      <Link to="javascript:void">Find my spa quiz</Link>
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
                    Finding your perfect Gulfsouth Spas&reg; hot tub or swim spa is
                    simple.
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <ol className="bigNumberList">
                    <li>
                      <h4>Find Your Gulfsouth Spas&reg; Dealer</h4>
                      <p>
                        Explore our full range of premium spas with confidence
                        as your local dealer answers any questions you may have.
                      </p>
                    </li>
                    <li>
                      <h4>Choose Your Perfect Spa</h4>
                      <p>
                        Your Gulfsouth Spas&reg; dealer is there to help as you
                        choose the model that is right for your lifestyle and
                        space.{" "}
                      </p>
                    </li>
                    <li>
                      <h4>Live Better</h4>
                      <p>
                        Enjoy better daily living from the comfort of your own
                        home with Gulfsouth Spas&reg;
                      </p>
                    </li>
                  </ol>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </section>

          <section className="parallax experience">
            <div className="experienceOverlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="parallaxText">
                    <h2>Experience the Gulfsouth Spas&reg; difference.</h2>
                    <h3>
                      You'll wonder how you ever lived <br /> without one.
                    </h3>
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
          <section className="bgGradient">
            <div className="container">
              <div className="row">
                <div className="parallaxOverlap">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-xs-4 col-md-12">
                        <Link to="javascript:void">
                          <img
                            className="img-responsive imgctr"
                            alt="Bio magnetic therapy"
                            src="/img/home-magnetic-therapy.jpg"
                          />
                        </Link>
                      </div>
                      <div className="col-xs-8 col-md-12">
                        <h3 className="bluetitle">
                          <Link to="javascript:void">
                            Biomagnetic Therapy System
                          </Link>
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
                        <Link to="javascript:void">
                          <img
                            className="img-responsive imgctr"
                            alt="EcoPur&reg; Charge Filtration System"
                            src="/img/home-eco-pur-filtration.jpg"
                          />
                        </Link>
                      </div>
                      <div className="col-xs-8 col-md-12">
                        <h3 className="bluetitle">
                          <Link to="/hot-tub-filter">
                            EcoPur&reg; Charge Filtration System
                          </Link>
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
                        <Link
                          to="https://michaelphelpsswimspa.com/features-nonslip-floor-system"
                          target="_blank"
                        >
                          <img
                            className="img-responsive imgctr"
                            alt="Nonslip, Comfort Floor System"
                            src="/img/home-nonslip-floor-system.jpg"
                          />
                        </Link>
                      </div>
                      <div className="col-xs-8 col-md-12">
                        <h3 className="bluetitle">
                          <Link
                            to="https://michaelphelpsswimspa.com/features-nonslip-floor-system"
                            target="_blank"
                          >
                            Nonslip, Comfort Floor System
                          </Link>
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
                        <Link
                          to="https://michaelphelpsswimspa.com/features-wave_technology"
                          target="_blank"
                        >
                          <img
                            className="img-responsive imgctr"
                            alt="Wave technology propulsion system"
                            src="/img/home-propulsion.jpg"
                          />
                        </Link>
                      </div>
                      <div className="col-xs-8 col-md-12">
                        <h3 className="bluetitle">
                          <Link
                            to="https://michaelphelpsswimspa.com/features-wave_technology"
                            target="_blank"
                          >
                            Wave Propulsion&reg; System
                          </Link>
                        </h3>
                        <p>
                          Creates a deep and wide current of pure water flow
                          with virtually no turbulence.
                        </p>
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
            <div style={{ marginTop: "25px" }}>
              <Slider
                {...slider_settings}
                nextArrow={<CustomSliderArrow type="next" />}
                prevArrow={<CustomSliderArrow type="prev" />}
              >
                <div className="item">
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
                            <Link to="https://www.h2xswimspa.com/swim-spas/challenger-series/challenger-15-d">
                              See Details
                            </Link>
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
                          <Link
                            to="https://www.youtube.com/watch?v=F_w8renTAl8"
                            data-poster=""
                          >
                            <span></span>
                          </Link>
                        </div>
                        <div className="doublebuttons mobile">
                          <div className="btn para">
                            <Link to="https://www.h2xswimspa.com/swim-spas/challenger-series/challenger-15-d">
                              See Details
                            </Link>
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
                        {/*there is a review start here */}
                        <p>
                          This hot tub was inspired by the best so you can feel
                          your best. Designed with premium features for
                          exceptional hydrotherapy.
                        </p>
                        <div className="doublebuttons dtop">
                          <div className="btn para">
                            <Link to="javascript:void">
                              See Details
                            </Link>
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
                          <Link
                            to="https://www.youtube.com/watch?v=WCuDGEeX2u0"
                            data-poster=""
                          >
                            <span></span>
                          </Link>
                        </div>
                        <div className="doublebuttons mobile">
                          <div className="btn para">
                            <Link to="javascript:void">
                              See Details
                            </Link>
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
                        {/* review star is here */}
                        <p>
                          Roomy and comfortable, this hot tub is recognized for
                          its jet power and seating versatility &mdash;
                          including a contoured lounger.
                        </p>
                        <div className="doublebuttons dtop">
                          <div className="btn para">
                            <Link to="javascript:void">See Details</Link>
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
                          <Link
                            to="https://www.youtube.com/watch?v=hf1dGlFs7w8"
                            data-poster=""
                          >
                            <span></span>
                          </Link>
                        </div>
                        <div className="doublebuttons mobile">
                          <div className="btn para">
                            <Link to="javascript:void">See Details</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
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
            </div>
          </section>
          <section id="homePlanningCTA">
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
                      <h6 className="bluetitlelg">
                        The 5 Secrets to Creating your Perfect Backyard Oasis
                      </h6>
                      <p>
                        Your essential guide to planning for the installation of
                        your Gulfsouth Spas hot tub or swim spa.
                      </p>
                      <div className="doublebuttons">
                        <div className="btn para">
                          <Link to="javascript:void">Download Now</Link>
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
