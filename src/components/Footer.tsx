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
                    src="https://www.masterspas.com/img/ms-logo.png"
                    alt="Master Spas Logo"
                  />
                </Link>
                <br />
                <p>
                  Creating your dream backyard oasis should be simple. With the
                  Master Spas&reg; range of ultra-therapeutic hot tubs and swim
                  spas, it is.
                </p>

                <section className="socmed">
                  <Link
                    to="https://www.facebook.com/MasterSpas/"
                    target="_blank"
                  >
                    <span className="">
                      <i className="fab fa-facebook"></i>
                    </span>
                  </Link>

                  <Link
                    to="https://www.houzz.com/pro/masterspas"
                    target="_blank"
                  >
                    <span className="">
                      <picture>
                        <source
                          srcSet="https://www.masterspas.com/img/social/houzz-social-icon.webp"
                          type="image/webp"
                        />
                        <source
                          srcSet="https://www.masterspas.com/img/social/houzz-social-icon.png"
                          type="image/png"
                        />
                        <img
                          loading="lazy"
                          src="https://www.masterspas.com/img/social/houzz-social-icon.png"
                          alt="Relax with Master Spas on Houzz"
                        />
                      </picture>
                    </span>
                  </Link>

                  <Link
                    to="https://www.instagram.com/masterspas/"
                    target="_blank"
                  >
                    <span className="">
                      <i className="fab fa-instagram"></i>
                    </span>
                  </Link>

                  <Link
                    to="https://www.pinterest.com/masterspas/"
                    target="_blank"
                  >
                    <span className="">
                      <i className="fab fa-pinterest"></i>
                    </span>
                  </Link>

                  <Link
                    to="https://www.threads.net/@masterspas"
                    target="_blank"
                  >
                    <span className="">
                      <picture>
                        <source
                          srcSet="https://www.masterspas.com/img/social/threads-social-icon.webp"
                          type="image/webp"
                        />
                        <source
                          srcSet="https://www.masterspas.com/img/social/threads-social-icon.png"
                          type="image/png"
                        />
                        <img
                          loading="lazy"
                          src="https://www.masterspas.com/img/social/threads-social-icon.png"
                          alt="Relax with Master Spas on Threads"
                        />
                      </picture>
                    </span>
                  </Link>

                  <Link
                    to="https://www.tiktok.com/@masterspasofficial"
                    target="_blank"
                  >
                    <span className="">
                      <i className="fab fa-tiktok"></i>
                    </span>
                  </Link>
                  <Link to="https://twitter.com/masterspas" target="_blank">
                    <span className="">
                      <picture>
                        <source
                          srcSet="https://www.masterspas.com/img/social/twitter-x-social-icon.webp"
                          type="image/webp"
                        />
                        <source
                          srcSet="https://www.masterspas.com/img/social/twitter-x-social-icon.png"
                          type="image/png"
                        />
                        <img
                          loading="lazy"
                          src="https://www.masterspas.com/img/social/twitter-x-social-icon.png"
                          alt="Relax with Master Spas on Twitter"
                        />
                      </picture>
                    </span>
                  </Link>
                  <Link
                    to="https://www.youtube.com/user/MasterSpas"
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
                      <Link to="/shop-swim-spas">Swim Spas</Link>
                    </li>
                    <li>
                      <Link to="#">Find My Spa Quiz</Link>
                    </li>
                    <li>
                      <Link to="#">Buying Tools</Link>
                    </li>
                    <li>
                      <Link to="#">Compare Hot Tub Brands</Link>
                    </li>
                  </ul>

                  <ul>
                    <li className="listTitle">Visit Us</li>
                    <li>
                      <Link to="#">Find My Local Dealer</Link>
                    </li>
                    <li>
                      <Link to="#">Request Pricing</Link>
                    </li>
                    <li>
                      <Link to="#">Financing</Link>
                    </li>
                    <li>
                      <Link to="#">Trade-In</Link>
                    </li>
                  </ul>

                  <ul>
                    <li className="listTitle">Ideas &amp; Helpful Info</li>
                    <li>
                      <Link to="#">Backyard Ideas</Link>
                    </li>
                    <li>
                      <Link to="#">Planning Guide</Link>
                    </li>
                    <li>
                      <Link to="#">FAQs</Link>
                    </li>
                    <li>
                      <Link to="#">About Us</Link>
                    </li>
                  </ul>

                  <ul>
                    <li className="listTitle">Owners &amp; Support</li>
                    <li>
                      <Link to="#">Upload Your Photo</Link>
                    </li>
                    <li>
                      <Link to="#">Register My Spa</Link>
                    </li>
                    <li>
                      <Link to="#">Resources</Link>
                    </li>
                    <li>
                      <Link to="#">Owner's Manuals</Link>
                    </li>
                    <li>
                      <Link to="#">How-To Videos</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <section className="footerDivider"></section>

            <section className="awards">
              <Link to="/awards#bba">
                <span>
                  <picture>
                    <source
                      srcSet="https://www.masterspas.com/img/bbb2.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://www.masterspas.com/img/bbb2.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="https://www.masterspas.com/img/bbb2.png"
                      alt="Better Business Bureau A+ Accredidation"
                    />
                  </picture>
                </span>
              </Link>
              <Link to="/awards#certified">
                <span>
                  <picture>
                    <source
                      srcSet="https://www.masterspas.com/img/spa-certified2.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://www.masterspas.com/img/spa-certified2.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="https://www.masterspas.com/img/spa-certified2.png"
                      alt="Master Spas is a Spa Certified Manufacturer"
                    />
                  </picture>
                </span>
              </Link>
              <Link to="/awards#torch">
                <span>
                  <picture>
                    <source
                      srcSet="https://www.masterspas.com/img/torch2.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://www.masterspas.com/img/torch2.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="https://www.masterspas.com/img/torch2.png"
                      alt="Master Spas is a Better Business Bureau Torch Award for Business Ethics Recipient"
                    />
                  </picture>
                  <p>
                    Torch <br /> Award
                  </p>
                </span>
              </Link>
              <Link to="/awards#inspire">
                <span>
                  <picture>
                    <source
                      srcSet="https://www.masterspas.com/img/inspire2.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://www.masterspas.com/img/inspire2.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="https://www.masterspas.com/img/inspire2.png"
                      alt="Master Spas is an Inspire Award Winner"
                    />
                  </picture>

                  <p>
                    Inspire <br /> Award
                  </p>
                </span>
              </Link>
              <Link to="/awards#ernst">
                <span>
                  <picture>
                    <source
                      srcSet="https://www.masterspas.com/img/ernst2.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://www.masterspas.com/img/ernst2.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="https://www.masterspas.com/img/ernst2.png"
                      alt="Master Spas is an Ernst and Young Award Winner"
                    />
                  </picture>
                  <p>
                    Ernst &amp; Young <br /> Entrepreneur <br /> of the year
                  </p>
                </span>
              </Link>
              <Link to="/awards#ihta">
                <span>
                  <picture>
                    <source
                      srcSet="https://www.masterspas.com/img/ihta2.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://www.masterspas.com/img/ihta2.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="https://www.masterspas.com/img/ihta2.png"
                      alt="The Indiana Hot Tub Association"
                    />
                  </picture>
                </span>
              </Link>
              <Link to="/awards">
                <span>
                  <picture>
                    <source
                      srcSet="https://www.masterspas.com/img/usms-logo.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://www.masterspas.com/img/usms-logo.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="https://www.masterspas.com/img/usms-logo.png"
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
            Copyright &copy; 2024, Master Spas | <Link to="/legal">Legal</Link>
          </p>
          <p>
            Manufacturer of{" "}
            <Link to="http://legacywhirlpool.com/" target="_blank">
              Legacy Whirlpool
            </Link>
          </p>
          <br />
          <p>
            <Link to="/privacy-statement">Privacy Statement</Link>
          </p>
          <br />
        </section>
        <section className="usa">
          <p>
            Built in{" "}
            <picture>
              <source
                srcSet="https://www.masterspas.com/img/usa.webp"
                type="image/webp"
              />
              <source
                srcSet="https://www.masterspas.com/img/usa.jpg"
                type="image/jpg"
              />
              <img
                loading="lazy"
                src="https://www.masterspas.com/img/usa.jpg"
                alt="United States Flag"
              />
            </picture>{" "}
            the USA
          </p>
        </section>
        <section className="footDisclaimer">
          <small>
            Master Spas&reg; products are made and assembled in the U.S.A. with
            domestic and foreign components. Master Spas reserves the right to
            change product specifications or features without notice. Master
            Spas is a manufacturer of spas and related products, and we stand
            behind every product we produce pursuant to those representations
            which are stated in our written limited warranty. Your dealer is an
            independent businessperson or company and not an employee or agent
            of Master Spas. We cannot and do not accept any responsibility or
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
