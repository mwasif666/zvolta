import { SmartLink } from "../../PolicyPage.shared.jsx";

export function ReturnsPolicySection() {
  return (
    <section aria-labelledby="returns-policy">
      <h2 id="returns-policy">Returns Policy</h2>
      <div className="accordion-item">
        <button className="accordion-button">
          <span>1. No Returns or Exchanges</span>
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
              Electricity, once delivered and consumed through a charging
              session, cannot be returned, recovered, or reversed. As such, we
              do not offer returns or exchanges for any completed charging
              transactions.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button className="accordion-button">
          <span>2. Exceptions</span>
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
              While we do not offer returns, in certain cases you may be
              eligible for a partial or full refund, solely at our discretion,
              if:
            </p>
            <ul>
              <li>
                A charging session was not completed due to a technical fault at
                the charging station, and you were billed incorrectly;
              </li>
              <li>
                The charging session was interrupted before any electricity was
                delivered;
              </li>
              <li>There was a system error or double charging occurred.</li>
            </ul>
            <p>
              To request a refund under these exceptional cases, please contact
              our support team within 24 hours of the charging session with the
              following information:
            </p>
            <ul>
              <li>Date and time of charging session</li>
              <li>Charging station location</li>
              <li>Transaction ID or payment reference</li>
              <li>Description of the issue</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button className="accordion-button">
          <span>3. Contact for Support</span>
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
              For any queries regarding billing or technical faults, please
              contact us at:
              <br />
              Zvolta Private Limited
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
          <span>4. Governing Law</span>
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
              This Returns Policy is governed by the laws of the Islamic
              Republic of Pakistan, and any disputes will be subject to the
              exclusive jurisdiction of the Pakistani courts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
