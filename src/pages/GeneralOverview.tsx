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
      <section id="cdnVideoHero">
        <div id="playerTextWrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div id="playerText">
                  <h1>Swim SPA</h1>
                  <div id="playerTextSubset">
                    <h2>with America's finest swim spas, by Gulfsouth Spas</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cdnVideoDtop">
          <img
            className="img-responsive"
            alt="Gulfsouth swim spas"
            src="/img/swimspapic.png"
            title=""
          />
        </div>
        <div className="cdnVideoMobile">
          <img
            className="img-responsive"
            alt="Gulfsouth swim spas"
            style={{ width: "100%" }}
            src="/img/swimspapic.png"
            title=""
          />
        </div>
      </section>
      <div id="swimSpaVideo">
        <div className="dtop">
        </div>
      </div>
      <div className="container tronTainer">
        <section id="homeLead" style={{ paddingTop: 20 }}>
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
                Choose from our premium lines of swim spas by Gulfsouth Spas,
                <br />
                Relaxation Redefined
              </h3>
              <ul className="leadList">
                <li>100% Made in America</li>
                <li>Quality Construction</li>
                <li>7 Models to Choose From</li>
              </ul>
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
      <div className="container maincontent">
        <section className="homemore row">
          <div className="col-xs-12 col-md-4 ">
            <div>
              <a href="/subpages/swimspas-gallery.html">
                <span>
                  <p style={{ color: "#00aad4" }}>
                    Envision yourself in a Trident Series hot tub.
                  </p>
                </span>
                <img
                  src="/img/Gallery.png"
                  alt="Image gallery of Trident Series Hot Tubs"
                  title="Navigate to gallery of images of Trident Series Hot Tubs"
                />
              </a>
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
                <a href="/subpages/swimspas-gallery.html">Gallery</a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 ">
            <div>
              <a href="/subpages/swimspas-features.html">
                <span>
                  <p>Explore all the magical features Trident brings.</p>
                </span>
                <img
                  src="/img/Features.png"
                  alt="Trident Series Hot Tub features"
                  title="Navigate to Trident Series Hot Tub Features"
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
                <a href="/subpages/swimspas-features.html">Features</a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 ">
            <div>
              <a href="/hot-tub-benefits.html">
                <span>
                  <p>Improve your well-being with hydrotherapy</p>
                </span>
                <img
                  src="/img/Benefits.png"
                  alt="Hot Tub Benefits"
                  title="Navigate to Hot Tub Benefits"
                />
              </a>
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
                <a href="/hot-tub-benefits.html">Hot Tub Benefits</a>
              </div>
            </div>
          </div>
        </section>
        <section id="modelCarousel">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8 text-center">
              <h1 className="bluetitle" style={{ marginBottom: 15 }}>
                SWIM SPA SERIES
              </h1>
              <p>
                Our Swim Series Swim Series, aquatic exercising swim spa is
                quickly gaining popularity. As opposed to other swim spas. With
                the Swim Series ad just the water flow, which is ideal for
                low-impact jogging / treading. Stainless steel handles provide
                additional support.{" "}
              </p>
              <br />
            </div>
            <div className="col-md-2" />
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="glider-contain">
                <div className="glider">
                  <div className="modelItem">
                    <a href="javascript:void(0)">
                      <img
                        src="/img/home-page/products/TS11PS.png"
                        alt="The Trident Series 240 Hot Tub"
                      />
                      <h4>TS11P</h4>
                      <p>Measurements 92” X 144” X 55" </p>
                    </a>
                  </div>
                  <div className="modelItem">
                    <a href="javascript:void(0)">
                      <img
                        src="/img/home-page/products/SS12GS.png"
                        alt="The Trident Series 6.2 Hot Tub"
                      />
                      <h4>SS12</h4>
                      <p>Measurements 92” X 144” X 55" </p>
                    </a>
                  </div>
                  <div className="modelItem">
                    <a href="javascript:void(0)">
                      <img
                        src="/img/home-page/products/ssp13.png"
                        alt="The Trident Series 67.25 Hot Tub"
                      />
                      <h4>SSP13</h4>
                      <p>Measurements 92” X 144” X 55” </p>
                    </a>
                  </div>
                  <div className="modelItem">
                    <a href="javascript:void(0)">
                      <img
                        src="/img/home-page/products/ss14.png"
                        alt="The Trident Series 7.2 Hot Tub"
                      />
                      <h4>SS14</h4>
                      <p>Measurements 92” X 168” X 55”</p>
                    </a>
                  </div>
                  <div className="modelItem">
                    <a href="javascript:void(0)">
                      <img
                        src="/img/home-page/products/ss16.png"
                        alt="The Trident Series 7.25 Hot Tub"
                      />
                      <h4>SS16</h4>
                      <p>Measurements 92” X 192” X 55” </p>
                    </a>
                  </div>
                  <div className="modelItem">
                    <a href="javascript:void(0)">
                      <img
                        src="/img/home-page/products/ss19.png"
                        alt="The Trident Series 7.25 Hot Tub"
                      />
                      <h4>SS19</h4>
                      <p>Measurements 92” X 244” X 55” </p>
                    </a>
                  </div>
                </div>
                <div role="tablist" className="dots" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default GeneralOverview;
