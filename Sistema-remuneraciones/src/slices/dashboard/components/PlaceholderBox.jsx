import React from "react";

export default function PlaceholderBox({ label = "Próximamente" }) {
  return (
    <div className="placeholder-box">
      {label}
    </div>
  );
}
