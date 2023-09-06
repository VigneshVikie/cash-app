import React from "react";
import appstore from "./assets/appstore.svg";
import playstore from "./assets/playstore.svg";
import dropdown from "./assets/dropdown.svg";
import twitch from "./assets/twitch.svg";
import twitter from "./assets/twitter.svg";
import insta from "./assets/insta.svg";

const Footer = () => {
  return (
    <footer>
      <div className="btn">
        <button className="appstore">
          <img src={appstore} alt="" />
          APP STORE
        </button>
        <button className="playstore">
          <img src={playstore} alt="" />
          GOOGLE PLAY
        </button>
      </div>
      <div className="dropdown">
        <img src={dropdown} alt="" />
      </div>
      <div className="right-footer">
        <div className="txt">
          <p>
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App Investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </p>
        </div>
        <div className="social-handels">
          <img className="twitch" src={twitch} alt="" />
          <img className="twitter" src={twitter} alt="" />
          <img className="insta" src={insta} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
