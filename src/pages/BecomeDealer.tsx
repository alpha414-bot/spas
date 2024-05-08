import MainLayout from "@/layouts/MainLayout";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type BecomeDealerType = {
  first_name: string;
  last_name: string;
  company_name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  have_retail_store: string;
  comments: string;
  join_newsletter: boolean;
};

const BecomeDealer = () => {
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BecomeDealerType>({
    mode: "all",
  });
  const numberPattern = /^[0-9]*$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendNow: SubmitHandler<BecomeDealerType> = () => {
    const formElement = form.current as HTMLFormElement;
    if (formElement) {
      emailjs
        .sendForm("service_default", "template_become_dealer", formElement, {
          publicKey: "bm9UFtnw3fpNd0vc9",
        })
        .then((d: any) => {
          console.log(d);
          alert("Mail sent successfully!");
          reset();
        })
        .catch((error: any) => {
          console.log(error);
          alert(
            `There was an error when sending email: [ERROR:] ${JSON.stringify(
              error
            )}`
          );
        });
    }
  };

  return (
    <MainLayout
      title="Become a dealer | Gulfsouth Spas"
      description="Get in contact and join our list of qualified dealer for our best products."
    >
      <div className="container maincontent">
        <div className="jumbotron overview owners dealer">
          <h1>Become a dealer</h1>
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8 text-center">
              <p>
                Get in contact and join our list of qualified dealer for our
                best products.
              </p>
            </div>
            <div className="col-md-2" />
            <div className="col-md-12">
              <div id="locatorForm" className="bump-up">
                <form
                  id="contactForm"
                  ref={form}
                  onSubmit={handleSubmit(sendNow)}
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="first_name">
                        First Name*
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        {...register("first_name", {
                          required: "First name is required",
                        })}
                        id="first_name"
                        placeholder="First name*"
                      />
                      {errors.first_name && (
                        <span
                          id="firstError"
                          className="alert-warning help-block animated fadeInDown"
                        >
                          {errors.first_name.message}
                        </span>
                      )}
                    </div>
                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="last_name">
                        Last Name*
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        {...register("last_name", {
                          required: "Last name is required",
                        })}
                        id="last_name"
                        placeholder="Last name*"
                      />
                      {errors.last_name && (
                        <span
                          id="firstError"
                          className="alert-warning help-block animated fadeInDown"
                        >
                          {errors.last_name.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label className="sr-only" htmlFor="company_name">
                        Company Name*
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        {...register("company_name", {
                          required: "Company name is required",
                        })}
                        id="company_name"
                        placeholder="Company name*"
                      />
                      {errors.company_name && (
                        <span
                          id="firstError"
                          className="alert-warning help-block animated fadeInDown"
                        >
                          {errors.company_name.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label className="sr-only" htmlFor="email">
                        Email*
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: emailPattern,
                            message: "Ouch, that doesn't look like an email!",
                          },
                        })}
                        id="email"
                        placeholder="Email*"
                      />
                      {errors.email && (
                        <span
                          id="firstError"
                          className="alert-warning help-block animated fadeInDown"
                        >
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label className="sr-only" htmlFor="phone">
                        Phone number*
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="phone"
                        {...register("phone", {
                          required: "Phone is required",
                          pattern: {
                            value: numberPattern,
                            message: "Phone number can't contain letters",
                          },
                        })}
                        placeholder="Phone number*"
                      />
                      {errors.phone && (
                        <span
                          id="firstError"
                          className="alert-warning help-block animated fadeInDown"
                        >
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="city">
                        City*
                      </label>
                      <input
                        className="form-control"
                        id="city"
                        {...register("city", {
                          required: "City is required",
                        })}
                        placeholder="City*"
                        type="text"
                      />
                      {errors.city && (
                        <span
                          id="firstError"
                          className="alert-warning help-block animated fadeInDown"
                        >
                          {errors.city.message}
                        </span>
                      )}
                    </div>
                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="country">
                        State*
                      </label>
                      <select
                        className="form-control"
                        id="state"
                        {...register("state", {
                          required: "State is required",
                        })}
                      >
                        <option value="">
                          State*
                        </option>
                        <option value="INTERNATIONAL">INTERNATIONAL</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                      </select>
                      {errors.state && (
                        <span
                          id="firstError"
                          className="alert-warning help-block animated fadeInDown"
                        >
                          {errors.state.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="postal_code">
                        Postal code*
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="postal_code"
                        {...register("postal_code", {
                          required: "Postal code is required",
                        })}
                        placeholder="Postal code*"
                      />
                      {errors.postal_code && (
                        <span
                          id="firstError"
                          className="alert-warning help-block animated fadeInDown"
                        >
                          {errors.postal_code.message}
                        </span>
                      )}
                    </div>
                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="country">
                        Country*
                      </label>
                      <select
                        className="form-control"
                        id="country"
                        {...register("country", {
                          required: "Country is required",
                        })}
                      >
                        <option value="">
                          Country*
                        </option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="U.K.">U.K.</option>
                        <option value="France">France</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.country && (
                        <span
                          id="firstError"
                          className="alert-warning help-block animated fadeInDown"
                        >
                          {errors.country.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label className="sr-only" htmlFor="have_retail_store">
                        Do you currently have a retail store?*
                      </label>
                      <select
                        className="form-control"
                        id="have_retail_store"
                        {...register("have_retail_store", {
                          required: "This field is required",
                        })}
                      >
                        <option value="">
                          Do you currently have a retail store?*
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      {errors.have_retail_store && (
                        <span
                          id="firstError"
                          className="alert-warning help-block animated fadeInDown"
                        >
                          {errors.have_retail_store.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label htmlFor="comments">Message*</label>
                      <textarea
                        className="form-control"
                        {...register("comments", {
                          required: "Comments is required",
                        })}
                        id="comments"
                        defaultValue={""}
                      />
                      {errors.comments && (
                        <span
                          id="firstError"
                          className="alert-warning help-block animated fadeInDown"
                        >
                          {errors.comments.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label
                        htmlFor="join_newsletter"
                        className="checkbox-inline"
                      >
                        <input
                          id="join_newsletter"
                          type="checkbox"
                          defaultValue="Y"
                          {...register("join_newsletter")}
                        />
                        Yes, I want to join the Gulfsouth Spas mailing list so
                        I'll hear about awesome new products and special offers
                        before anyone else! Gulfsouth Spas will contact you with
                        information regarding dealer location, pricing and spa
                        details. You may unsubscribe from these emails at any
                        time.
                      </label>
                      <p>&nbsp;</p>
                      <span
                        style={{
                          margin: "auto",
                          display: "block",
                          width: "100%",
                          maxWidth: 300,
                        }}
                      >
                        <div
                          className="g-recaptcha"
                          data-sitekey="6LdqzzYUAAAAAAyjmQTbRQbNUftKIpMm9nci_yoe"
                        ></div>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="TrOdd form-group col-md-12">
                      <label
                        className="para justify-content-center"
                        style={{ margin: "auto" }}
                      >
                        <input
                          type="submit"
                          id="locatorSubmit"
                          name="locatorSubmit"
                          defaultValue="Submit"
                        />
                      </label>
                      <div
                        className="form-group noerror alert alert-warning"
                        id="locatorMessage"
                        style={{ display: "none" }}
                      >
                        <p>
                          <span id="locatorInfoText" />
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                <small>
                  NOTICE: Gulfsouth Spas makes only those representations as
                  provided in its written warranties. Any other representation,
                  statement or contract made by a dealer to you regarding
                  Gulfsouth Spas and any products manufacturerd by Gulfsouth
                  Spas can be attributable only to such independent dealer. The
                  dealer who sells Gulfsouth Spas products is an independent
                  contractor and is not an agent, representative or employee of
                  Gulfsouth Spas, and Gulfsouth Spas cannot and does not accept
                  or assume any liability for any acts, representations or
                  contracts of any dealer. All dealers of Gulfsouth Spas's
                  products are independent businesses.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BecomeDealer;
