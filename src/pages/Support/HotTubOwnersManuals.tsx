import MainLayout from "@/layouts/MainLayout";
import { Link } from "react-router-dom";

const HotTubOwnersManuals = () => {
  return (
    <MainLayout
      title="Owner's Manuals for Your Gulfsouth Spas Hot Tub"
      description="Locate and download hot tub and swim spa owner's manuals. To ensure proper installation and use of your new hot tub, please read the entire owner's manual before installing and using your spa."
    >
      <div className="container maincontent">
        <div className="jumbotron">
          <h1>Hot Tub and Swim Spa Owner's Manuals </h1>
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
              <p>
                With proper installation, use, and maintenance your hot tub or
                swim spa will bring enjoyment for years to come. Please read the
                entire owner's manual before installing and using your hot tub
                or swim spa. To locate the appropriate spa owner's manual,
                select the model of your hot tub or swim spa below. If after
                reviewing the owner's manual, you have any questions regarding
                the installation, use, or maintenance of your Gulfsouth Spas,
                please contact your local dealer or the Gulfsouth Spas{" "}
                <Link to="/contact-us">Customer Care team</Link>.
                <br />
                <br />
                <div className="infusion-submit">
                  <div
                    className="btn para justify-content-center"
                    style={{
                      margin: "0px 5px",
                      width: "65%",
                      display: "block",
                    }}
                  >
                    <Link
                      target="_blank"
                      to="/documents/gulfsouthspas-swimspa-manual.pdf"
                      download="Gulfsouth Swim SPA Manual"
                    >
                      Swim SPA Manual
                    </Link>
                  </div>
                </div>
                <div className="infusion-submit">
                  <div
                    className="btn para justify-content-center"
                    style={{
                      margin: "8px 5px",
                      width: "65%",
                      display: "block",
                    }}
                  >
                    <Link
                      target="_blank"
                      to="/documents/gulfsouthspas-hottube-guide.pdf"
                      download="Gulfsouth Hot Tub Manual"
                    >
                      Hot Tub Manual
                    </Link>
                  </div>
                </div>
                <br />
                Thank you for choosing Gulfsouth Spas.
              </p>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HotTubOwnersManuals;
