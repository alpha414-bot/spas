import MainLayout from "@/layouts/MainLayout";
import { Link } from "react-router-dom";

const HotTubElectricalRequirement = () => {
  return (
    <MainLayout
      title="Hot Tub Electrical Installation | Spa Electrical Requirements"
      description="Hot tub electrical requirements for 120v,15A spas and 240v,50A hot tubs, includes PDF download of both spa electrical requirements with diagrams to assist in hot tub electrical installation."
    >
      <div className="container maincontent">
        <div className="jumbotron">
          <h1>Electrical Requirements</h1>
          <div className="row">
            <div className="col-md-4 dtop">
              <img
                alt="close up of a hot tub on a backyard patio"
                className="img-responsive"
                src="/img/electricspa.png"
              />
            </div>
            <div className="col-md-8">
              <p style={{ fontWeight: "16px" }}>
                Electricity and water don't mix, which is why properly
                installing electrical for your new hot tub should be left to a
                licensed and insured electrician who has a strong understanding
                of the National Electric Code (NEC) pertaining to hot tubs, as
                well as proper training. Below are two diagrams developed to
                assist your licensed electrician in understanding the basic hot
                tub electrical requirements of your new spa. In addition to
                these diagrams, each hot tub has a wiring diagram inside the
                control box that will provide additional information for use at
                the time of installation.
              </p>
              <p>
                Please remember, it is the responsibility of the spa owner to
                ensure that electrical connections are made by a qualified
                electrician in accordance with the NEC and any state and local
                electrical codes in force at the time of installation.
                Electrical connections made improperly, or the use of wire gauge
                sizes that are too small for incurring power, may continually
                blow fuses in the electrical equipment box, may damage the
                internal electrical controls and components, is unsafe and will
                void your <Link to="javascript:void(0)">warranty</Link>.{" "}
              </p>
            </div>
          </div>
          <div className="ownerManuals">
            <div className="row cards">
              <div className="col-md-12 text-center">
                <h2>Electrical Diagrams</h2>
              </div>
              <Link
                target="_blank"
                to="/documents/2023-120v-electrical-requirements.pdf"
                download="120V Electrical Requirements - GulfSouth Spas"
                className=" col-sm-6 col-md-4"
              >
                <span className="a">
                  <h2>120V Electrical Requirements</h2>
                </span>
              </Link>
              <Link
                target="_blank"
                to="/documents/2023-240v-electrical-requirements.pdf"
                download="240V Electrical Requirements - GulfSouth Spas"
                className="col-sm-6 col-md-4"
              >
                <span className="a">
                  <h2>240V Electrical Requirements</h2>
                </span>
              </Link>
              {/*<div class="col-sm-6 col-md-4">*/}
              {/*    <span class="a">*/}
              {/*        <h2 style="margin-top:0px;">International Electrical Diagrams</h2>*/}
              {/*        <p style="margin-bottom:0px;">Please contact your local dealer to obtain your*/}
              {/*            electrical requirements and diagrams</p>*/}
              {/*    </span>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className="row">&nbsp;</div>
          <div className="row">&nbsp;</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HotTubElectricalRequirement;
