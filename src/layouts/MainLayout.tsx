import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const MainLayout: React.FC<{
  children: React.ReactNode;
  title: string;
  description: string;
}> = ({ children, title, description }) => {
  return (
    <>
      <meta name="description" content={description} />
      <title>{title}</title>
      {/* for mobile */}
      <NavBar />
      <div id="page">
        <div id="wrapper"> {children}</div>
      </div>
      <div className="container mobile">
        <nav id="menu">
          <ul>
            <li>
              <a href="/hot-tubs#all">Hot Tubs</a>
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
            </li>

            <li>
              <a href="/swim-spas">Swim Spas</a>
              <ul>
                <li className="dropdown-header">Master Spas Swim Spas</li>
                <li>
                  <a href="/swim-spas">General Overview</a>
                </li>
                <li>
                  <a href="/shop-swim-spas">Shop all swim spas</a>
                </li>
                <li className="dropdown-header">Shop By Brand</li>
                <li>
                  <a href="/shop-swim-spas#Michael">Michael Phelps Swim Spas</a>
                </li>
                <li>
                  <a href="/shop-swim-spas#H2X">H2X Fitness Swim Spas</a>
                </li>
                <li className="divider"></li>
                <li className="dropdown-header">Shop By Use</li>
                <li>
                  <a href="/shop-swim-spas#filter-therapy-1">Therapy/Fitness</a>
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
        </nav>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
