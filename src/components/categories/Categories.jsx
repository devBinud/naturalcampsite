import React, { useEffect } from "react";

const TopFeaturesCampsite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Comfortable Tents",
      icon: "⛺",
      color: "#2e7d32",
    },
    {
      title: "Evening Bonfires",
      icon: "🔥",
      color: "#f4511e",
    },
    {
      title: "Nature Trails",
      icon: "🥾",
      color: "#1976d2",
    },
    {
      title: "Scenic Locations",
      icon: "📍",
      color: "#fbc02d",
    },
    {
      title: "Lakeside Activities",
      icon: "💧",
      color: "#0288d1",
    },
    {
      title: "Forest Exploration",
      icon: "🌳",
      color: "#388e3c",
    },
  ];

  return (
    <div style={{ padding: "40px 8%", backgroundColor: "#eaf5ef" }}>

      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div
              className="feature-icon"
              style={{
                fontSize: "48px",
                color: feature.color,
                marginBottom: "12px",
              }}
            >
              {feature.icon}
            </div>
            <span className="feature-title">{feature.title}</span>
          </div>
        ))}
      </div>

      <style>{`
        .features-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .feature-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          width: 150px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .feature-title {
          font-size: 14px;
          font-weight: 600;
          color: #1b3a2f;
        }

        /* Mobile horizontal scroll */
        @media (max-width: 768px) {
          .features-container {
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 10px;
            scrollbar-width: none;
          }
          .features-container::-webkit-scrollbar {
            display: none;
          }
          .feature-card {
            min-width: 140px;
          }
        }
      `}</style>
    </div>
  );
};

export default TopFeaturesCampsite;
