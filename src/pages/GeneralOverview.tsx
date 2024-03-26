import "@/assets/css/sequencetheme.css";
import "@/assets/css/swimspas.css";
import MainLayout from "@/layouts/MainLayout";
import { useState } from "react";

const GeneralOverview = () => {
  const [sequenceState, setSequenceState] = useState(1);
  const NextSequence = () =>
    setSequenceState((current) => (current < 4 ? current + 1 : 1));
  const PrevSequence = () =>
    setSequenceState((current) => (current > 1 ? current - 1 : 4));
  return (
    <MainLayout
      title="Swim Spas by Gulfsouth Spas"
      description="Gulfsouth Spas makes two premium lines of swim spas — Michael Phelps Signature Swim Spas and H2X Fitness Swim Spas. Get active and stay active with a swimming pool alternative."
    >
      <div id="swimSpaVideo">
        <div className="dtop">
          <video
            className=""
            autoPlay
            loop
            playsInline
            muted
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          >
            <source
              src="https://www.michaelphelpsswimspa.com/_video/ssloopv3.mp4"
              type="video/mp4"
            />
            <source
              src="https://www.michaelphelpsswimspa.com/_video/ssloopv3.webm"
              type="video/webm"
            />
            <source
              src="https://www.michaelphelpsswimspa.com/_video/ssloopv3.ogv"
              type="video/ogg"
            />
            <img
              loading="lazy"
              src="img/swimspas/video-preview.jpg"
              title="Your browser does not support the <video> tag"
              alt="swim spa video preview"
            />
          </video>
        </div>
      </div>
      <div className="container tronTainer">
        <img
          style={{ margin: "75px auto 0px auto" }}
          src="/img/swim-spas-mobile-hero.jpg"
          className="img-responsive mobile"
          alt="Win Your Day with a Michael Phelps Swim Spa by Gulfsouth Spas"
        />
        <section id="homeLead">
          <div>
            <h1>Gulfsouth Spas Swim Spas</h1>
            <h2>Swim. Exercise. Relax.</h2>
            <p>
              Swim, jog, walk, and exercise in water without the stress gravity
              has on your body. Relax with massaging spa jets in the perfect
              water temperature, year-round. This alternative to a pool has
              benefits for you and your entire family.
            </p>
          </div>
        </section>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="featureBlock">
              <div className="featurelink card">
                <picture>
                  <source
                    srcSet="/img/swimspas/front-thumb-swimming.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/swimspas/front-thumb-swimming.jpg"
                    type="image/jpg"
                  />
                  <img
                    src="/img/swimspas/front-thumb-swimming.jpg"
                    alt="Michael Phelps Swimming"
                  />
                </picture>
                <span>Swimming</span>
              </div>
              <div className="featurelink card">
                <picture>
                  <source
                    srcSet="/img/swimspas/front-thumb-fitness.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/swimspas/front-thumb-fitness.jpg"
                    type="image/jpg"
                  />
                  <img
                    src="/img/swimspas/front-thumb-fitness.jpg"
                    alt="A woman exercising in a Michael Phelps Swim Spa by Gulfsouth Spas"
                  />
                </picture>
                <span>Aquatic Fitness</span>
              </div>
              <div className="featurelink card">
                <picture>
                  <source
                    srcSet="/img/swimspas/front-thumb-therapy.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/swimspas/front-thumb-therapy.jpg"
                    type="image/jpg"
                  />
                  <img
                    src="/img/swimspas/front-thumb-therapy.jpg"
                    alt="Jets massaging aches away"
                  />
                </picture>
                <span>Therapy &amp; Relaxation</span>
              </div>
              <div className="featurelink card">
                <picture>
                  <source
                    srcSet="/img/swimspas/front-thumb-familyfun.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/swimspas/front-thumb-familyfun.jpg"
                    type="image/jpg"
                  />
                  <img
                    src="/img/swimspas/front-thumb-familyfun.jpg"
                    alt="A family in a swim spa enjoying their time together"
                  />
                </picture>
                <span>Family Fun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bgGrayMobile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-centered">
              <h3 style={{ fontSize: 30 }} className="text-center">
                Choose from two premium lines of swim spas by Gulfsouth Spas, the
                world's largest swim spa manufacturer.
              </h3>
              <ul className="leadList">
                <li>100% Made in America</li>
                <li>Quality Construction</li>
                <li>15 Models to Choose From</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section id="theRedirects">
          <div className="row text-center">
            <div className="col-md-2 dtop" />
            <div className="col-md-4 noGutterMobile">
              <figure>
                <a href="https://michaelphelpsswimspa.com">
                  <picture>
                    <source
                      srcSet="/img/swimspas/mp-redirect.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/swimspas/mp-redirect.jpg"
                      type="image/jpg"
                    />
                    <img
                      loading="lazy"
                      src="/img/swimspas/mp-redirect.jpg"
                      className="img-responsive"
                      alt="Michael Phelps swim spa"
                    />
                  </picture>
                </a>
                <figcaption>
                  <h2 className="bluetitle">A Powerful Smooth Current</h2>
                  <strong>Wave Propulsion</strong>
                  <br />
                  Michael Phelps Signature Swim Spas by Gulfsouth Spas were
                  designed with input from 23-time gold medalist, Michael
                  Phelps, to have a powerful yet smooth current.
                </figcaption>
              </figure>
              <div className="btn para">
                <a href="https://michaelphelpsswimspa.com">See More</a>
              </div>
            </div>
            <div className="col-md-4 noGutterMobile">
              <figure>
                <a href="https://h2xswimspa.com">
                  <picture>
                    <source
                      srcSet="/img/swimspas/h2x-redirect.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/swimspas/h2x-redirect.jpg"
                      type="image/jpg"
                    />
                    <img
                      loading="lazy"
                      src="/img/swimspas/h2x-redirect.jpg"
                      className="img-responsive"
                      alt="H2X Swim Spa"
                    />
                  </picture>
                </a>
                <figcaption>
                  <h2 className="bluetitle">A Premium Fitness Swim Spa</h2>
                  <strong>Jetted Propulsion</strong>
                  <br />
                  H2X jetted swim spas are designed specifically for those
                  looking to incorporate exercise and swimming into their lives
                  while enjoying the benefits of massage therapy.
                </figcaption>
              </figure>
              <div className="btn para">
                <a href="https://h2xswimspa.com">See More</a>
              </div>
            </div>
            <div className="col-md-2" />
          </div>
        </section>
      </div>
      <section id="discoverAdventures" className="bgGray">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
              <h2>
                Discover what adventures await with a Michael Phelps Signature
                Swim Spa:
              </h2>
              <span className="embed-responsive embed-responsive-16by9 ytConsent">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube-nocookie.com/embed/m7l_vvgsI2k"
                  width={640}
                  height={564}
                  frameBorder={0}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </span>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </section>
      <section id="meetOurAthletes" className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
              <a href="athletes.php">
                <picture className="dtop">
                  <source
                    srcSet="/img/swimspas/athlete-banner.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/swimspas/athlete-banner.jpg"
                    type="image/jpg"
                  />
                  <img
                    loading="lazy"
                    src="/img/swimspas/athlete-banner.jpg"
                    className="img-responsive"
                    alt="Meet Gulfsouth Spas' Athletes"
                  />
                </picture>
                <picture className="mobile">
                  <source
                    srcSet="/img/swimspas/athlete-banner-mobile.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="/img/swimspas/athlete-banner-mobile.jpg"
                    type="image/jpg"
                  />
                  <img
                    loading="lazy"
                    src="/img/swimspas/athlete-banner-mobile.jpg"
                    className="img-responsive mobile"
                    alt="Meet Gulfsouth Spas' Athletes"
                  />
                </picture>
              </a>
            </div>
            <div className="col-md-2" />
          </div>
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
              <p>&nbsp;</p>
              <p style={{ fontSize: 18 }}>
                We want every person, every athlete, to have the opportunity to
                be their best self — whether it's prioritizing wellness or
                making it to the top of the podium. We are proud to support
                these athletes as they strive to win their day.
              </p>
              <div className="btn para">
                <a href="/athletes">Meet Our Athletes</a>
              </div>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </section>
      <div className="testimonialSingle">
        <div className="container">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8 text-center">
              <div className="stars">
                <i style={{ display: "inline-block" }} className="fa fa-star" />
                <i style={{ display: "inline-block" }} className="fa fa-star" />
                <i style={{ display: "inline-block" }} className="fa fa-star" />
                <i style={{ display: "inline-block" }} className="fa fa-star" />
                <i style={{ display: "inline-block" }} className="fa fa-star" />
              </div>
              <div className="quotecontainer">
                <h4>A dream come true!</h4>
                <p className="quote">
                  "This swim spa is a dream come true. I can swim anytime, on my
                  own terms, without worrying about scheduling or the
                  cleanliness of public pools — and I can use it for way longer
                  than just two months!"
                </p>
                <p className="author">— Vesna, Ontario</p>
              </div>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </div>
      <section id="spaLines">
        <div className="container">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
              <h2 className="text-center">
                Find the best swim spa for you and your space: {sequenceState}
              </h2>
            </div>
            <div className="col-md-2" />
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="sequence" className="seq">
                <picture className="seq-prev" onClick={PrevSequence}>
                  <source
                    className="img-responsive"
                    srcSet="/img/arrow.png"
                  />
                  <img
                    className="img-responsive"
                    src="/img/arrow.png"
                    alt="arrow"
                  />
                </picture>
                <picture className="seq-next" onClick={NextSequence}>
                  <source
                    className="img-responsive"
                    srcSet="/img/arrow.png"
                  />
                  <img
                    className="img-responsive"
                    src="/img/arrow.png"
                    alt="arrow"
                  />
                </picture>
                <div className="seq-screen">
                  <ul className="seq-canvas">
                    <li
                      className={`seq-step1 ${
                        sequenceState == 1 ? "seq-in" : ""
                      }`}
                      id="step1"
                    >
                      <div className="seq-content">
                        <h3 data-seq="" className="seq-title">
                          MP Momentum Deep Swim Spa
                        </h3>
                        <p data-seq="" className="seq-title">
                          Two bodies of water: A hot tub on one side, a swim spa
                          on the other. It's the best of both worlds, offering
                          space for fitness, fun, and relaxation.
                        </p>
                        <picture data-seq="" className="seq-title">
                          <source
                            media="(min-width: 200px)"
                            srcSet="/img/swimspas/momentum-sequence.webp"
                          />
                          <source
                            media="(min-width: 200px)"
                            srcSet="/img/swimspas/momentum-sequence.png"
                          />
                          <img
                            loading="lazy"
                            className="img-responsive"
                            src="/img/swimspas/momentum-sequence.png"
                            alt="MP Momentum Swim Spas By Gulfsouth Spas"
                          />
                        </picture>
                        <span data-seq="" className="seq-title">
                          <div
                            style={{ width: 300 }}
                            data-seq=""
                            className="btn para"
                          >
                            <a
                              data-seq=""
                              href="https://michaelphelpsswimspa.com/swim-spas/"
                            >
                              See All Michael Phelps Models
                            </a>
                          </div>
                        </span>
                      </div>
                    </li>
                    <li
                      className={`seq-step2 ${
                        sequenceState == 2 ? "seq-in" : ""
                      }`}
                      id="step2"
                    >
                      <div className="seq-content">
                        <h3 data-seq="" className="seq-title">
                          Challenger Series
                        </h3>
                        <p data-seq="" className="seq-title">
                          Elite Performance, Airless Swim Current, Programmable
                          Speed.
                          <br />
                          Ideal for swimmers, athletes, and fitness enthusiasts.
                        </p>
                        <picture data-seq="" className="seq-title">
                          <source
                            media="(min-width: 200px)"
                            srcSet="/img/swimspas/challenger-sequence.webp"
                          />
                          <source
                            media="(min-width: 200px)"
                            srcSet="/img/swimspas/challenger-sequence.png"
                          />
                          <img
                            loading="lazy"
                            className="img-responsive"
                            src="/img/swimspas/challenger-sequence.png"
                            alt="Challenger Series Swim Spas By Gulfsouth Spas"
                          />
                        </picture>
                        <span data-seq="" className="seq-title">
                          <div
                            style={{ width: 250 }}
                            data-seq=""
                            className="btn para"
                          >
                            <a
                              data-seq=""
                              href="https://www.h2xswimspa.com/swim-spas/challenger-series/"
                            >
                              See All Challengers
                            </a>
                          </div>
                        </span>
                      </div>
                    </li>
                    <li
                      className={`seq-step3 ${
                        sequenceState == 3 ? "seq-in" : ""
                      }`}
                      id="step3"
                    >
                      <div className="seq-content">
                        <h3 data-seq="" className="seq-title">
                          Trainer Series
                        </h3>
                        <p data-seq="" className="seq-title">
                          High Performance, Air-injected Swim Current,
                          Adjustable Speed.
                          <br />
                          Ideal for fitness enthusiasts and therapy seekers.
                        </p>
                        <picture data-seq="" className="seq-title">
                          <source
                            media="(min-width: 200px)"
                            srcSet="/img/swimspas/trainer-sequence.webp"
                          />
                          <source
                            media="(min-width: 200px)"
                            srcSet="/img/swimspas/trainer-sequence.png"
                          />
                          <img
                            loading="lazy"
                            className="img-responsive"
                            src="/img/swimspas/trainer-sequence.png"
                            alt="Trainer Series Swim Spas By Gulfsouth Spas"
                          />
                        </picture>
                        <br />
                        <span data-seq="" className="seq-title">
                          <div
                            style={{ width: 200 }}
                            data-seq=""
                            className="btn para"
                          >
                            <a
                              data-seq=""
                              href="https://www.h2xswimspa.com/swim-spas/trainer-series/"
                            >
                              See All Trainers
                            </a>
                          </div>
                        </span>
                      </div>
                    </li>
                    <li
                      className={`seq-step4 ${
                        sequenceState == 4 ? "seq-in" : ""
                      }`}
                      id="step4"
                    >
                      <div className="seq-content">
                        <h3 data-seq="" className="seq-title">
                          Therapool Series
                        </h3>
                        <p data-seq="" className="seq-title">
                          Fitness Oriented, Air-injected Flow Stream, Dual
                          Speed.
                          <br />
                          Ideal for small spaces and aqua therapy
                        </p>
                        <picture data-seq="" className="seq-title">
                          <source
                            media="(min-width: 200px)"
                            srcSet="/img/swimspas/therapool-sequence.webp"
                          />
                          <source
                            media="(min-width: 200px)"
                            srcSet="/img/swimspas/therapool-sequence.png"
                          />
                          <img
                            loading="lazy"
                            className="img-responsive"
                            src="/img/swimspas/therapool-sequence.png"
                            alt="Therapool Series Swim Spas By Gulfsouth Spas"
                          />
                        </picture>
                        <span data-seq="" className="seq-title">
                          <div
                            style={{ width: 200 }}
                            data-seq=""
                            className="btn para"
                          >
                            <a
                              data-seq=""
                              href="https://www.h2xswimspa.com/swim-spas/therapool-series/"
                            >
                              See All Therapools
                            </a>
                          </div>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul
                  rel="sequence"
                  className="seq-pagination"
                  role="navigation"
                  aria-label="Pagination"
                >
                  <li>
                    <a href="#step1" rel="step1" title="Go to step 1">
                      Step 1
                    </a>
                  </li>
                  <li>
                    <a href="#step2" rel="step2" title="Go to step 2">
                      Step 2
                    </a>
                  </li>
                  <li>
                    <a href="#step3" rel="step3" title="Go to step 3">
                      Step 3
                    </a>
                  </li>
                  <li>
                    <a href="#step4" rel="step4" title="Go to step 4">
                      Step 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3>See what our customers are saying</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="stars">
                <i style={{ display: "inline-block" }} className="fa fa-star" />
                <i style={{ display: "inline-block" }} className="fa fa-star" />
                <i style={{ display: "inline-block" }} className="fa fa-star" />
                <i style={{ display: "inline-block" }} className="fa fa-star" />
                <i style={{ display: "inline-block" }} className="fa fa-star" />
              </div>
              <div className="quotecontainer">
                <h4>A great pool alternative</h4>
                <p className="quote">
                  "My husband and I debated whether to put in a pool but decided
                  that we didn't want to wreck a large part of the yard in order
                  to do so. Also, the swim spa is practical to use yearround,
                  unlike an in-ground pool."
                </p>
                <p className="author">— Glenna, California</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stars">
                <i style={{ display: "inline-block" }} className="fa fa-star" />
                <i style={{ display: "inline-block" }} className="fa fa-star" />
                <i style={{ display: "inline-block" }} className="fa fa-star" />
                <i style={{ display: "inline-block" }} className="fa fa-star" />
                <i style={{ display: "inline-block" }} className="fa fa-star" />
              </div>
              <div className="quotecontainer">
                <h4>Relief from my pain</h4>
                <p className="quote">
                  "I had back surgery and needed a low-impact workout and a way
                  to strengthen my core. I've lost weight, and my back feels
                  better! Plus the jets help massage my back. I'm definitely
                  motivated to work out!"
                </p>
                <p className="author"> — Korinne, Texas</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stars">
                <i style={{ display: "inline-block" }} className="fa fa-star" />
                <i style={{ display: "inline-block" }} className="fa fa-star" />
                <i style={{ display: "inline-block" }} className="fa fa-star" />
                <i style={{ display: "inline-block" }} className="fa fa-star" />
                <i style={{ display: "inline-block" }} className="fa fa-star" />
              </div>
              <div className="quotecontainer">
                <h4>Low-impact exercise</h4>
                <p className="quote">
                  "I truly enjoy swimming, stretching, walking against the
                  current, and using the exercise equipment that came with the
                  spa in a much lower-impact environment than at the gym."
                </p>
                <p className="author">— Leah, Texas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                At Gulfsouth Spas, we make buying a hot tub or swim spa just as
                relaxing as using one.
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
              <span>See a hot tub or swim spa, select the perfect size.</span>
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
                    src="/img/swimspas/icon-welcom-to-event.png"
                    alt="Professional evaluates your space"
                  />
                </picture>
                <figcaption>A professional will evaluate your space</figcaption>
              </figure>
              <span>
                We can do this with a photo &amp; dimensions or by visiting your
                backyard.
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
                When you're ready, a hot tub or swim spa can be installed in one
                day.
              </span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GeneralOverview;
