import { SmartLink } from "../../PolicyPage.shared.jsx";

export function StandardServicePolicySection() {
  return (
    <section aria-labelledby="standard-service-policy">
      <h2 id="standard-service-policy">Standard Service Policy</h2>
      <div className="accordion-item">
        <button className="accordion-button">
          <span>1. Scope of Services</span>
          <svg
            className="accordion-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className="accordion-content">
          <div className="accordion-content-inner">
            <p>Zvolta offers the following core services:</p>
            <ul>
              <li>Access to publicly available EV charging stations</li>
              <li>
                Mobile app for locating, reserving, and managing charging
                sessions
              </li>
              <li>Charging session management (start, stop, monitor usage)</li>
              <li>Real-time updates on station availability and status</li>
              <li>
                Customer support and assistance for charging-related issues
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button className="accordion-button">
          <span>2. Service Availability</span>
          <svg
            className="accordion-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className="accordion-content">
          <div className="accordion-content-inner">
            <ul>
              <li>
                Charging stations are generally available 24/7 unless otherwise
                indicated at a specific location.
              </li>
              <li>
                Access to stations is subject to availability and on a
                first-come, first-served basis unless a reservation has been
                made through our platform.
              </li>
              <li>
                Services may be temporarily unavailable due to: Maintenance,
                Technical issues, Power supply interruptions, or Regulatory
                requirements.
              </li>
            </ul>
            <p>
              Zvolta will make reasonable efforts to communicate service outages
              or planned maintenance in advance through our app or website.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button className="accordion-button">
          <span>3. Service Standards</span>
          <svg
            className="accordion-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className="accordion-content">
          <div className="accordion-content-inner">
            <p>Zvolta is committed to:</p>
            <ul>
              <li>
                Providing safe, functional, and regularly maintained charging
                equipment
              </li>
              <li>
                Offering accurate information about station status and
                availability
              </li>
              <li>
                Responding to customer queries and support requests within 24
                hours
              </li>
              <li>
                Ensuring all energy provided meets the applicable local
                standards and regulations
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button className="accordion-button">
          <span>4. Customer Responsibilities</span>
          <svg
            className="accordion-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className="accordion-content">
          <div className="accordion-content-inner">
            <p>Users of Zvolta services agree to:</p>
            <ul>
              <li>
                Use the charging stations responsibly and in accordance with
                posted instructions
              </li>
              <li>
                Ensure that your vehicle is compatible with the charging
                equipment
              </li>
              <li>Not damage, vandalize, or misuse any equipment</li>
              <li>
                Promptly remove your vehicle after the charging session is
                complete
              </li>
              <li>
                Maintain your mobile app credentials securely and notify us of
                unauthorized use
              </li>
              <li>
                Pay all applicable fees as displayed before or during the
                charging session
              </li>
            </ul>
            <p>
              Zvolta reserves the right to suspend or deny service in the event
              of non-compliance with these responsibilities.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button className="accordion-button">
          <span>5. Charging Fees and Payment</span>
          <svg
            className="accordion-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className="accordion-content">
          <div className="accordion-content-inner">
            <ul>
              <li>
                All charging sessions are subject to fees based on time, energy
                delivered (kWh), or session type, as specified at the time of
                use.
              </li>
              <li>
                Payments must be made through the Zvolta app via integrated
                third-party payment gateways.
              </li>
              <li>
                Zvolta does not collect or store any card or banking
                information.
              </li>
              <li>
                Users must ensure sufficient account balance or linked payment
                method before initiating a charging session.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button className="accordion-button">
          <span>6. Service Limitations and Liability</span>
          <svg
            className="accordion-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className="accordion-content">
          <div className="accordion-content-inner">
            <p>
              While we strive for uninterrupted service, Zvolta does not
              guarantee:
            </p>
            <ul>
              <li>Continuous availability of charging stations</li>
              <li>Compatibility of all EV models with our infrastructure</li>
              <li>Error-free mobile or web application access</li>
            </ul>
            <p>To the extent permitted by law, Zvolta is not liable for:</p>
            <ul>
              <li>Indirect or consequential losses</li>
              <li>Vehicle damage resulting from misuse of our equipment</li>
              <li>
                Delays, outages, or inability to charge due to factors beyond
                our control (e.g., grid failure, weather, third-party
                interference)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button className="accordion-button">
          <span>7. Safety and Compliance</span>
          <svg
            className="accordion-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className="accordion-content">
          <div className="accordion-content-inner">
            <p>
              Zvolta complies with all national electrical safety regulations
              and guidelines applicable in Pakistan.
            </p>
            <p>
              Users must follow on-site safety signage, mobile app instructions,
              and local laws during the charging process.
            </p>
            <p>
              Any incidents, faults, or safety issues must be reported
              immediately via our customer support channels.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button className="accordion-button">
          <span>8. Customer Support</span>
          <svg
            className="accordion-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className="accordion-content">
          <div className="accordion-content-inner">
            <p>Our customer support team is available to assist with:</p>
            <ul>
              <li>Technical issues at charging stations</li>
              <li>Billing queries or payment errors</li>
              <li>Reporting damaged or non-functional equipment</li>
              <li>
                General inquiries about locations, features, or account
                management
              </li>
            </ul>
            <p>
              <b>Support Channels:</b>
              <br />
              Email:{" "}
              <SmartLink href="mailto:support@zvolta.com">
                support@zvolta.com
              </SmartLink>
              <br />
              Phone:{" "}
              <SmartLink href="tel:+923104446529">+923104446529</SmartLink>
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button className="accordion-button">
          <span>9. Modifications to Service</span>
          <svg
            className="accordion-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className="accordion-content">
          <div className="accordion-content-inner">
            <p>Zvolta reserves the right to:</p>
            <ul>
              <li>Modify service features</li>
              <li>Change pricing structures</li>
              <li>Add, remove, or relocate charging stations</li>
              <li>Update this policy from time to time</li>
            </ul>
            <p>
              We will notify users through our website or app when significant
              changes occur.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button className="accordion-button">
          <span>10. Governing Law</span>
          <svg
            className="accordion-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div className="accordion-content">
          <div className="accordion-content-inner">
            <p>
              This policy is governed by the laws of the Islamic Republic of
              Pakistan, and any disputes related to services shall fall under
              the exclusive jurisdiction of Pakistani courts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
