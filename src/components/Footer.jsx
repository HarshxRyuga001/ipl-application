import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#0f172a",
    color: "#ffffff",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const sectionsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    width: "100%",
  };

  const rowStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
  };

  const columnStyle = {
    flex: "1",
    minWidth: "250px",
    marginBottom: "20px",
  };

  const headingStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const linkStyle = {
    color: "#cbd5e1",
    fontSize: "14px",
    textDecoration: "none",
    display: "block",
    marginBottom: "5px",
  };

  const iconContainerStyle = {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  };

  const iconStyle = {
    width: "30px",
    height: "30px",
    backgroundColor: "#1e293b",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    fontSize: "16px",
    cursor: "pointer",
  };

  const copyrightStyle = {
    marginTop: "30px",
    fontSize: "13px",
    color: "#94a3b8",
    textAlign: "center",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionsStyle}>
          <div style={rowStyle}>
            {/* Section 1 */}
            <div style={columnStyle}>
              <div style={headingStyle}>IPL Score Tracker</div>
              <p style={{ fontSize: "14px", color: "#cbd5e1" }}>
                The ultimate destination for IPL cricket fans to stay updated
                with live scores, team standings, and match schedules.
              </p>
            </div>

            {/* Section 2 */}
            <div style={columnStyle}>
              <div style={headingStyle}>Quick Links</div>
              <a href="#" style={linkStyle}>
                Live Scores
              </a>
              <a href="#" style={linkStyle}>
                Schedule
              </a>
              <a href="#" style={linkStyle}>
                Teams
              </a>
              <a href="#" style={linkStyle}>
                Stats
              </a>
              <a href="#" style={linkStyle}>
                News
              </a>
            </div>

            {/* Section 3 */}
            <div style={columnStyle}>
              <div style={headingStyle}>Connect With Us</div>
              <div style={iconContainerStyle}>
                <div style={iconStyle}>T</div>
                <div style={iconStyle}>F</div>
                <div style={iconStyle}>I</div>
                <div style={iconStyle}>↓</div>
              </div>
              <p style={{ fontSize: "14px", color: "#cbd5e1" }}>
                Download our mobile app for a better experience
              </p>
            </div>
          </div>
        </div>

        <div style={copyrightStyle}>
          © 2025 IPL Score Tracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
