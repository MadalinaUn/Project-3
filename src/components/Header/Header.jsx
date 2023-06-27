import React from "react"

import { Container } from "reactstrap"
import logo from "../../assets/iamages/logo.png"
import { NavLink, Link } from "react-router-dom"

import "../../styles/Header.css"

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
]

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper">
          <div className="logo">
            <img src={logo} alt="Restaurant logo" />
            <h3>Good Food</h3>
          </div>
          <div className="navigation">
            <div className="menu">
              {nav__links.map((item, index) => (
                <NavLink to={item.path} key={index}>
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="nav__right">
            <span className="cart__icon">
              <i class="ri-shopping-basket-2-fill"></i>
              <span className="cart__badge">2</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i class="ri-user-fill"></i>
              </Link>
            </span>

            <span className="mobile__menu">
              <i class="ri-menu-5-fill"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
