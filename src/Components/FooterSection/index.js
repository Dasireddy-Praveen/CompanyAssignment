import {BsDiamondFill} from 'react-icons/bs'

import './index.css'

const FooterSection = () => (
  <div className="footer-main-container">
    <div>
      <h1 className="footer-heading">BE THE FIRST TO KNOW</h1>
      <p className="footer-discreption">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. this is simply dummy text.
      </p>
      <div>
        <input
          className="email-input"
          type="text"
          placeholder="Enter your e-mail..."
        />
        <button type="button" className="search-email-button">
          SEARCH
        </button>
      </div>
    </div>
    <hr className="footer-hr-line" />
    <div>
      <h2 className="callus-heading">CALL US</h2>
      <div className="number-email-container">
        <p className="number-email">+44 221 133 5360</p>
        <BsDiamondFill className="diamond-icon" />
        <p className="number-email">customercare@mettamuse.com</p>
      </div>
    </div>
    <hr className="footer-hr-line" />
    <div>
      <h2 className="callus-heading">CURRENCY</h2>
      <div className="number-email-container">
        <p className="number-email">+44 221 133 5360</p>
        <BsDiamondFill className="diamond-icon" />
        <p className="number-email">USD</p>
      </div>
    </div>
    <hr className="footer-hr-line" />
    <div className="mettā-muse-container">
      <h2 className="metta-heading">mettā muse</h2>
      <select className="mettā-muse-select">
        <option className="metta-option" value="About Us">
          About Us
        </option>
        <option className="metta-option" value="Stories">
          Stories
        </option>
        <option className="metta-option" value="Artisans">
          Artisans
        </option>
        <option className="metta-option" value="Boutiques">
          Boutiques
        </option>
        <option className="metta-option" value="Contact Us">
          Contact Us
        </option>
        <option className="metta-option" value="EU Compliances Docs">
          EU Compliances Docs
        </option>
      </select>
    </div>
    <hr className="footer-hr-line" />
    <div className="mettā-muse-container">
      <h2 className="metta-heading">QUICK LINKS</h2>
      <select className="mettā-muse-select">
        <option className="metta-option" value="Orders & Shipping">
          Orders & Shipping
        </option>
        <option className="metta-option" value="Join/Login as a Seller">
          Join/Login as a Seller
        </option>
        <option className="metta-option" value="Payment & Pricing">
          Payment & Pricing
        </option>
        <option className="metta-option" value="Return & Refunds">
          Return & Refunds
        </option>
        <option className="metta-option" value="FAQs">
          FAQs
        </option>
        <option className="metta-option" value="Privacy Policy">
          Privacy Policy
        </option>
        <option className="metta-option" value="Terms & Conditions">
          Terms & Conditions
        </option>
      </select>
    </div>
    <hr className="footer-hr-line" />
    <div />
  </div>
)
export default FooterSection
