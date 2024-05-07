import MainLayout from "@/layouts/MainLayout";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";

// const nodemailer = require('nodemailer');
const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendNow = (e: FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_0oj54fh", "template_fdp7h2f", form.current, {
          publicKey: "bm9UFtnw3fpNd0vc9",
        })
        .then(() => {
          alert("Mail sent successfully!");
          form.current?.reset();
        })
        .catch((error) => {
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
      title="Owner Ideas & Support"
      description="Hot tub owners can find answers to hot tub related questions, register your hot tub, find hot tub warranty information, watch video tutorials, learn how to maintain your hot tub, get installation ideas and more."
    >
      <div className="container maincontent">
        <div className="jumbotron overview owners dealer">
          <h1>Contact Us</h1>
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8 text-center">
              <p>
                Whether you want to visit the showroom or explore your options
                with a virtual tour or video consultation, our network of
                dealers can help you find the best hot tub or swim spa for your
                space and needs.
              </p>
            </div>
            <div className="col-md-2" />
            <div className="col-md-12">
              <div id="locatorForm" className="bump-up">
                <form id="contactForm" ref={form} onSubmit={sendNow}>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="first_name">
                        First Name*
                      </label>
                      <input
                        className="form-control"
                        name="first_name"
                        type="text"
                        id="first_name"
                        placeholder="First name*"
                      />
                      <span
                        id="firstError"
                        className="hidden alert-warning help-block animated fadeInDown"
                      >
                        Please enter your first name
                      </span>
                    </div>
                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="last_name">
                        Last Name*
                      </label>
                      <input
                        className="form-control"
                        name="last_name"
                        type="text"
                        id="last_name"
                        placeholder="Last name*"
                      />
                      <span
                        id="lastError"
                        className="hidden alert-warning help-block animated fadeInDown"
                      >
                        Please enter your last name
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="zip">
                        Zip*
                      </label>
                      <input
                        className="form-control"
                        id="zip"
                        placeholder="Zip*"
                        type="text"
                        name="zip"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="country">
                        Country
                      </label>
                      <select
                        className="form-control"
                        id="country"
                        name="country"
                      >
                        <option value="">Country</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="--------------">--------------</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Aland Islands">Aland Islands</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">
                          Antigua and Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia, Plurinational State of">
                          Bolivia, Plurinational State of
                        </option>
                        <option value="Bonaire, Sint Eustatius and Saba">
                          Bonaire, Sint Eustatius and Saba
                        </option>
                        <option value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </option>
                        <option value="Brunei Darussalam">
                          Brunei Darussalam
                        </option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos (Keeling) Islands">
                          Cocos (Keeling) Islands
                        </option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo, The Democratic Republic of the">
                          Congo, The Democratic Republic of the
                        </option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote d">Cote d</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Curacao">Curacao</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">
                          Falkland Islands (Malvinas)
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Territories">
                          French Southern Territories
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and McDonald Islands">
                          Heard Island and McDonald Islands
                        </option>
                        <option value="Holy See (Vatican City State)">
                          Holy See (Vatican City State)
                        </option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran, Islamic Republic of">
                          Iran, Islamic Republic of
                        </option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, Democratic People">
                          Korea, Democratic People
                        </option>
                        <option value="Korea, Republic of">
                          Korea, Republic of
                        </option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People">Lao People</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">
                          Libyan Arab Jamahiriya
                        </option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia, The Former Yugoslav Republic of">
                          Macedonia, The Former Yugoslav Republic of
                        </option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">
                          Micronesia, Federated States of
                        </option>
                        <option value="Moldova, Republic of">
                          Moldova, Republic of
                        </option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Occupied Palestinian Territory">
                          Occupied Palestinian Territory
                        </option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">
                          Russian Federation
                        </option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Barthelemy">
                          Saint Barthelemy
                        </option>
                        <option value="Saint Helena, Ascension and Tristan da Cunha">
                          Saint Helena, Ascension and Tristan da Cunha
                        </option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Martin (French part)">
                          Saint Martin (French part)
                        </option>
                        <option value="Saint Pierre and Miquelon">
                          Saint Pierre and Miquelon
                        </option>
                        <option value="Saint Vincent and The Grenadines">
                          Saint Vincent and The Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Sint Maarten (Dutch part)">
                          Sint Maarten (Dutch part)
                        </option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and the South Sandwich Islands">
                          South Georgia and the South Sandwich Islands
                        </option>
                        <option value="South Sudan">South Sudan</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">
                          Svalbard and Jan Mayen
                        </option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syrian Arab Republic">
                          Syrian Arab Republic
                        </option>
                        <option value="Taiwan, Province of China">
                          Taiwan, Province of China
                        </option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, United Republic of">
                          Tanzania, United Republic of
                        </option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-Leste">Timor-Leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">
                          Turks and Caicos Islands
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United States Minor Outlying Islands">
                          United States Minor Outlying Islands
                        </option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela, Bolivarian Republic of">
                          Venezuela, Bolivarian Republic of
                        </option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">
                          Virgin Islands, British
                        </option>
                        <option value="Virgin Islands, U.S.">
                          Virgin Islands, U.S.
                        </option>
                        <option value="Wallis and Futuna">
                          Wallis and Futuna
                        </option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="phone">
                        Phone*
                      </label>
                      <input
                        className="form-control"
                        name="phone"
                        type="text"
                        id="phone"
                        placeholder="Phone*"
                      />
                      <span
                        id="phoneError"
                        className="hidden alert-warning help-block animated fadeInDown"
                      >
                        Please enter your 10 digit phone number
                      </span>
                    </div>
                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="email">
                        Email*
                      </label>
                      <input
                        className="form-control"
                        name="email"
                        type="text"
                        id="email"
                        placeholder="Email*"
                      />
                      <span
                        id="emailError"
                        className="hidden alert-warning help-block animated fadeInDown"
                      >
                        Ouch, that doesn't look like an email!
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="choosen_spa">
                        Choose your spa
                      </label>
                      <select
                        className="form-control"
                        id="choosen_spa"
                        name="choosen_spa"
                      >
                        <option value="hottub">Choose your spa...</option>
                        <option value="Swim SPA Series">Swim SPA Series</option>
                        <option value="Trident Series">Tident Series</option>
                        <option value="Nautical Series">Nautical Series</option>
                        <option value="Coastal Series">Coastal Series</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="plan_on_buying">
                        Planning to buy in...
                      </label>
                      <select
                        className="form-control"
                        id="plan_on_buying"
                        name="plan_on_buying"
                      >
                        <option value="">Planning to buy within...</option>
                        <option value="A month">A month</option>
                        <option value="2 to 3 months">2 to 3 months</option>
                        <option value="4 to 6 months">4 to 6 months</option>
                        <option value="7 to 12 months">7 to 12 months</option>
                        <option value="More than 12 months">
                          More than 12 months
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-sm-12">
                      <label>Preferred Contact Method</label>
                      <select
                        name="prefer_contact_method"
                        id="prefer_contact_method"
                        className="form-control"
                      >
                        <option value="">No preference</option>
                        <option value="Email">Email</option>
                        <option value="Phone call">Phone call</option>
                        <option value="Text message">Text message</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label htmlFor="comments">
                        Other comments or questions?
                      </label>
                      <textarea
                        className="form-control"
                        name="comments"
                        id="comments"
                        defaultValue={""}
                      />
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
                          name="join_newsletter"
                          defaultValue="Y"
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
                      <input
                        id="lpcdirect"
                        name="lpcdirect"
                        defaultValue="e601d5eada31d568ef031dcdf07223bb"
                        hidden
                      />
                      <input
                        id="reference_from"
                        name="reference_from"
                        defaultValue="MSHome"
                        hidden
                      />
                      <input
                        id="product"
                        name="product"
                        defaultValue="hottubs"
                        hidden
                      />
                      <input
                        id="tag_id"
                        name="tag_id"
                        defaultValue={1299}
                        hidden
                      />
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

export default ContactUs;
