import React, { useState } from "react"
import { Container, Row, Col } from "reactstrap"

import Helmet from "../components/Helmet/Helmet"
import products from "../assets/fake-data/products"
import ProductCard from "../components/UI/product-card/ProductCard"

import "../styles/Search.css"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [productData] = useState(products)

  return (
    <Helmet title="Search">
      <Container className="search__page">
        <Row>
          <Col lg="12">
            <div className="search__widget">
              <input
                type="text"
                placeholder="I'm looking for..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </Col>
          {productData
            .filter((item) => {
              if (searchTerm.value === "") return ""
              if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
                return item
            })
            .map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </Helmet>
  )
}

export default Search
