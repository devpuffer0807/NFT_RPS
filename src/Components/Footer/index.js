import React from "react"
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";


import LogoImg from "../../assets/image/header/logo.png"

import "../../assets/css/Footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-site-detail">
                <img src={LogoImg} alt="" />
                    <p>
                        Copyright @ 2022 rollbit.com. All rights reserved. Rollbit is a brand name of Bull Gaming N.V. Company Address <br/><br/>
                        Bull Gaming N.V. payments can be processed by WINGAMING SUPPORT LIMITED (Registration Number HE406701). Company Address:  <br/><br/>
                        Crypto trading is not gambling, and therefore not covered by our gaming license
                    </p>
            </div>
            <div className="footer-info">
                <h4>Platform</h4>
                <p>Support</p>
                <p>FAQ</p>
                <p>Partnership Program</p>
                <p>Blog</p>
                <p>Help Center</p>
            </div>
            <div className="footer-info">
                <h4>About Us</h4>
                <p>AML Policy</p>
                <p>Sports</p>
                <p>Responsible Gaming</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
            <div className="footer-info">
                <h4>Communnity</h4>
                <div className="footer-communnity-container">
                    <div className="footer-communnity-icon">
                        <FaFacebookSquare color="#A7A8A9" size={18}/>
                    </div>
                    <div className="footer-communnity-icon">
                        <FaTwitter color="#A7A8A9" size={18}/>
                    </div>
                    <div className="footer-communnity-icon">
                        <FaInstagram color="#A7A8A9" size={18}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer