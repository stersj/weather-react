import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <small class="text-muted">
        <a href="https://github.com/stersj/weather-react">Open-source code</a>,
        by
        <a
          href="https://www.linkedin.com/in/esther-sim-jensen-47bb3120/"
          class="profileLink"
        >
          {" "}
          Esther Sim
        </a>
        , Hosted on
        <a href="https://eager-edison-a06de0.netlify.app/">, Netlify</a>
      </small>
    </div>
  );
}
