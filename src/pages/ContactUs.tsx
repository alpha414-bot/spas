import MainLayout from "@/layouts/MainLayout";

const ContactUs = () => {
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
                <form id="contactForm">
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
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="GB">United Kingdom</option>
                        <option value="--------------">--------------</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AX">Aland Islands</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO">
                          Bolivia, Plurinational State of
                        </option>
                        <option value="BQ">
                          Bonaire, Sint Eustatius and Saba
                        </option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BW">Botswana</option>
                        <option value="BV">Bouvet Island</option>
                        <option value="BR">Brazil</option>
                        <option value="IO">
                          British Indian Ocean Territory
                        </option>
                        <option value="BN">Brunei Darussalam</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CV">Cape Verde</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos (Keeling) Islands</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CG">Congo</option>
                        <option value="CD">
                          Congo, The Democratic Republic of the
                        </option>
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CI">Cote d</option>
                        <option value="HR">Croatia</option>
                        <option value="CU">Cuba</option>
                        <option value="CW">Curacao</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">Falkland Islands (Malvinas)</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="TF">French Southern Territories</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GG">Guernsey</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HM">
                          Heard Island and McDonald Islands
                        </option>
                        <option value="VA">
                          Holy See (Vatican City State)
                        </option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran, Islamic Republic of</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IM">Isle of Man</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JE">Jersey</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KI">Kiribati</option>
                        <option value="KP">Korea, Democratic People</option>
                        <option value="KR">Korea, Republic of</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Lao People</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libyan Arab Jamahiriya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macao</option>
                        <option value="MK">
                          Macedonia, The Former Yugoslav Republic of
                        </option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexico</option>
                        <option value="FM">
                          Micronesia, Federated States of
                        </option>
                        <option value="MD">Moldova, Republic of</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="NO">Norway</option>
                        <option value="PS">
                          Occupied Palestinian Territory
                        </option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PW">Palau</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PN">Pitcairn</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="RE">Reunion</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russian Federation</option>
                        <option value="RW">Rwanda</option>
                        <option value="BL">Saint Barthelemy</option>
                        <option value="SH">
                          Saint Helena, Ascension and Tristan da Cunha
                        </option>
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint Lucia</option>
                        <option value="MF">Saint Martin (French part)</option>
                        <option value="PM">Saint Pierre and Miquelon</option>
                        <option value="VC">
                          Saint Vincent and The Grenadines
                        </option>
                        <option value="WS">Samoa</option>
                        <option value="SM">San Marino</option>
                        <option value="ST">Sao Tome and Principe</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="RS">Serbia</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapore</option>
                        <option value="SX">Sint Maarten (Dutch part)</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="GS">
                          South Georgia and the South Sandwich Islands
                        </option>
                        <option value="SS">South Sudan</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SJ">Svalbard and Jan Mayen</option>
                        <option value="SZ">Swaziland</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syrian Arab Republic</option>
                        <option value="TW">Taiwan, Province of China</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania, United Republic of</option>
                        <option value="TH">Thailand</option>
                        <option value="TL">Timor-Leste</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UG">Uganda</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="UM">
                          United States Minor Outlying Islands
                        </option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE">
                          Venezuela, Bolivarian Republic of
                        </option>
                        <option value="VN">Viet Nam</option>
                        <option value="VG">Virgin Islands, British</option>
                        <option value="VI">Virgin Islands, U.S.</option>
                        <option value="WF">Wallis and Futuna</option>
                        <option value="EH">Western Sahara</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
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
                      <label className="sr-only" htmlFor="lead_for">
                        Choose your spa
                      </label>
                      <select
                        className="form-control"
                        id="lead_for"
                        name="lead_for"
                      >
                        <option value="hottub">Choose your spa...</option>
                        <option value="Swim SPA Series">Swim SPA Series</option>
                        <option value="Trident Series">Tident Series</option>
                        <option value="Nautical Series">Nautical Series</option>
                        <option value="Coastal Series">Coastal Series</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label className="sr-only" htmlFor="purchase_time_frame">
                        Planning to buy in...
                      </label>
                      <select
                        className="form-control"
                        id="purchase_time_frame"
                        name="purchase_time_frame"
                      >
                        <option value="">Planning to buy within...</option>
                        <option value="Within a month">A month</option>
                        <option value="1 to 3 months">2 to 3 months</option>
                        <option value="3 to 6 months">4 to 6 months</option>
                        <option value="6 to 12 months">7 to 12 months</option>
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
                        name="preferred_contact"
                        id="preferred_contact"
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
                      <label htmlFor="email_opt_in" className="checkbox-inline">
                        <input
                          id="email_opt_in"
                          type="checkbox"
                          name="email_opt_in"
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
