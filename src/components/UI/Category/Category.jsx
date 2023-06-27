import React from "react"

import { Container, Row, Col } from "reactstrap"

import pizzaImg from "../../../assets/iamages/pizza.png"
import pasteImg from "../../../assets/iamages/paste.png"
import burgerImg from "../../../assets/iamages/burger.png"
import desertImg from "../../../assets/iamages/desert.png"

import "../../../../src/styles/Category.css"

const categoryData = [
  {
    display: "Pizza",
    imgUrl: pizzaImg,
  },
  {
    display: "Paste",
    imgUrl: pasteImg,
  },
  {
    display: "Burger",
    imgUrl: burgerImg,
  },
  {
    display: "Desert",
    imgUrl: desertImg,
  },
]

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4">
            <div className="category__item">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h4>{item.display}</h4>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Category
