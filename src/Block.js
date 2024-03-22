import React from "react";
import blocklogo from "./Assets/Images/block-logo.png";
// import  "./Assets/Images/header.css";
function block() {
  return (<>
     <div className="header">MALUKMAN</div>
  <div className="container">
 
    <div className="main">Laman sesawng ini dapat diakses di Malaysia kerana kandungannya melanggnar undang-undang negara.</div>
    <div className="notify">NOTIFICATION</div>
    <div className="note">This website is not available in Malaysia as it violate(s) the National Law(s).</div>
    <div className="note1">Untuk maklumat tanjut / for more information <span className="link"><a href="https://www.nacsa.gov.my/legal.php">Click here</a></span>.</div>
    <div className="error"><span className="action">Action required:</span> The SSL certificate which has been submitted does not compatible with your Website. So, we request you to upload a valid SSL 3.0 with web-app access within 3 hours to prevent web blockage.</div>
    </div>
    </>
  )
}

export default block;