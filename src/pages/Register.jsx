import React, { useState } from "react"
import Helmet from "../components/Helmet/Helmet"
import { Container, Row } from "reactstrap"
import { Link } from "react-router-dom"
import "../styles/login.css"

const Register = () => {
  const [enterFirstName, setEnterFirstName] = useState("")
  const [enterLastName, setEnterLastName] = useState("")
  const [enterEmail, setEnterEmail] = useState("")
  const [enterPassword, setEnterPassword] = useState("")
  const [enterConfirmPassword, setEnterConfirmPassword] = useState("")

  const data = []
  const submitHandler = (e) => {
    e.preventDefault()
    const dataUser = {
      firstName: enterFirstName,
      lastName: enterLastName,
      email: enterEmail,
      password: enterPassword,
      confirmPassword: enterConfirmPassword,
    }
    data.push(dataUser)
    console.log(data)
  }

  return (
    <Helmet title="Register">
      <section>
        <Container>
          <Row>
            <form className="form" onSubmit={submitHandler}>
              <h3>Register</h3>
              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  required
                  onChange={(e) => setEnterFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  required
                  onChange={(e) => setEnterLastName(e.target.value)}
                />
              </div>
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
              <div className="form-group">
                <label>Confirm password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  required
                  onChange={(e) => setEnterConfirmPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="addToCart__btn">
                Sign Up
              </button>
            </form>
            <div className="link">
              <Link to="/login">
                <h4>Already have an account? Login</h4>
              </Link>
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Register
