import React from "react";
import styles from "./campsiteShowcase.module.css";

const CampsiteShowcase = () => {
  const packages = [
    {
      title: "2 Days 1 Night Adventure Camp",
      description:
        "Enjoy a cozy tent stay with bonfire, BBQ dinner, and morning nature walk. Perfect for weekend explorers.",
      price: "₹2,999 / person",
      image:
        "https://plus.unsplash.com/premium_photo-1692640262231-45b566e70f7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      amenities: ["Tent Stay", "Bonfire", "BBQ Dinner", "Morning Trek"],
    },
    {
      title: "3 Days 2 Nights Nature Escape",
      description:
        "Reconnect with nature — forest trail, riverside camping, kayaking, and stargazing with delicious meals.",
      price: "₹2,499 / person",
      image:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      amenities: ["Kayaking", "Meals Included", "Hiking", "Campfire Nights"],
    },
    {
      title: "Luxury Riverside Tent Stay",
      description:
        "Glamping-style luxury tents with private deck, buffet meals, soft beds, and peaceful riverside mornings.",
      price: "₹1,999 / person",
      image:
        "https://images.unsplash.com/photo-1534187886935-1e1236e856c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388",
      amenities: ["Luxury Tent", "Private Deck", "Buffet Meals", "Riverside View"],
    },
  ];

  return (
    <section className={styles.campsiteSection}>
      <div className={styles.campsiteHeader}>
        <h2 className={styles.campsiteTitle}>Discover Our Camping Packages</h2>
        <p className={styles.campsiteSubtitle}>
          Choose your perfect stay and create unforgettable memories under the stars.
        </p>
      </div>

      <div className={styles.campsiteGrid}>
        {packages.map((pkg, index) => (
          <div key={index} className={styles.campsiteCard}>
            <div className={styles.campsiteImageWrapper}>
              <img src={pkg.image} alt={pkg.title} className={styles.campsiteImage} />
              <div className={styles.campsitePrice}>{pkg.price}</div>
            </div>
            <div className={styles.campsiteContent}>
              <h3 className={styles.campsitePackageTitle}>{pkg.title}</h3>
              <p className={styles.campsiteDescription}>{pkg.description}</p>
              <ul className={styles.amenitiesList}>
                {pkg.amenities.map((a, i) => (
                  <li key={i} className={styles.amenityItem}>• {a}</li>
                ))}
              </ul>
              <button className={styles.bookNowBtn}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampsiteShowcase;
