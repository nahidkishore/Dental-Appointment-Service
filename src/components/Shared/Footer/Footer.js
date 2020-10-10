import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faGoogle,faInstagram } from "@fortawesome/free-brands-svg-icons";
import FooterCol from './FooterCol';
import './Footer.css';

const noNamed = [
  {name: "Emergency Dental Care" , link: "/emergency"},
  {name: "Check Up" , link: "/checkup"},
  {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
  {name: "Tooth Extraction" , link: "/tooth-extract"},
  {name: "Check Up" , link: "/checkup"},
]
const ourAddress = [
  {name: "New York - 101010 Hudson" , link: "//google.com/map"},
  {name: "Yards" , link: "//google.com/map"},
 
]
const oralHealth = [
  {name: "Emergency Dental Care" , link: "/emergency"},
  {name: "Check Up" , link: "/checkup"},
  {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
  {name: "Tooth Extraction" , link: "/tooth-extract"},
  {name: "Check Up" , link: "/checkup"},
  {name: "Check Up" , link: "/checkup"},
  {name: "Check Up" , link: "/checkup"}
]
const services = [
  {name: "Emergency Dental Care" , link: "/emergency"},
  {name: "Check Up" , link: "/checkup"},
  {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
  {name: "Tooth Extraction" , link: "/tooth-extract"},
  {name: "Check Up" , link: "/checkup"},
  {name: "Check Up" , link: "/checkup"},
  {name: "Check Up" , link: "/checkup"}
]
const Footer = () => {
  return (
    <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebook} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGoogle} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+8801688815749</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
  );
};

export default Footer;