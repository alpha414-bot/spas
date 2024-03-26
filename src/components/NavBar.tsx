import React from "react";
import { Link } from "react-router-dom";
interface NavBarInterface {
  type?: "announcement" | "navbar";
}

const NavBar: React.FC<NavBarInterface> = ({}) => {
  return (
    <>
      {false && (
        <>
          <div className="webp webp-alpha webp-animation webp-lossless mm-opened mm-blocking mm-background mm-right mm-opening">
            <nav
              id="mobaMenu"
              className="mm-menu mm-offcanvas mm-right mm-current mm-opened"
              style={{ zIndex: 99999 }}
            >
              <div className="mm-panels">
                <div
                  className="mm-panel mm-hasnavbar mm-opened mm-current"
                  id="mm-1"
                >
                  <div className="mm-navbar">
                    <a className="mm-title">Menu</a>
                  </div>
                  <ul className="mm-listview">
                    <li>
                      <a className="mm-next" href="#mm-2" data-target="#mm-2" />
                      <a href="/hot-tubs#all">Hot Tubs</a>
                    </li>
                    <li>
                      <a className="mm-next" href="#mm-3" data-target="#mm-3" />
                      <a href="/swim-spas">Swim Spas</a>
                    </li>
                    <li>
                      <a href="/customer-support">Ideas &amp; Support</a>
                    </li>
                    <li>
                      <a href="/blog/" target="_blank">
                        Blog
                      </a>
                    </li>
                    <li>
                      <span className="btn para">
                        <a href="/find-a-dealer">Find a dealer</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-2">
                  <div className="mm-navbar">
                    <a
                      className="mm-btn mm-prev"
                      href="#mm-1"
                      data-target="#mm-1"
                    />
                    <a className="mm-title" href="#mm-1">
                      Hot Tubs
                    </a>
                  </div>
                  <ul className="mm-listview">
                    <li className="dropdown-header">Shop By Price</li>
                    <li>
                      <a href="/hot-tubs#filter-price-5">$$$$$</a>
                    </li>
                    <li>
                      <a href="/hot-tubs#filter-price-4">$$$$</a>
                    </li>
                    <li>
                      <a href="/hot-tubs#filter-price-3">$$$</a>
                    </li>
                    <li>
                      <a href="/hot-tubs#filter-price-2">$$</a>
                    </li>
                    <li>
                      <a href="/hot-tubs#filter-price-1">$</a>
                    </li>
                    <li>
                      <a href="/hot-tubs#all">See All</a>
                    </li>
                    <li className="dropdown-header">Shop By Size</li>
                    <li>
                      <a href="/hot-tubs#filter-seating-1">1-3 Adults</a>
                    </li>
                    <li>
                      <a href="/hot-tubs#filter-seating-2">4-5 Adults</a>
                    </li>
                    <li>
                      <a href="/hot-tubs#filter-seating-3">6-8 Adults</a>
                    </li>
                    <li>
                      <a href="/hot-tubs#all">See All</a>
                    </li>
                    <li className="dropdown-header">Shop By Brand</li>
                    <li className="mobile-brand">
                      <a href="/legend-series/">
                        <span>Michael Phelps Legend Series</span>
                      </a>
                    </li>
                    <li className="mobile-brand">
                      <a href="/twilight/">
                        <span>Twilight Series</span>
                      </a>
                    </li>
                    <li className="mobile-brand">
                      <a href="/clarity/">
                        <span>Clarity Spas</span>
                      </a>
                    </li>
                    <li className="mobile-brand">
                      <a href="/lh-series/">
                        <span>LH Series</span>
                      </a>
                    </li>
                    <li className="mobile-brand">
                      <a href="/getaway/">
                        <span>Getaway Hot Tubs</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mm-panel mm-hasnavbar mm-hidden" id="mm-3">
                  <div className="mm-navbar">
                    <a
                      className="mm-btn mm-prev"
                      href="#mm-1"
                      data-target="#mm-1"
                    />
                    <a className="mm-title" href="#mm-1">
                      Swim Spas
                    </a>
                  </div>
                  <ul className="mm-listview">
                    <li className="dropdown-header">Master Spas Swim Spas</li>
                    <li>
                      <a href="/swim-spas">General Overview</a>
                    </li>
                    <li>
                      <a href="/shop-swim-spas">Shop all swim spas</a>
                    </li>
                    <li className="dropdown-header">Shop By Brand</li>
                    <li>
                      <a href="/shop-swim-spas#Michael">
                        Michael Phelps Swim Spas
                      </a>
                    </li>
                    <li>
                      <a href="/shop-swim-spas#H2X">H2X Fitness Swim Spas</a>
                    </li>
                    <li className="divider" />
                    <li className="dropdown-header">Shop By Use</li>
                    <li>
                      <a href="/shop-swim-spas#filter-therapy-1">
                        Therapy/Fitness
                      </a>
                    </li>
                    <li>
                      <a href="/shop-swim-spas#filter-recreation-1">
                        Recreation/Swim/Fitness
                      </a>
                    </li>
                    <li>
                      <a href="/shop-swim-spas#filter-endurance-1">
                        Endurance Swim Training
                      </a>
                    </li>
                    <li>
                      <a href="/shop-swim-spas#filter-sprint-1">
                        Fast/Sprint Swimming
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
      <nav>
        <li></li>
      </nav>

      <nav
        className="navbar navbar-default navbar-fixed-top bumpedNav"
        id="dtopNav"
      >
        <div className="container ">
          <div className="">
            <button
              id="toggle"
              type="button"
              className="navbar-toggle collapsed toggle openNav"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">
              <picture>
                <source srcSet="/img/ms-logo.webp" type="image/webp" />
                <source srcSet="/img/ms-logo.png" type="image/png" />
                <img src="/img/ms-logo.png" alt="Master Spas Logo" />
              </picture>
            </Link>
          </div>
          <div id="navbar" className="collapse navbar-collapse pull-right">
            <ul className="nav navbar-nav">
              <li className="dropdown dropdown-large">
                <Link to="/hot-tubs">
                  Hot Tubs <b className="caret"></b>
                </Link>
                <ul className="dropdown-menu dropdown-menu-large row">
                  <li className="col-sm-5">
                    <ul>
                      <li className="dropdown-header">Shop By Price</li>
                      <li>
                        <Link to="/hot-tubs?filter-price=5">$$$$$</Link>
                      </li>
                      <li>
                        <Link to="/hot-tubs?filter-price=4">$$$$</Link>
                      </li>
                      <li>
                        <Link to="/hot-tubs?filter-price=3">$$$</Link>
                      </li>
                      <li>
                        <Link to="/hot-tubs?filter-price=2">$$</Link>
                      </li>
                      <li>
                        <Link to="/hot-tubs?filter-price=1">$</Link>
                      </li>
                      <li className="divider"></li>
                      <li className="dropdown-header">Shop By Size</li>
                      <li>
                        <Link to="/hot-tubs?filter-seating=1-3">
                          1-3 Adults
                        </Link>
                      </li>
                      <li>
                        <Link to="/hot-tubs?filter-seating=4-5">
                          4-5 Adults
                        </Link>
                      </li>
                      <li>
                        <Link to="/hot-tubs?filter-seating=6-8">
                          6-8 Adults
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="col-sm-7">
                    <ul className="dropdown-brands">
                      <li className="dropdown-header">Shop By Brand</li>
                      <li>
                        <Link to="/brand/legend/">
                          <span>Michael Phelps Legend Series</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/brand/twilight/">
                          <span>Twilight Series</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/brand/clarity/">
                          <span>Clarity Spas</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/brand/lh-series/">
                          <span>LH Series</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/brand/getaway/">
                          <span>Getaway Hot Tubs</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-large">
                <Link to="/swim-spas">
                  Swim Spas <b className="caret"></b>
                </Link>
                <ul className="dropdown-menu dropdown-menu-large row">
                  <li className="col-sm-5">
                    <ul>
                      <li className="dropdown-header">Master Spas Swim Spas</li>
                      <li>
                        <Link to="/swim-spas">General Overview</Link>
                      </li>
                      <li>
                        <Link to="/shop-swim-spas">Shop all swim spas</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="col-sm-7">
                    <ul className="dropdown-brands">
                      <li className="dropdown-header">Shop By Brand</li>
                      <li>
                        <Link to="#">Michael Phelps Swim Spas</Link>
                      </li>
                      <li>
                        <Link to="#">H2X Fitness Swim Spas</Link>
                      </li>
                      <li className="divider"></li>
                      <li className="dropdown-header">Shop By Use</li>
                      <li>
                        <Link to="#">Therapy/Fitness</Link>
                      </li>
                      <li>
                        <Link to="#">Recreation/Swim/Fitness</Link>
                      </li>
                      <li>
                        <Link to="#">Endurance Swim Training</Link>
                      </li>
                      <li>
                        <Link to="#">Fast/Sprint Swimming</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/customer-support">Ideas &amp; Support</Link>
              </li>
              <li>
                <div className="btn para">
                  <Link to="#">Find a dealer</Link>
                </div>
                <div className="clearfix"></div>
              </li>
            </ul>
          </div>
          <div id="theCurrentPage" style={{ display: "none" }} data-id=""></div>
          <div id="navSearch">
            <Link to="#" data-toggle="modal" data-target="#searchModal"></Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
