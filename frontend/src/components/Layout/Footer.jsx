import React, { useContext } from "react";
import { Context } from "../../main";


const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Team ApplyNow</div> 
    </footer>
  );
};

export default Footer;
