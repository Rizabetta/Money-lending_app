import React from 'react';
import './Footer.scss';
import logo from '../../assets/svg/logo.svg'

const footerList = [
    {id:1, href:"# ", title: "About bank"},
    {id:2, href:"# ", title: "Ask a Question"},
    {id:3, href:"# ", title: "Quality of service"},
    {id:4, href:"# ", title: "Requisites"},
    {id:5, href:"# ", title: "Press center"},
    {id:6, href:"# ", title: "Bank career"},
    {id:7, href:"# ", title: "Investors"},
    {id:8, href:"# ", title: "Analytics"},
    {id:9, href:"# ", title: "Business and processes"},
    {id:10, href:"# ", title: "Compliance and business ethics"},
]

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__info">
                <a href="# "><img src={logo} className="footer_logo" alt="" /></a>
                <div className="footer_adress">
                    <a className="phone" href="tel:+74959842513">+7 (495) 984 25 13</a>
                    <a className="email" href="mailto:info@neoflex.ru">info@neoflex.ru</a>
                </div>
            </div>
            <ul className="footer__list">
            {footerList.map( item => <li key={item.id} className="footer__list-item">
                    <a href={item.href} className="footer__list-link">{item.title}</a>
                </li>)}
            </ul>
            <hr className="hr-line"></hr>
            <p>We use cookies to personalize our services and improve the user experience of our website. Cookies are
                small files containing information about previous visits to a website. If you do not want to use
                cookies, please change your browser settings</p>
        </div>
    </footer>
  );
}

export default Footer;
