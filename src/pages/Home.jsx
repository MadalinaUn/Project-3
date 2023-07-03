import React from "react"

import Helmet from "../components/Helmet/Helmet"
import { Container, Row } from "reactstrap"

import chefImg from "../assets/iamages/chef.png"
import Category from "../components/UI/Category/Category"

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <img src={chefImg} alt="Bucatarii nostri" className="w-80%" />
            <h2>
              Expertii nosti asteapta sa va incante cu cele mai delicioase
              preparate!
            </h2>
          </Row>
        </Container>
      </section>
      <br />
      <br />
      <br />
      <section>
        <Category />
      </section>
      <br />
      <br />
      <br />
    </Helmet>
  )
}

export default Home
