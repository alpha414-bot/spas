import MainLayout from "@/layouts/MainLayout";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <MainLayout
      title="Privacy Policy | Gulfsouthspas"
      description="Read our Privacy Policy to learn how we protect your personal information and what data we collect. Your privacy is important to us."
    >
      <div className="container maincontent tw-pt-44">
        <div className="jumbotron" style={{ textAlign: "center" }}>
          <h1 className="!tw-text-center tw-text-lg tw-text-black">
            - Privacy Policy -
          </h1>
          <h2>Protecting your private information is our priority.</h2>
          <h3 style={{ lineHeight: "1.5" }}>
            Your privacy is important to us. No personal information will be
            collected without your consent and we do not sell, trade or rent
            your personal information to other sites or services.
            <br />
            <br /> Collected information is used only to respond to your
            comments and questions and improve your experience with our firm and
            its website. Any information you submit will be shared only with
            your consent. <br />
            <br />
            To make navigation of our site easier, our web page uses “cookies.”
            Cookies are encrypted text files we place in your computer's browser
            to store your preferences. Cookies alone do not reveal your E-mail
            address or other personally identifiable information.
            <br />
            <br /> We will disclose information we maintain when required to do
            so by law for example, in response to a court order or a subpoena.
            We also may disclose such information in response to a law
            enforcement agency's request for such information.
            <br />
            <br /> By submitting information on this website you are
            acknowledging that although we take appropriate measures to
            safeguard against unauthorized disclosures of information, we cannot
            guarantee you that personally identifiable information we collect
            will never be disclosed in a manner that is inconsistent with this
            Privacy Statement. Also, unless and until you are retained by this
            firm pursuant to a written retainer agreement, this firm does not
            represent you in any manner, and information you give us cannot be
            considered protected by an attorney-client relationship.
            <br />
            <br /> Our site may contain links to other sites whose information
            practices are different than ours. You should read the privacy
            policy on any site you visit, as we have no control over information
            that is submitted to or collected by these third party sites. <br />
            <br />
            No mobile opt-in or test message consent will be shared with any
            third parties or affiliates for marketing purposes.
          </h3>
          <br />
          <br />
          <p>
            Visit{" "}
            <Link to={window.location.origin}>{window.location.origin}</Link>{" "}
            for our Homepage.
          </p>
          <p>
            Visit{" "}
            <Link to={`${window.location.origin}/terms-conditions`}>
              {window.location.origin}/terms-conditions
            </Link>{" "}
            for our Terms of Service.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
