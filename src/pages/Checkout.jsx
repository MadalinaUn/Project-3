import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Container, Row, Col } from "reactstrap"

import Helmet from "../components/Helmet/Helmet"
import "../styles/checkout.css"

const Checkout = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount)
  const shippingCost = 30
  const totalAmount = cartTotalAmount + Number(shippingCost)

  const [enterName, setEnterName] = useState("")
  const [enterEmail, setEnterEmail] = useState("")
  const [enterNumber, setEnterNumber] = useState("")
  const [enterCountry, setEnterCountry] = useState("")
  const [enterCity, setEnterCity] = useState("")
  const [enterAddress, setEnterAddress] = useState("")

  const shippingInfo = []
  const submitHandler = (e) => {
    e.preventDefault()
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      address: enterAddress,
    }
    shippingInfo.push(userShippingAddress)
    console.log(shippingInfo)
  }

  return (
    <Helmet title="Checkout">
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h2 className="mb-4 mt-3">Shipping Address</h2>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    onChange={(e) => setEnterAddress(e.target.value)}
                  />
                </div>
                <button type="submit" className="addToCart__btn">
                  Payment
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h4>
                  Subtotal:<span>{cartTotalAmount} RON</span>
                </h4>
                <h4>
                  Shipping: <span>{shippingCost} RON</span>
                </h4>
                <h3>
                  Total: <span>{totalAmount} RON</span>
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout
