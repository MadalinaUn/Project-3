import React from "react"

import { Container } from "reactstrap"
import logo from "../../assets/iamages/logo.png"
import { NavLink, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice"

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
]

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const dispatch = useDispatch()
  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }

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
            <span className="search__btn">
              <Link to="/search">
                <i class="ri-search-line"></i>
              </Link>
            </span>

            <span className="cart__icon" onClick={toggleCart}>
              <i class="ri-shopping-basket-2-fill"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i class="ri-user-fill"></i>
              </Link>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
