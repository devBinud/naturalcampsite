import React from "react";
import styles from "./appointmentModal.module.css";

const AppointmentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles["appointmentModal-overlay"]}>
      <div className={styles["appointmentModal-modal"]}>
        <button
          className={styles["appointmentModal-closeButton"]}
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className={styles["appointmentModal-title"]}>
          Book an Appointment
        </h2>
        <form className={styles["appointmentModal-form"]}>
          <input
            type="text"
            placeholder="Full Name"
            className={styles["appointmentModal-input"]}
          />
          <input
            type="email"
            placeholder="Email Address"
            className={styles["appointmentModal-input"]}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className={styles["appointmentModal-input"]}
          />
          <textarea
            placeholder="Your Message"
            className={styles["appointmentModal-textarea"]}
          ></textarea>
          <button type="submit" className={styles["appointmentModal-submit"]}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
