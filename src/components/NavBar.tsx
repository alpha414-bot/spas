import React from "react";
import { Link } from "react-router-dom";
interface NavBarInterface {
  type?: "announcement" | "navbar";
}

const NavBar: React.FC<NavBarInterface> = ({}) => {
  return (
    <>
      
      <div id="imgTabContainer">
        <div className="container">
          <div className="flexContainer">
            <Link className="active" to="https://www.masterspas.com" id="msTab">
              <span className="sr-only">Visit the Master Spas website</span>
            </Link>
            <Link to="https://michaelphelpsswimspa.com" id="mpssTab">
              <span className="sr-only">
                Visit the Michael Phelps Signature Swim Spas website
              </span>
            </Link>
            <Link to="https://h2xswimspa.com" id="h2xTab">
              <span className="sr-only">
                Visit the H2X Fitness Swim Spas website
              </span>
            </Link>
            <Link to="https://chillygoattubs.com" id="goatTab">
              <span className="sr-only">
                Visit the Michael Phelps Chilly GOAT Tub by Master Spas website
              </span>
            </Link>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-default navbar-fixed-top bumpedNav"
        id="dtopNav"
      >
        <div className="container ">
          <div className="">
            <a
              href="#mobaMenu"
              id="toggle"
              type="button"
              className="navbar-toggle collapsed toggle openNav"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </a>
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
                <a href="/hot-tubs#all">
                  Hot Tubs <b className="caret"></b>
                </a>
                <ul className="dropdown-menu dropdown-menu-large row">
                  <li className="col-sm-5">
                    <ul>
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
                      <li className="divider"></li>
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
                    </ul>
                  </li>
                  <li className="col-sm-7">
                    <ul className="dropdown-brands">
                      <li className="dropdown-header">Shop By Brand</li>
                      <li>
                        <a href="/legend-series/">
                          <span>Michael Phelps Legend Series</span>
                        </a>
                      </li>
                      <li>
                        <a href="/twilight/">
                          <span>Twilight Series</span>
                        </a>
                      </li>
                      <li>
                        <a href="/clarity/">
                          <span>Clarity Spas</span>
                        </a>
                      </li>
                      <li>
                        <a href="/lh-series/">
                          <span>LH Series</span>
                        </a>
                      </li>
                      <li>
                        <a href="/getaway/">
                          <span>Getaway Hot Tubs</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-large">
                <a href="/swim-spas">
                  Swim Spas <b className="caret"></b>
                </a>
                <ul className="dropdown-menu dropdown-menu-large row">
                  <li className="col-sm-5">
                    <ul>
                      <li className="dropdown-header">Master Spas Swim Spas</li>
                      <li>
                        <a href="/swim-spas">General Overview</a>
                      </li>
                      <li>
                        <a href="/shop-swim-spas">Shop all swim spas</a>
                      </li>
                    </ul>
                  </li>
                  <li className="col-sm-7">
                    <ul className="dropdown-brands">
                      <li className="dropdown-header">Shop By Brand</li>
                      <li>
                        <a href="/shop-swim-spas#Michael">
                          Michael Phelps Swim Spas
                        </a>
                      </li>
                      <li>
                        <a href="/shop-swim-spas#H2X">H2X Fitness Swim Spas</a>
                      </li>
                      <li className="divider"></li>
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
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/customer-support">Ideas &amp; Support</Link>
              </li>
              <li>
                <div className="btn para">
                  <a href="/find-a-dealer">Find a dealer</a>
                </div>
                <div className="clearfix"></div>
              </li>
            </ul>
          </div>
          <div id="theCurrentPage" style={{ display: "none" }} data-id=""></div>
          <div id="navSearch">
            <a href="" data-toggle="modal" data-target="#searchModal"></a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
