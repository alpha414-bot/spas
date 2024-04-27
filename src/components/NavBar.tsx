import React from "react";
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
            <a className="navbar-brand" href="/">
              <picture>
                <source srcSet="/img/gulfsouthspas.png" type="image/png" />
                <img src="/img/gulfsouthspas.png" alt="Gulfsouth Spas Logo" />
              </picture>
            </a>
          </div>
          <div id="navbar" className="collapse navbar-collapse pull-right">
            <ul className="nav navbar-nav">
              <li className="dropdown dropdown-large">
                <a href="/hot-tubs" style={{ color: "white !important" }}>
                  Hot Tubs <b className="caret" />
                </a>
                <ul className="dropdown-menu dropdown-menu-large row">
                  <li className="col-sm-12">
                    <ul className="dropdown-brands">
                      <li>
                        <a href="/category/trident-series">
                          <span>Trident Series</span>
                        </a>
                      </li>
                      <li>
                        <a href="/category/nautical-series">
                          <span>Nautical Series</span>
                        </a>
                      </li>
                      <li>
                        <a href="/category/coastal-series">
                          <span>Coastal Series</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-large">
                <a href="/swim-spas" style={{ color: "white !important" }}>
                  Swim Spas <b className="caret" />
                </a>
                <ul className="dropdown-menu dropdown-menu-large row">
                  <li className="col-sm-12">
                    <ul>
                      <li>
                        <a href="/swim-spas">General Overview</a>
                      </li>
                      <li>
                        <a href="/shop-swim-spas">Shop all swim spas</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="/customer-support"
                  style={{ color: "white !important" }}
                >
                  Ideas &amp; Support
                </a>
              </li>
              <li>
                <div
                  className="btn para"
                  style={{ backgroundColor: "transparent", width: 20 }}
                >
                  {/* {/*<a href="/find-a-dealer"></a>* /} */}
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
