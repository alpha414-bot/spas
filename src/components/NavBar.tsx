import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OutsideClick from './OutsideClick';
interface NavBarInterface {
  type?: 'announcement' | 'navbar';
}

const NavBar: React.FC<NavBarInterface> = ({}) => {
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);
  const [subMenu, setSubMenu] = useState<'hot-tubs' | 'swim-spas' | null>(null);
  return (
    <>
      {showSideMenu && (
        <>
          <OutsideClick
            outsideClick={() => {
              setShowSideMenu(false);
              setSubMenu(null);
            }}
            className="webp webp-alpha webp-animation webp-lossless mm-opened mm-blocking mm-background mm-right mm-opening"
          >
            <nav
              id="mobaMenu"
              className="mm-menu mm-offcanvas mm-right mm-current mm-opened"
              style={{ zIndex: 99999 }}
            >
              <div className="mm-panels">
                <div
                  className={`mm-panel mm-hasnavbar ${!subMenu ? 'mm-opened mm-current' : 'mm-hidden'} `}
                  id="mm-1"
                >
                  <div className="mm-navbar">
                    <span className="mm-title">Menu</span>
                  </div>
                  <ul className="mm-listview">
                    <li onClick={() => setSubMenu('hot-tubs')}>
                      <span className="mm-next" data-target="#mm-2" />
                      <Link to="javascript:void">Hot Tubs</Link>
                    </li>
                    <li onClick={() => setSubMenu('swim-spas')}>
                      <span className="mm-next" data-target="#mm-2" />
                      <Link to="javascript:void">Swim Spas</Link>
                    </li>
                    <li>
                      <Link to="/customer-support">Ideas &amp; Support</Link>
                    </li>
                  </ul>
                </div>
                <div
                  className={`mm-panel mm-hasnavbar ${
                    subMenu && subMenu == 'hot-tubs' ? 'mm-opened mm-current' : 'mm-hidden'
                  }`}
                  id="mm-2"
                >
                  <div className="mm-navbar">
                    <span className="mm-btn mm-prev" onClick={() => setSubMenu(null)} data-target="#mm-1" />
                    <span className="mm-title">Hot Tubs</span>
                  </div>
                  <ul className="mm-listview">
                    <li className="mobile-brand">
                      <Link to="javascript:void">
                        <span>Trident series</span>
                      </Link>
                    </li>
                    <li className="mobile-brand">
                      <Link to="javascript:void">
                        <span>Nautical series</span>
                      </Link>
                    </li>
                    <li className="mobile-brand">
                      <Link to="javascript:void">
                        <span>Coastal series</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className={`mm-panel mm-hasnavbar ${
                    subMenu && subMenu == 'swim-spas' ? 'mm-opened mm-current' : 'mm-hidden'
                  }`}
                  id="mm-3"
                >
                  <div className="mm-navbar">
                    <span className="mm-btn mm-prev" onClick={() => setSubMenu(null)} data-target="#mm-1" />
                    <span className="mm-title">Swim Spas</span>
                  </div>
                  <ul className="mm-listview">
                    <li className="dropdown-header">Gulf South Spas Swim Spas</li>
                    <li>
                      <Link to="/swim-spas">General Overview</Link>
                    </li>
                    <li>
                      <Link to="javascript:void">Shop all swim spas</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </OutsideClick>
        </>
      )}
      <nav className="navbar navbar-default navbar-fixed-top bumpedNav" id="dtopNav">
        <div className="container ">
          <div className="">
            <button
              id="toggle"
              type="button"
              className="navbar-toggle collapsed toggle openNav"
              onClick={() => {
                setShowSideMenu(true);
                setSubMenu(null);
              }}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">
              <picture>
                <source srcSet="/img/ms-logo.png" type="image/png" />
                <img src="/img/ms-logo.png" alt="Gulf South Spas Logo" />
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
                  <li className="col-sm-12">
                    <ul className="dropdown-brands">
                      <li>
                        <Link to="/hot-tubs">
                          <span>Trident Series</span>
                        </Link>
                      </li>
                      <li>
                        <Link preventScrollReset={false}  to="/hot-tubs">
                          <span>Nautical Series</span>
                        </Link>
                      </li>
                      <li>
                        <Link preventScrollReset={false} to="/hot-tubs">
                          <span>Coastal Series</span>
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
                  <li className="col-sm-12">
                    <ul>
                      <li>
                        <Link to="/swim-spas">General Overview</Link>
                      </li>
                      <li>
                        <Link to="javascript:void">Shop all swim spas</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/customer-support">Ideas &amp; Support</Link>
              </li>
              <li>
                <div className="btn para" style={{ backgroundColor: 'transparent', width: '20px' }}>
                  {/*<a href="/find-a-dealer"></a>*/}
                </div>
                <div className="clearfix" />
              </li>
            </ul>
          </div>
          <div id="theCurrentPage" style={{ display: 'none' }} data-id=""></div>
          <div id="navSearch">
            <Link to="javascript:void" data-toggle="modal" data-target="#searchModal"></Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
