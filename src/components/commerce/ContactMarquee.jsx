import { useState } from "react";
import { FaWhatsapp, FaPause, FaPlay } from "react-icons/fa6";
import { useStorefrontSettings } from "../../context/StorefrontSettingsContext";
import styles from "./ContactMarquee.module.css";

export function ContactMarquee() {
  const { settings } = useStorefrontSettings();
  const [paused, setPaused] = useState(false);
  const phone = String(settings.supportPhone || "+923104446529");
  const label = phone.replace(/^\+?92(\d{3})(\d{7})$/, "0$1 $2");
  const whatsapp = String(settings.whatsappPhone || phone).replace(/\D/g, "");
  const messages = [
    `Contact us: ${label}`,
    "Contact us to confirm current prices, installation and product availability.",
    `For branding and customization, contact support: ${label}.`,
  ];

  return (
    <aside className={styles.strip} aria-label="Contact and product enquiries">
      <FaWhatsapp className={styles.icon} aria-hidden="true" />
      <div className={styles.window}>
        <div className={`${styles.track} ${paused ? styles.paused : ""}`}>
          {[0, 1].map((copy) => (
            <div
              className={styles.group}
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {messages.map((message) => (
                <span className={styles.message} key={message}>
                  {message}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.pause}
          onClick={() => setPaused(!paused)}
          aria-pressed={paused}
          aria-label={paused ? "Resume contact ticker" : "Pause contact ticker"}
        >
          {paused ? (
            <FaPlay aria-hidden="true" />
          ) : (
            <FaPause aria-hidden="true" />
          )}
        </button>
        <a
          className={styles.cta}
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp us <span aria-hidden="true">↗</span>
        </a>
      </div>
    </aside>
  );
}
