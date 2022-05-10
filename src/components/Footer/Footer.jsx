import React from "react";
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-in-flex">
          <div className="links">
            <h4>ePallet</h4>
            <p>
              Any feedback or questions? <br /> Contact us on our social media
            </p>
            <ul className="link-ul">
              <li>
                <i class="bx bxl-facebook"></i>
              </li>
              <li>
                <i class="bx bxl-twitter"></i>
              </li>
              <li>
                <i class="bx bxl-instagram"></i>
              </li>
            </ul>
          </div>

          <div className="foot-grid">
            <div className="menu">
              <h4>For Customer</h4>
              <ul>
                <li>Return</li>
                <li>Payment Account</li>
                <li>Policies</li>
                <li>Personal Assistents</li>
                <li>Shipping Tracking</li>
              </ul>
            </div>

            <div className="service">
              <h4>For Vendors</h4>
              <ul>
                <li>Pricing</li>
                <li>Shipping Requirements</li>
                <li>Balance Recharge</li>
                <li>How to Advertise</li>
              </ul>
            </div>

            <div className="inform">
              <h4>Company</h4>
              <ul>
                <li>About</li>
                <li>Jobs</li>
                <li>Press Kit</li>
                <li>Contact</li>
                <li>Contact</li>
                <li>Privacy and Terms</li>

              </ul>
            </div>

            <div className="apps">
              <h4>Help Center</h4>
              <ul>
                <li>Shipping Rates and Policies</li>
                <li>Returns and Replacements</li>
                <li>Menage Your Account</li>
                <li>ePallet Assistant</li>
                <li>Help</li>

              </ul>
            </div>
          </div>
        </div>

        <div className="copy">
          <p>Copyright Ⓒ 2021 ePallet. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
