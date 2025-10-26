import React from "react";
import { FaPlayCircle } from "react-icons/fa"; // ✅ Play icon
import styles from "./whatsnew.module.css";

const WhatsNew = () => {
  const updates = [
    {
      title: "Featured Video: Osmossion Journey",
      image: "https://img.youtube.com/vi/hfKDA5kbL5o/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=hfKDA5kbL5o",
      isVideo: true,
    },
    {
      title: "How to Take care of Healthy Kidney",
      image: "https://img.youtube.com/vi/YGbQSfyoXSg/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=YGbQSfyoXSg",
      isVideo: true,
    },
    {
      title: "Kidney Function Tests (KFT's) Explained",
      image: "https://img.youtube.com/vi/e5R6tzJCCgw/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=e5R6tzJCCgw",
      isVideo: true,
    },
  ];

  const openVideo = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={styles["whatsNew-section"]}>
      <div className={styles["whatsNew-container"]}>
        <h2 className={styles["whatsNew-title"]}>News and Events</h2>
        <p className={styles["whatsNew-subtitle"]}>
          Stay updated with the latest happenings, achievements, and upcoming events.
        </p>


        <div className={styles["whatsNew-grid"]}>
          {updates.map((item, idx) => (
            <div
              key={idx}
              className={`${styles["whatsNew-card"]} ${item.isVideo ? styles["whatsNew-cardVideo"] : ""
                }`}
              onClick={() => item.videoUrl && openVideo(item.videoUrl)}
              style={{ cursor: item.videoUrl ? "pointer" : "default" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className={styles["whatsNew-cardImage"]}
              />
              <div className={styles["whatsNew-overlay"]}></div>

              {/* Video Play Icon Overlay */}
              {item.isVideo && (
                <div className={styles["whatsNew-playIcon"]}>
                  <FaPlayCircle size={64} />
                  <p className={styles["whatsNew-watchText"]}>Watch on YouTube</p>
                </div>
              )}

              <div className={styles["whatsNew-cardContent"]}>
                <p className={styles["whatsNew-cardTag"]}>
                  {item.isVideo ? "Featured Video" : "Latest Update"}
                </p>
                <h3 className={styles["whatsNew-cardTitle"]}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className={styles["whatsNew-buttonWrapper"]}>
          <button className={styles["whatsNew-button"]}>EXPLORE MORE →</button>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
