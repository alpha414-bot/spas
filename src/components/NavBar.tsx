import React from "react";
import { Link } from "react-router-dom";
interface NavBarInterface {
  type?: "announcement" | "navbar";
}

const NavBar: React.FC<NavBarInterface> = ({}) => {
  return (
    <>
      <nav
        className="navbar navbar-default navbar-fixed-top bumpedNav"
        id="dtopNav"
      >
        <div
          className="container"
          style={{ backgroundColor: "#136183 !important" }}
        >
          <div className="">
            <a
              href="#mobaMenu"
              id="toggle"
              type="button"
              className="navbar-toggle collapsed toggle openNav"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar top-bar" />
              <span className="icon-bar middle-bar" />
              <span className="icon-bar bottom-bar" />
            </a>
            <Link className="navbar-brand" to="/">
              <picture>
                <source srcSet="/img/gulfsouthspas.png" type="image/png" />
                <img src="/img/gulfsouthspas.png" alt="Gulfsouth Spas Logo" />
              </picture>
            </Link>
          </div>
          <div id="navbar" className="collapse navbar-collapse pull-right">
            <ul className="nav navbar-nav">
              <li className="dropdown dropdown-large">
                <Link to="/hot-tubs" style={{ color: "white !important" }}>
                  Hot Tubs <b className="caret" />
                </Link>
                <ul className="dropdown-menu dropdown-menu-large row">
                  <li className="col-sm-12">
                    <ul className="dropdown-brands">
                      <li>
                        <Link to="/category/trident-series">
                          <span>Trident Series</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/nautical-series">
                          <span>Nautical Series</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/coastal-series">
                          <span>Coastal Series</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-large">
                <Link to="/swim-spas" style={{ color: "white !important" }}>
                  Swim Spas <b className="caret" />
                </Link>
                <ul className="dropdown-menu dropdown-menu-large row">
                  <li className="col-sm-12">
                    <ul>
                      <li>
                        <Link to="/swim-spas">General Overview</Link>
                      </li>
                      <li>
                        <Link to="/shop-swim-spas">Shop all swim spas</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/customer-support"
                  style={{ color: "white !important" }}
                >
                  Ideas &amp; Support
                </Link>
              </li>
              <li>
                <div
                  className="btn para"
                  style={{ backgroundColor: "transparent", width: 20 }}
                >
                </div>
              </li>
            </ul>
          </div>
          <div id="theCurrentPage" style={{ display: "none" }} data-id="" />
        </div>
      </nav>
    </>
  );
};
export default NavBar;
