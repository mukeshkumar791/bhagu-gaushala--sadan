import React, { useEffect, useState } from "react";

export default function DiwaliPopup() {
  const [open, setOpen] = useState(false);
  const storageKey = "gaushala_diwali_popup_shown";

  useEffect(() => {
    const shown = localStorage.getItem(storageKey);
    if (shown !== "true") {
      const timer = setTimeout(() => setOpen(true), 1000); // 1 sec delay
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = (dontShowAgain = false) => {
    setOpen(false);
    if (dontShowAgain) localStorage.setItem(storageKey, "true");
  };

  if (!open) return null;

  return (
    <div style={overlay} onClick={(e) => e.target === e.currentTarget && closePopup()}>
      <div style={card}>
        <button style={closeBtn} onClick={() => closePopup()} aria-label="close">
          ×
        </button>
        <h2>🎆 Happy Diwali — Bhagu Gaushala 🎇</h2>
        <p>
          Is Diwali par gau-sewa mein hissa le!  
          Daan karen aur prerna failayen ✨
        </p>
        <a href="/donate" style={btn}>
          🕉️ Donate Now
        </a>
        <div style={{ marginTop: 12 }}>
          <label>
            <input
              type="checkbox"
              onChange={(e) => e.target.checked && closePopup(true)}
            />{" "}
            Aage se mat dikhana
          </label>
        </div>
      </div>
    </div>
  );
}

// --- inline styles ---
const overlay = {
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0,0,0,0.6)",
  zIndex: 9999,
};
const card = {
  background: "#fff",
  padding: 24,
  borderRadius: 12,
  maxWidth: 480,
  width: "90%",
  textAlign: "center",
  position: "relative",
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
};
const closeBtn = {
  position: "absolute",
  right: 10,
  top: 6,
  background: "transparent",
  border: "none",
  fontSize: 22,
  cursor: "pointer",
};
const btn = {
  display: "inline-block",
  marginTop: 10,
  padding: "10px 18px",
  textDecoration: "none",
  background: "#ffcc00",
  borderRadius: 8,
  color: "#000",
  fontWeight: "bold",
};
