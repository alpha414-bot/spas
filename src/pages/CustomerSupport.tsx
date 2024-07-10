import MainLayout from "@/layouts/MainLayout";
import { Link } from "react-router-dom";

const CustomerSupport = () => {
  return (
    <MainLayout title="Owner Ideas & Support" description="">
      <div className="container maincontent">
        <div
          className="jumbotron owners"
          style={{
            backgroundImage:
              "url(/img/hot-tub-ideas-and-resources.jpg) no-repeat top center",
          }}
        >
          <h1>Ideas &amp; Support</h1>
          <div className="ownersAll">
            <div className="row cards">
              <div className="col-sm-6 col-md-4">
                <Link to="/hot-tub-electrical-requirements">
                  <div className="support">
                    <h4>Electrical Requirements</h4>
                    <img
                      src="/img/icons/icon-power.png"
                      alt="elextricity icon"
                    />
                    <p>
                      PDF downloads of spa electrical requirements with diagrams
                      to assist in hot tub electrical installation.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4">
                <Link
                  target="_blank"
                  to="/documents/Foundation Suggestions.pdf"
                  download="Foundation - GulfSouth Spas"
                >
                  <div className="support">
                    <h4>Foundation</h4>
                    <img
                      src="/img/icons/icon-open-pdf.png"
                      alt="toolbox icon"
                    />
                    <p>
                      Foundation main PDF and documents. Download yours now!
                      <br /> &nbsp;
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4">
                <Link
                  target="_blank"
                  to="/documents/Gulfsouth Spas Warranty.pdf"
                  download="Warranty - GulfSouth Spas"
                >
                  <div className="support">
                    <h4>Warranty</h4>
                    <img
                      src="/img/icons/icon-open-pdf.png"
                      alt="toolbox icon"
                    />
                    <p>
                      Warranty main PDF and documents. Download yours now!
                      <br /> &nbsp;
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4">
                <Link target="_blank" to="/documents/quick-start-guide.pdf">
                  <div className="support">
                    <h4>Quick Start Guide</h4>
                    <img
                      src="/img/icons/icon-quick-start.png"
                      alt="quick start icon"
                    />
                    <p>Start enjoying your hot tub quickly.</p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4">
                <Link to="/hot-tub-owners-manuals">
                  <div className="support">
                    <h4>Owner's Manuals</h4>
                    <img
                      src="/img/icons/icon-open-pdf.png"
                      alt="open pdf icon"
                    />
                    <p>Lost your manual? Download a new PDF version.</p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4">
                <Link to="/hot-tub-maintenance-guide">
                  <div className="support">
                    <h4>Hot Tub Maintenance Guide</h4>
                    <img
                      src="/img/icons/maintenance-guide.png"
                      alt="Maintenance pdf icon"
                    />
                    <p>
                      How to properly balance your spa water and conduct routine
                      hot tub maintenance.
                      <br /> &nbsp;
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4">
                <Link to="https://registermyspa.com/" target="_blank">
                  <div className="support">
                    <h4>Spa Registration</h4>
                    <img
                      src="/img/icons/icon-clipboard.png"
                      alt="registration icon"
                    />
                    <p>
                      Register your spa with us to assure speedy response to any
                      questions or problems you might have.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4">
                <Link to="/become-a-dealer">
                  <div className="support">
                    <h4>Become a dealer</h4>
                    <img
                      src="/img/icons/icon-gear-wrench.png"
                      alt="toolbox icon"
                    />
                    <p>
                      Get in contact and join our list of qualified dealer for
                      our best products.
                      <br /> &nbsp;
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col-sm-6 col-md-4" />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CustomerSupport;
