import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faWhatsapp, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <>
            <style>{`
                .footerContainer {
                    background-color: #000000;
                    padding: 40px 20px;
                }

                .footerRow {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }

                .footerColumn {
                    flex: 1;
                    min-width: 250px;
                    padding: 0 15px;
                    margin-bottom: 30px;
                }

                .logo {
                    font-size: 40px;
                    font-family: 'Montserrat';
                    font-weight: bold;
                    color: #99edc3;
                    text-align: left;
                    margin-bottom: 20px;
                }

                .text {
                    color: #ffffff;
                    text-align: left;
                    font-size: 16px;
                    margin-bottom: 10px;
                }

                .socialIcons {
                    margin-top: 20px;
                }

                .head {
                    color: #99edc3;
                    font-size: 22px;
                    text-align: left;
                    margin-top: 15px;
                    margin-bottom: 28px;
                    font-weight: 500;
                }

                .mapContainer {
                    margin-top: 40px;
                }

                .footerBottom {
                    background-color: #111;
                    padding: 20px;
                    text-align: center;
                    color: #99edc3;
                    position: relative;
                }

                .whatsapp {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    background-color: #014938;
                    padding: 15px;
                    border-radius: 50%;
                    color: white;
                    font-size: 24px;
                    z-index: 1000;
                }

                .icon {
                    font-size: 25px;
                    margin: 0 10px;
                    color: #99edc3;
                    transition: color 0.3s ease;
                }

                .icon:hover {
                    color: #ffffff;
                }

                .email, .phone {
                    color: #ffffff;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .email:hover, .phone:hover {
                    color:#99edc3;
                    text-decoration: underline;
                }

                @media (max-width: 992px) {
                    .logo { font-size: 35px; }
                    .text { width: 230px; }
                }

                @media (max-width: 600px) {
                    .logo { font-size: 28px; }
                    .head { font-size: 17px; }
                    .text, .bottom { font-size: 14px; }
                }

                @media (max-width: 575px) {
                    .footerColumn { padding-left: 30%; }
                }

                @media (max-width: 455px) {
                    .footerColumn { padding-left: 20%; }
                }

                @media (max-width: 350px) {
                    .footerColumn { padding-left: 10%; }
                    .text { width: 100%; }
                }
            `}</style>

            {/* Main Footer */}
            <div className="footerContainer">
                <div className="footerRow">
                    {/* Company Info */}
                    <div className="footerColumn">
                        <p className="logo">MATAA GARI VENTURES</p>
                        <p className="text">Kenya, East-Africa, Africa</p>
                        <div className="socialIcons">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="icon" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="icon" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTiktok} className="icon" />
                            </a>
                            <a href="https://wa.me/254796383719" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="footerColumn">
<<<<<<< HEAD
                        <p className="head">Spare Parts Sales</p>
                        <p className="text">Spare Parts Fixing</p>
                        <p className="text">Trade in</p>
                        <p className="text">Consultations</p>
=======
                        <p className="head">Our Services</p>
                        <p className="text">Spare Parts Sales</p>
                        <p className="text">Installation Services</p>
                        <p className="text">Technical Consultations</p>
>>>>>>> 12e8bc4 (Mataa banaeii)
                    </div>

                    {/* Head Office */}
                    <div className="footerColumn">
                        <p className="head">Head Office</p>
                        <p className="text">
                            <a href="https://maps.app.goo.gl/ShaboJDkChK8aoTS7" target="_blank" rel="noopener noreferrer">
                                Nairobi, Kirinyaga road, MSP plaza Ground Flr, store G0
                            </a>
                        </p>
                        <p className="text">
                            <a href="mailto:info@mataagariventures.com" className="email">
                                <FontAwesomeIcon icon={faEnvelope} /> info@mataagariventures.com
                            </a>
                        </p>
                        <p className="text">
                            <a href="tel:+254707687930" className="phone">
                                <FontAwesomeIcon icon={faPhone} /> (254) 796383719
                            </a>
                        </p>
                    </div>

                    {/* Opening Hours */}
                    <div className="footerColumn">
                        <p className="head">Opening Hours</p>
                        <p className="text">Mon - Sat : 8:00 - 17:00</p>
                        <p className="text">Sun : Closed</p>
                    </div>
                </div>
            </div>

            {/* Embedded Map */}
            <div className="mapContainer">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7977.642348753518!2d36.81513759092368!3d-1.2810010448272573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-1.2841!2d36.8155!4m5!1s0x182f1100386fdc9d%3A0xdb804be92cb64fa4!2sPRCG%2B283%2C%20Kirinyaga%20Rd%2C%20Nairobi!3m2!1d-1.2799844!2d36.825804999999995!5e0!3m2!1sen!2ske!4v1741603646832!5m2!1sen!2ske"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    title="Location Map"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Footer Bottom */}
            <div className="footerBottom">
                <p><strong>MATAA GARI VENTURES LIMITED</strong></p>
                <p>Copyright © {new Date().getFullYear()}. All rights reserved.</p>
                <a href="https://wa.me/254796383719" target="_blank" rel="noopener noreferrer" className="whatsapp">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
            </div>
        </>
    );
};

export default Footer;
