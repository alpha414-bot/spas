import MainLayout from "@/layouts/MainLayout";

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
                <a href="/contact-us.html">Customer Care team</a>.
                <br />
                <br />
                Thank you for choosing Gulfsouth Spas.
                <br />
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
