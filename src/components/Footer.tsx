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
                    alt="Gulf South Spas Logo"
                  />
                </Link>
                <br />
                <p>
                  Creating your dream backyard oasis should be simple. With the
                  Gulf South Spas&reg; range of ultra-therapeutic hot tubs and swim
                  spas, it is.
                </p>

                <section className="socmed">
                  <Link
                    to="javascript:void"
                    target="_blank"
                  >
                    <span className="">
                      <i className="fab fa-facebook"></i>
                    </span>
                  </Link>

                  <Link
                    to="javascript:void"
                    target="_blank"
                  >
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
                          alt="Relax with Gulf South Spas on Houzz"
                        />
                      </picture>
                    </span>
                  </Link>

                  <Link
                    to="javascript:void"
                    target="_blank"
                  >
                    <span className="">
                      <i className="fab fa-instagram"></i>
                    </span>
                  </Link>

                  <Link
                    to="javascript:void"
                    target="_blank"
                  >
                    <span className="">
                      <i className="fab fa-pinterest"></i>
                    </span>
                  </Link>

                  <Link
                    to="javascript:void"
                    target="_blank"
                  >
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
                          alt="Relax with Gulf South Spas on Threads"
                        />
                      </picture>
                    </span>
                  </Link>

                  <Link
                    to="javascript:void"
                    target="_blank"
                  >
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
                          alt="Relax with Gulf South Spas on Twitter"
                        />
                      </picture>
                    </span>
                  </Link>
                  <Link
                    to="javascript:void"
                    target="_blank"
                  >
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

            <section className="footerDivider"></section>

            <section className="awards">
              <Link to="javascript:void">
                <span>
                  <picture>
                    <source
                      srcSet="/img/bbb2.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/bbb2.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="/img/bbb2.png"
                      alt="Better Business Bureau A+ Accredidation"
                    />
                  </picture>
                </span>
              </Link>
              <Link to="javascript:void">
                <span>
                  <picture>
                    <source
                      srcSet="/img/spa-certified2.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/spa-certified2.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="/img/spa-certified2.png"
                      alt="Gulf South Spas is a Spa Certified Manufacturer"
                    />
                  </picture>
                </span>
              </Link>
              <Link to="javascript:void">
                <span>
                  <picture>
                    <source
                      srcSet="/img/torch2.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/torch2.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="/img/torch2.png"
                      alt="Gulf South Spas is a Better Business Bureau Torch Award for Business Ethics Recipient"
                    />
                  </picture>
                  <p>
                    Torch <br /> Award
                  </p>
                </span>
              </Link>
              <Link to="javascript:void">
                <span>
                  <picture>
                    <source
                      srcSet="/img/inspire2.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/inspire2.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="/img/inspire2.png"
                      alt="Gulf South Spas is an Inspire Award Winner"
                    />
                  </picture>

                  <p>
                    Inspire <br /> Award
                  </p>
                </span>
              </Link>
              <Link to="javascript:void">
                <span>
                  <picture>
                    <source
                      srcSet="/img/ernst2.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/ernst2.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="/img/ernst2.png"
                      alt="Gulf South Spas is an Ernst and Young Award Winner"
                    />
                  </picture>
                  <p>
                    Ernst &amp; Young <br /> Entrepreneur <br /> of the year
                  </p>
                </span>
              </Link>
              <Link to="javascript:void">
                <span>
                  <picture>
                    <source
                      srcSet="/img/ihta2.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/ihta2.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="/img/ihta2.png"
                      alt="The Indiana Hot Tub Association"
                    />
                  </picture>
                </span>
              </Link>
              <Link to="javascript:void">
                <span>
                  <picture>
                    <source
                      srcSet="/img/usms-logo.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="/img/usms-logo.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="/img/usms-logo.png"
                      alt="US Masters Swimming Official Partner"
                    />
                  </picture>
                </span>
              </Link>
              <br />
              <br />
            </section>
          </div>
        </section>
        <section className="text-center">
          <br />
          <p>
            Copyright &copy; 2024, Gulf South Spas | <Link to="javascript:void">Legal</Link>
          </p>
          <p>
            Manufacturer of{" "}
            <Link to="javascript:void" target="_blank">
              Legacy Whirlpool
            </Link>
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
              <source
                srcSet="/img/usa.webp"
                type="image/webp"
              />
              <source
                srcSet="/img/usa.jpg"
                type="image/jpg"
              />
              <img
                loading="lazy"
                src="/img/usa.jpg"
                alt="United States Flag"
              />
            </picture>{" "}
            the USA
          </p>
        </section>
        <section className="footDisclaimer">
          <small>
            Gulf South Spas&reg; products are made and assembled in the U.S.A. with
            domestic and foreign components. Gulf South Spas reserves the right to
            change product specifications or features without notice. Master
            Spas is a manufacturer of spas and related products, and we stand
            behind every product we produce pursuant to those representations
            which are stated in our written limited warranty. Your dealer is an
            independent businessperson or company and not an employee or agent
            of Gulf South Spas. We cannot and do not accept any responsibility or
            liability for any other representations, statements or contracts
            made by any dealer beyond the provisions of our written limited
            warranty.
          </small>
        </section>
      </footer>
    </>
  );
};
export default Footer;
