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
                  With the Gulfsouth Spas range of quality hot tubs and swim
                  spas, creating your backyard oasis should be simple.
                </p>
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
                      <Link to="/customer-support">Customer Support</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="tel:2056713100">Phone: 205-671-3100</Link>
                    </li>
                    <li>
                      <Link to="tel:8882398658">Tol Free: 888-239-8658</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="listTitle">Hot Tubs / Swim SPA</li>
                    <li>
                      <Link to="/swim-spas">Swim SPA Series</Link>
                    </li>
                    <li>
                      <Link to="/category/trident-series">Trident Series</Link>
                    </li>
                    <li>
                      <Link to="/category/nautical-series">
                        Nautical Series
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/coastal-series">Coastal Series</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="listTitle">Ideas &amp; Support</li>
                    <li>
                      <Link to="/spa-registration">SPA Registration</Link>
                    </li>
                    <li>
                      <Link to="/hot-tub-maintenance-guide">
                        Maintenance Guide
                      </Link>
                    </li>
                    <li>
                      <Link to="/hot-tub-owners-manuals">Owner's Manuals</Link>
                    </li>
                    <li>
                      <Link to="/become-a-dealer">Become a dealer</Link>
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
            Copyright © 2024, Gulfsouth Spas |{" "}
            <Link to="javascript:void">Legal</Link>
          </p>
          <p>
            <Link to="javascript:void">Privacy Statement</Link>
          </p>
          <p>
            <Link to="tel:2056713100">Phone: 205-671-3100</Link>
          </p>
          <p>
            <Link to="tel:8882398658">Tol Free: 888-239-8658</Link>
          </p>
          <br />
        </section>
        <section className="usa">
          <p>
            Built in
            <picture>
              <source srcSet="/img/usa.webp" type="image/webp" />
              <source srcSet="/img/usa.jpg" type="image/jpg" />
              <img loading="lazy" src="/img/usa.jpg" alt="United States Flag" />
            </picture>
            the USA
          </p>
        </section>
        <section className="footDisclaimer">
          <small>
            The Gulfsouth Spas line of spas has been designed, produced and
            perfected by our team in Athens, Tennessee. We are a family business
            of dedicated spa professionals offering lifetime factory service
            that supports its products, so that consumers can enjoy peace of
            mind and can take advantage of the lifelong health benefits of their
            spas.
          </small>
        </section>
      </footer>
    </>
  );
};
export default Footer;
