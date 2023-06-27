import React from "react"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"
import logo from "../../assets/iamages/logo.png"

import "../../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="logo footer__logo">
              <img src={logo} alt="Restaurant logo" />
              <h5>Good Food</h5>
            </div>
          </Col>
          <Col>
            <h4>Livrare</h4>
            <ListGroup>
              <ListGroupItem className="Delivery">
                <span>Luni - Sambata</span>
                <p>10:00 - 22:00</p>
              </ListGroupItem>
              <ListGroupItem className="Delivery">
                <span>Duminica</span>
                <p>10:00 - 20:00</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col>
            <h4>Contact</h4>
            <ListGroup>
              <ListGroupItem className="Delivery">
                <span>Phone: 0712345678</span>
              </ListGroupItem>
              <ListGroupItem className="Delivery">
                <span>Email: goodfood@gmail.com</span>
              </ListGroupItem>
              <ListGroupItem className="Delivery">
                <span>Locatie: Iasi, Romania</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
