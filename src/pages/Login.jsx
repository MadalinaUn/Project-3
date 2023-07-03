import React, { useState } from "react"
import Helmet from "../components/Helmet/Helmet"
import { Container, Row } from "reactstrap"
import { Link } from "react-router-dom"
import "../styles/login.css"

const Login = () => {
  const [enterEmail, setEnterEmail] = useState("")
  const [enterPassword, setEnterPassword] = useState("")

  const dataLog = []
  const submitHandler = (e) => {
    e.preventDefault()
    const dataUser = {
      email: enterEmail,
      password: enterPassword,
    }
    dataLog.push(dataUser)
    console.log(dataLog)
  }

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            <form className="form" onSubmit={submitHandler}>
              <h3>Login</h3>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  onChange={(e) => setEnterEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  onChange={(e) => setEnterPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="addToCart__btn">
                Login
              </button>
            </form>
            <div className="link">
              <Link to="/register">
                <h4>Create an account</h4>
              </Link>
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login
