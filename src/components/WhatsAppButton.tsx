import React from "react";

const phoneNumber = "918303011760"; // Updated number

const handleClick = () => {
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

const WhatsAppButton: React.FC = () => {
  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        backgroundColor: "#25D366",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: 56,
        height: 56,
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        cursor: "pointer",
        zIndex: 1000,
        fontSize: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span style={{ fontSize: 32 }}>🟢</span>
    </button>
  );
};

export default WhatsAppButton;