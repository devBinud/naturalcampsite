import React from "react";
import { FaHeartbeat, FaStethoscope, FaUserMd } from "react-icons/fa";
import excellenceImg from "../../assets/b.jpg";

const CenterOfExcellence = () => {
  const items = [
    {
      icon: <FaHeartbeat size={30} color="#007c9d" />,
      title: "Advanced Dialysis Care",
      text: "State-of-the-art dialysis facilities ensuring patient comfort and safety.",
    },
    {
      icon: <FaStethoscope size={30} color="#007c9d" />,
      title: "Specialist Consultation",
      text: "Expert nephrologists providing personalized treatment plans.",
    },
    {
      icon: <FaUserMd size={30} color="#007c9d" />,
      title: "Dedicated Medical Team",
      text: "Compassionate professionals committed to your well-being.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        padding: "3rem 1rem",
        backgroundColor: "rgb(219, 226, 229)",
        fontFamily: "Figtree, sans-serif",
      }}
    >
      {/* Left Side Image - hidden on small screens */}
      <div
        style={{
          flex: "1 1 40%",
          minWidth: "300px",
          display: window.innerWidth <= 768 ? "none" : "block", // hide on mobile
        }}
      >
        <img
          src={excellenceImg}
          alt="Center of Excellence"
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      {/* Right Side Content */}
      <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            color: "#007c9d",
            marginBottom: "1.5rem",
            fontWeight: "700",
          }}
        >
          Our Centers of Excellence
        </h2>
        <div style={{ display: "grid", gap: "1.5rem" }}>
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                background: "#f9f9f9",
                padding: "1rem",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#e6f5f8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "0.3rem",
                    color: "#222",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#555",
                    lineHeight: "1.5",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CenterOfExcellence;
