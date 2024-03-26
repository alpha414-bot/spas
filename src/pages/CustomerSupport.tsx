import MainLayout from "@/layouts/MainLayout";
import { Link } from "react-router-dom";

const CustomerSupport = () => {
  return (
    <MainLayout
      title="Owner Ideas & Support"
      description="Hot tub owners can find answers to hot tub related questions, register your hot tub, find hot tub warranty information, watch video tutorials, learn how to maintain your hot tub, get installation ideas and more."
    >
      <div className="container maincontent">
        <div
          className="jumbotron overview owners"
          style={{
            background:
              "url(/img/hot-tub-ideas-and-resources.jpg) no-repeat top center",
          }}
        >
          <h1>Ideas &amp; Support</h1>
          <div className="ownersAll">
            <div className="row cards">
              <div className="col-sm-6 col-md-4">
                <Link to="prep/">
                  <div className="support">
                    <h4>Answers While You Wait</h4>
                    <img
                      src="/img/icons/icon-wyw.png"
                      alt="while you wait icon"
                    />
                    <p>
                      Purchased a Master Spa? Here is helpful information as you
                      prepare for your delivery.
                      <br />
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4">
                <Link to="hot-tub-video-tutorials">
                  <div className="support">
                    <h4>How To: Video Tutorials</h4>
                    <img
                      src="/img/icons/icon-video-tutorials.png"
                      alt="video tutorials icon"
                    />
                    <p>
                      Need help setting up your spa or changing a filter? View
                      some of our video tutorials.
                      <br />
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4">
                <Link to="facebook-live-videos/">
                  <div className="support">
                    <h4>Facebook Live Videos</h4>
                    <img
                      src="/img/icons/icon-facebook-live.png"
                      alt="facebook live icon"
                    />
                    <p>
                      Master Spas' Ben Gilliam and Mari Cuticelli answer your
                      swim spa questions
                      <br />
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4">
                <Link to="backyard-ideas">
                  <div className="support">
                    <h4>Backyard Ideas</h4>
                    <img
                      src="/img/icons/icon-lightbulb.png"
                      alt="lightbulb icon"
                    />
                    <p>
                      Not sure how your new spa will look in your backyard? Here
                      are some examples of how others have arranged their
                      backyard.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4">
                <Link to="hot-tub-electrical-requirements">
                  <div className="support">
                    <h4>Electric Requirements</h4>
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
                <Link to="faq">
                  <div className="support">
                    <h4>FAQs</h4>
                    <img
                      src="/img/icons/icon-question.png"
                      alt="question icon"
                    />
                    <p>
                      Some quick answers to the most common hot tub and swim spa
                      questions.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4">
                <Link to="documents/water-care-guide.pdf">
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
                <Link to="javascript:void">
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
                <Link to="swim-spa-resources">
                  <div className="support">
                    <h4>Swim Spa Resources</h4>
                    <img
                      src="/img/icons/icon-swim-spa-water.png"
                      alt="swim spa icon"
                    />
                    <p>
                      Find resources for Michael Phelps Swim Spas and H2X Swim
                      Spas
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4">
                <Link to="troubleshooting">
                  <div className="support">
                    <h4>Troubleshooting</h4>
                    <img
                      src="/img/icons/icon-toolbox.png"
                      alt="toolbox icon"
                    />
                    <p>
                      Check here for a list of the most common problems you may
                      encounter.
                      <br /> &nbsp;
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4">
                <Link to="hot-tub-maintenance-guide">
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
                <Link to="request-service">
                  <div className="support">
                    <h4>Request Service</h4>
                    <img
                      src="/img/icons/icon-gear-wrench.png"
                      alt="toolbox icon"
                    />
                    <p>
                      Get in contact and quickly request service for your spa
                      regardless of the problem.
                      <br /> &nbsp;
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4">
                <Link to="hot-tub-warranties/">
                  <div className="support">
                    <h4>Warranties</h4>
                    <img
                      src="/img/icons/icon-certificate.png"
                      alt="warranty icon"
                    />
                    <p>
                      Make sure your spa is covered. Find your correct hot tub
                      or swim spa warranties here.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4">
                <Link
                  to="javascript:void"
                >
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
                <Link to="javascript:void">
                  <div className="support">
                    <h4>Master Spas News</h4>
                    <img
                      src="/img/icons/icon-news.png"
                      alt="news icon"
                    />
                    <p>
                      Read up on the latest information involving Master Spas
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
