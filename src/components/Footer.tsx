import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="bgGray">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <Link to="/">
                  <img
                    loading="lazy"
                    className="img-responsive footerLogo"
                    src="/img/ms-logo.png"
                    alt="Gulfsouth Spas Logo"
                  />
                </Link>
                <br />
                <p>
                  Creating your dream backyard oasis should be simple. With the
                  Gulfsouth Spas range of ultra-therapeutic hot tubs and swim
                  spas, it is.
                </p>

                <section className="socmed">
                  <Link to="javascript:void" target="_blank">
                    <span className="">
                      <i className="fab fa-facebook"></i>
                    </span>
                  </Link>

                  <Link to="javascript:void" target="_blank">
                    <span className="">
                      <picture>
                        <source
                          srcSet="/img/social/houzz-social-icon.webp"
                          type="image/webp"
                        />
                        <source
                          srcSet="/img/social/houzz-social-icon.png"
                          type="image/png"
                        />
                        <img
                          loading="lazy"
                          src="/img/social/houzz-social-icon.png"
                          alt="Relax with Gulfsouth Spas on Houzz"
                        />
                      </picture>
                    </span>
                  </Link>

                  <Link to="javascript:void" target="_blank">
                    <span className="">
                      <i className="fab fa-instagram"></i>
                    </span>
                  </Link>

                  <Link to="javascript:void" target="_blank">
                    <span className="">
                      <i className="fab fa-pinterest"></i>
                    </span>
                  </Link>

                  <Link to="javascript:void" target="_blank">
                    <span className="">
                      <picture>
                        <source
                          srcSet="/img/social/threads-social-icon.webp"
                          type="image/webp"
                        />
                        <source
                          srcSet="/img/social/threads-social-icon.png"
                          type="image/png"
                        />
                        <img
                          loading="lazy"
                          src="/img/social/threads-social-icon.png"
                          alt="Relax with Gulfsouth Spas on Threads"
                        />
                      </picture>
                    </span>
                  </Link>

                  <Link to="javascript:void" target="_blank">
                    <span className="">
                      <i className="fab fa-tiktok"></i>
                    </span>
                  </Link>
                  <Link to="javascript:void" target="_blank">
                    <span className="">
                      <picture>
                        <source
                          srcSet="/img/social/twitter-x-social-icon.webp"
                          type="image/webp"
                        />
                        <source
                          srcSet="/img/social/twitter-x-social-icon.png"
                          type="image/png"
                        />
                        <img
                          loading="lazy"
                          src="/img/social/twitter-x-social-icon.png"
                          alt="Relax with Gulfsouth Spas on Twitter"
                        />
                      </picture>
                    </span>
                  </Link>
                  <Link to="javascript:void" target="_blank">
                    <span className="">
                      <i className="fab fa-youtube"></i>
                    </span>
                  </Link>

                  <p>Relax with us on Social</p>
                </section>
              </div>
              <div className="col-sm-9">
                <div className="junkDrawer">
                  <ul>
                    <li className="listTitle">Shop Products</li>
                    <li>
                      <Link to="/hot-tubs">Hot Tubs</Link>
                    </li>
                    <li>
                      <Link to="/swim-spas">Swim Spas</Link>
                    </li>
                    <li>
                      <Link to="javascript:void">Find My Spa Quiz</Link>
                    </li>
                    <li>
                      <Link to="javascript:void">Buying Tools</Link>
                    </li>
                    <li>
                      <Link to="javascript:void">Compare Hot Tub Brands</Link>
                    </li>
                  </ul>

                  <ul>
                    <li className="listTitle">Visit Us</li>
                    <li>
                      <Link to="javascript:void">Find My Local Dealer</Link>
                    </li>
                    <li>
                      <Link to="javascript:void">Request Pricing</Link>
                    </li>
                    <li>
                      <Link to="javascript:void">Financing</Link>
                    </li>
                    <li>
                      <Link to="javascript:void">Trade-In</Link>
                    </li>
                  </ul>

                  <ul>
                    <li className="listTitle">Ideas &amp; Helpful Info</li>
                    <li>
                      <Link to="javascript:void">Backyard Ideas</Link>
                    </li>
                    <li>
                      <Link to="javascript:void">Planning Guide</Link>
                    </li>
                    <li>
                      <Link to="javascript:void">FAQs</Link>
                    </li>
                    <li>
                      <Link to="javascript:void">About Us</Link>
                    </li>
                  </ul>

                  <ul>
                    <li className="listTitle">Owners &amp; Support</li>
                    <li>
                      <Link to="javascript:void">Upload Your Photo</Link>
                    </li>
                    <li>
                      <Link to="javascript:void">Register My Spa</Link>
                    </li>
                    <li>
                      <Link to="javascript:void">Resources</Link>
                    </li>
                    <li>
                      <Link to="javascript:void">Owner's Manuals</Link>
                    </li>
                    <li>
                      <Link to="javascript:void">How-To Videos</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <br />
          <p>
            Copyright &copy; 2024, Gulfsouth Spas |{" "}
            <Link to="javascript:void">Legal</Link>
          </p>
          <br />
          <p>
            <Link to="javascript:void">Privacy Statement</Link>
          </p>
          <br />
        </section>
        <section className="usa">
          <p>
            Built in{" "}
            <picture>
              <source srcSet="/img/usa.webp" type="image/webp" />
              <source srcSet="/img/usa.jpg" type="image/jpg" />
              <img loading="lazy" src="/img/usa.jpg" alt="United States Flag" />
            </picture>{" "}
            the USA
          </p>
        </section>
        <section className="footDisclaimer">
          <small>
            The Gulfsouth Spas line of spas has been designed, produced and
            perfected by our team in Tennessee for since 2010. We are a family
            business of dedicated spa professionals offering lifetime factory
            service that supports its products, so that consumers can enjoy
            peace of mind and can take advantage of the lifelong health benefits
            of their spas. Spas are technically challenging deluxe products
            which include amongst other things : plumbing, electricity, and
            electronics. All components have to face the outdoor elements and
            the variability of the seasons. You want to make certain that you
            are dealing with someone who is going to be around for a long time
            and who is dedicated with the service and upkeep of your spa, way
            after your date of purchase. Our lifetime factory service ensures
            that we will always support you. We offer training to our authorized
            dealers and have a network of spa repair professionals throughout
            the United States for field service issues, on top of our expert
            inside team ready to support you and answer any questions. We are
            proud of our 5-star quality program and our lifetime factory service
            support. We value friendship and respect with our customers and live
            by the golden rule. We care about others, and we care about you.
            Don’t hesitate to email to us at anytime, it is always our pleasure
            to serve you:
          </small>
        </section>
      </footer>
    </>
  );
};
export default Footer;
