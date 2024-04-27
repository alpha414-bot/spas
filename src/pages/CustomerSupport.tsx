import MainLayout from "@/layouts/MainLayout";

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
                <a href="hot-tub-electrical-requirements">
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
                </a>
              </div>
              {/*<div class="col-sm-6 col-md-4">*/}
              {/*     <a href="faq">*/}
              {/*          <div class="support">*/}
              {/*               <h4>FAQs</h4>*/}
              {/*               <img src="/img/icons/icon-question.png" alt="question icon" />*/}
              {/*               <p>Some quick answers to the most common hot tub and swim spa*/}
              {/*                    questions.</p>*/}
              {/*          </div>*/}
              {/*     </a>*/}
              {/*</div>*/}
              <div className="col-sm-6 col-md-4">
                <a href="documents/quick-start-guide.pdf">
                  <div className="support">
                    <h4>Quick Start Guide</h4>
                    <img
                      src="/img/icons/icon-quick-start.png"
                      alt="quick start icon"
                    />
                    <p>Start enjoying your hot tub quickly.</p>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-md-4">
                <a href="/hot-tub-owners-manuals">
                  <div className="support">
                    <h4>Owner's Manuals</h4>
                    <img
                      src="/img/icons/icon-open-pdf.png"
                      alt="open pdf icon"
                    />
                    <p>Lost your manual? Download a new PDF version.</p>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-md-4">
                <a href="hot-tub-maintenance-guide">
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
                </a>
              </div>
              <div className="col-sm-6 col-md-4">
                <a href="/contact-us">
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
                </a>
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
