import React, { useState } from "react";
import { Link } from "react-router-dom";
import OutsideClick from "./OutsideClick";
interface NavBarInterface {
  type?: "announcement" | "navbar";
}

const NavBar: React.FC<NavBarInterface> = ({}) => {
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);
  const [subMenu, setSubMenu] = useState<"hot-tubs" | "swim-spas" | null>(null);
  return (
    <>
      {showSideMenu && (
        <>
          <OutsideClick
            outsideClick={() => {setShowSideMenu(false); setSubMenu(null)}}
            className="webp webp-alpha webp-animation webp-lossless mm-opened mm-blocking mm-background mm-right mm-opening"
          >
            <nav
              id="mobaMenu"
              className="mm-menu mm-offcanvas mm-right mm-current mm-opened"
              style={{ zIndex: 99999 }}
            >
              <div className="mm-panels">
                <div
                  className={`mm-panel mm-hasnavbar ${
                    !subMenu ? "mm-opened mm-current" : "mm-hidden"
                  } `}
                  id="mm-1"
                >
                  <div className="mm-navbar">
                    <span className="mm-title">Menu</span>
                  </div>
                  <ul className="mm-listview">
                    <li onClick={() => setSubMenu("hot-tubs")}>
                      <span className="mm-next" data-target="#mm-2" />
                      <Link to="javascript:void">Hot Tubs</Link>
                    </li>
                    <li onClick={() => setSubMenu("swim-spas")}>
                      <span className="mm-next" data-target="#mm-2" />
                      <Link to="javascript:void">Swim Spas</Link>
                    </li>
                    <li>
                      <Link to="/customer-support">Ideas &amp; Support</Link>
                    </li>
                    <li>
                      <span className="btn para">
                        <Link to="javascript:void">Find a dealer</Link>
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  className={`mm-panel mm-hasnavbar ${
                    subMenu && subMenu == "hot-tubs"
                      ? "mm-opened mm-current"
                      : "mm-hidden"
                  }`}
                  id="mm-2"
                >
                  <div className="mm-navbar">
                    <span
                      className="mm-btn mm-prev"
                      onClick={() => setSubMenu(null)}
                      data-target="#mm-1"
                    />
                    <span className="mm-title">Hot Tubs</span>
                  </div>
                  <ul className="mm-listview">
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
                    <li>
                      <Link to="/hot-tubs">See All</Link>
                    </li>
                    <li className="dropdown-header">Shop By Size</li>
                    <li>
                      <Link to="/hot-tubs?filter-seating=1-3">1-3 Adults</Link>
                    </li>
                    <li>
                      <Link to="/hot-tubs?filter-seating=4-5">4-5 Adults</Link>
                    </li>
                    <li>
                      <Link to="/hot-tubs?filter-seating=6-8">6-8 Adults</Link>
                    </li>
                    <li>
                      <Link to="/hot-tubs">See All</Link>
                    </li>
                    <li className="dropdown-header">Shop By Brand</li>
                    <li className="mobile-brand">
                      <Link to="javascript:void">
                        <span>Michael Phelps Legend Series</span>
                      </Link>
                    </li>
                    <li className="mobile-brand">
                      <Link to="javascript:void">
                        <span>Twilight Series</span>
                      </Link>
                    </li>
                    <li className="mobile-brand">
                      <Link to="javascript:void">
                        <span>Clarity Spas</span>
                      </Link>
                    </li>
                    <li className="mobile-brand">
                      <Link to="javascript:void">
                        <span>LH Series</span>
                      </Link>
                    </li>
                    <li className="mobile-brand">
                      <Link to="javascript:void/">
                        <span>Getaway Hot Tubs</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className={`mm-panel mm-hasnavbar ${
                    subMenu && subMenu == "swim-spas"
                      ? "mm-opened mm-current"
                      : "mm-hidden"
                  }`}
                  id="mm-3"
                >
                  <div className="mm-navbar">
                    <span
                      className="mm-btn mm-prev"
                      onClick={() => setSubMenu(null)}
                      data-target="#mm-1"
                    />
                    <span className="mm-title">Swim Spas</span>
                  </div>
                  <ul className="mm-listview">
                    <li className="dropdown-header">Master Spas Swim Spas</li>
                    <li>
                      <Link to="/swim-spas">General Overview</Link>
                    </li>
                    <li>
                      <Link to="javascript:void">Shop all swim spas</Link>
                    </li>
                    <li className="dropdown-header">Shop By Brand</li>
                    <li>
                      <Link to="javascript:void">
                        Michael Phelps Swim Spas
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:void">
                        H2X Fitness Swim Spas
                      </Link>
                    </li>
                    <li className="divider" />
                    <li className="dropdown-header">Shop By Use</li>
                    <li>
                      <Link to="javascript:void">
                        Therapy/Fitness
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:void">
                        Recreation/Swim/Fitness
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:void">
                        Endurance Swim Training
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:void">
                        Fast/Sprint Swimming
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </OutsideClick>
        </>
      )}
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
              onClick={() => {setShowSideMenu(true);
              setSubMenu(null) }}
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
                        <Link to="javascript:void">
                          <span>Michael Phelps Legend Series</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="javascript:void">
                          <span>Twilight Series</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="javascript:void">
                          <span>Clarity Spas</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="javascript:void">
                          <span>LH Series</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="javascript:void">
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
                        <Link to="javascript:void">Shop all swim spas</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="col-sm-7">
                    <ul className="dropdown-brands">
                      <li className="dropdown-header">Shop By Brand</li>
                      <li>
                        <Link to="javascript:void">Michael Phelps Swim Spas</Link>
                      </li>
                      <li>
                        <Link to="javascript:void">H2X Fitness Swim Spas</Link>
                      </li>
                      <li className="divider"></li>
                      <li className="dropdown-header">Shop By Use</li>
                      <li>
                        <Link to="javascript:void">Therapy/Fitness</Link>
                      </li>
                      <li>
                        <Link to="javascript:void">Recreation/Swim/Fitness</Link>
                      </li>
                      <li>
                        <Link to="javascript:void">Endurance Swim Training</Link>
                      </li>
                      <li>
                        <Link to="javascript:void">Fast/Sprint Swimming</Link>
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
                  <Link to="javascript:void">Find a dealer</Link>
                </div>
                <div className="clearfix"></div>
              </li>
            </ul>
          </div>
          <div id="theCurrentPage" style={{ display: "none" }} data-id=""></div>
          <div id="navSearch">
            <Link to="javascript:void" data-toggle="modal" data-target="#searchModal"></Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
