import MainLayout from "@/layouts/MainLayout";
import { Link } from "react-router-dom";

const HotTubMaintenanceGuide = () => {
  return (
    <MainLayout
      title="Hot Tub Maintenance Guide Download"
      description="Download the Hot Tub Maintenance Guide by Master Spas. The guide answers common hot tub questions about balancing water, draining a hot tub, and replacing spa filters."
    >
      <div className="container maincontent">
        <div className="jumbotron">
          <h1>Free Hot Tub Maintenance Guide</h1>
          <div className="row">
            <div className="col-md-6 manuals">
              <p>
                Properly balancing your spa water and conducting routine hot tub
                maintenance is key to getting the maximum enjoyment from your
                investment. To support our customers in achieving this goal,
                we've created a Hot Tub Maintenance Guide that explains the
                components of water chemistry, offers routine hot tub
                maintenance timetables and provides answers to these hot tub
                maintenance questions—and many others:
              </p>
              <ul>
                <li>How do I test the water?</li>
                <li>What does it mean if my hot tub pH is high?</li>
                <li>
                  Is there anything I can do to prevent high pH in my spa?
                </li>
                <li>How often should I drain my hot tub?</li>
                <li>Do I need to shock the water after every use?</li>
                <li>How often should I replace my hot tub filter?</li>
              </ul>
              <p>
                In addition to answering common questions related to water
                quality and routine hot tub maintenance, the guide includes a
                problem solver section to help you identify the causes of common
                issues—and how to eliminate them.
              </p>
            </div>
            <div className="col-md-6">
              <img
                style={{
                  width: "100%",
                  maxWidth: 625,
                  margin: "auto",
                  display: "block",
                }}
                src="/img/bypg.jpg"
                alt="Hot Tub maintenance guide"
              />
              <br />
              <form
                acceptCharset="UTF-8"
                className="infusion-form"
                id="inf_form_30335128041f5f1dbdf5646476227788"
                method="POST"
              >
                <input
                  name="inf_form_xid"
                  type="hidden"
                  defaultValue="30335128041f5f1dbdf5646476227788"
                />
                <input
                  name="inf_form_name"
                  type="hidden"
                  defaultValue="Hot Tub Maintenance Guide"
                />
                <input
                  name="infusionsoft_version"
                  type="hidden"
                  defaultValue="1.67.0.64"
                />
                <div className="infusion-submit">
                  <div
                    className="btn para justify-content-center"
                    style={{ margin: "auto", width: "80%", display: "block" }}
                  >
                    <Link
                      target="_blank"
                      to="/documents/quick-start-guide.pdf"
                      download="Gulfsouth Swim Spa Maintenance Guide"
                    >
                      Download
                    </Link>
                  </div>
                </div>
              </form>
              {/*  */}
            </div>
          </div>
          <div className="row"></div>
          <br />
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8"></div>
            <div className="col-md-0" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HotTubMaintenanceGuide;
