import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <small class="text-muted">
                <a href="https://github.com/stersj/my-weather-app" target="_blank">
                    Open-source code
        </a>
        , by
        <a
                    href="https://www.linkedin.com/in/esther-sim-jensen-47bb3120/"
                    target="_blank"
                    class="profileLink"
                >
                    {" "}
          Esther Sim
        </a>
        , Hosted on
        <a href="https://condescending-kalam-ef4468.netlify.app/?">, Netlify</a>
            </small>
        </div>
    );
}
