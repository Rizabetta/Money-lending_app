import React from 'react';
import './Header.scss';

const menuList = [
    {id:1, href:"/loan", title: "Credit card"},
    {id:2, href:"# ", title: "Product"},
    {id:3, href:"# ", title: "Account"},
    {id:4, href:"# ", title: "Resources"},
]

function Header() {
  return (
    <header className="header">
        <div className="header__container">
            <a href="/" className="header_logo">NeoBank</a>
            <input type="checkbox" id="burger"></input>
            <label htmlFor="burger"></label>
            <nav className="menu">
                <ul className="menu__list">
                {menuList.map( item => <li key={item.id} className="menu__list-item">
                        <a href={item.href} className="menu__list-link">{item.title}</a>
                    </li>)}
                </ul>
            </nav>
            <button className="defaultButton">Online Bank</button>
        </div>
    </header>
  );
}

export default Header;
