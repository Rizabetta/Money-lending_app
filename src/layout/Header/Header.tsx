import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { RouteNames } from "../../routers/routes";
import { Button } from "../../components/UI";

const menuList = [
  { id: 1, href: RouteNames.LOAN, title: "Credit card" },
  { id: 2, href: RouteNames.NOT, title: "Product" },
  { id: 3, href: RouteNames.NOT, title: "Account" },
  { id: 4, href: RouteNames.NOT, title: "Resources" },
];

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? "menu__list-activelink" : "menu__list-link";

function Header() {
  const prop = {
    className: "defaultButton",
    title: "Online Bank",
  };

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header_logo">
          NeoBank
        </a>
        <input type="checkbox" id="burger"></input>
        <label htmlFor="burger"></label>
        <nav className="menu">
          <ul className="menu__list">
            {menuList.map((item) => (
              <li key={item.id} className="menu__list-item">
                <NavLink to={item.href} className={setActive}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Button {...prop} />
      </div>
    </header>
  );
}

export { Header };
