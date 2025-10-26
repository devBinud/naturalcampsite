import React from "react";
import styles from "./ctahome.module.css";
import { FaWhatsapp } from "react-icons/fa";

const CTAHome = () => {
  const whatsappNumber = "919706393924"; // your WhatsApp number
  const messageText = "Hi! I want to book a campsite.";

  const openWhatsApp = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      messageText
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className={styles.ctaSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Escape to the Wild, Reconnect with Nature
        </h2>
        <p className={styles.subtitle}>
          Tents • Campfires • Adventures Await
        </p>
        <button className={styles.ctaButton} onClick={openWhatsApp}>
          Book Your Campsite
        </button>
      </div>
    </div>
  );
};

export default CTAHome;
