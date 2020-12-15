import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-filling"></div>
      <footer className="page-footer bg-primary text-white fixed-bottom">
        <div className="footer-copyright text-center py-3">
          © 2020 America Andina:
          <a className="text-white pl-2" href="/">
            america-andina.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
