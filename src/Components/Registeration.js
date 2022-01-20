import React, { useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { AiTwotoneMail } from "react-icons/ai"
import Login from "./Login"
import "./Registeration.css"

function Registration() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [profession, setProfession] = useState("")

  const [flag, setFlag] = useState(false)
  const [login, setLogin] = useState(true)

  function handleFormSubmit(e) {
    e.preventDefault()

    if (!name || !email || !password || !phone || !profession) {
      setFlag(true)
    } else {
      setFlag(false)
      localStorage.setItem("sanskarEmail", JSON.stringify(email))
      localStorage.setItem("sanskarPassword", JSON.stringify(password))
      console.log("Saved in Local Storage")

      setLogin(!login)
    }
  }

  function handleClick() {
    setLogin(!login)
  }

  return (
    <div className="container">
      <div className="registerPage">
        <div className="form">
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3>Register</h3>

              <div className="form-group">
                {/* <label>Name</label> */}

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                {/* <label>Email</label> */}
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                {/* <label>Password</label> */}
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="form-group">
                {/* <label>Phone No.</label> */}
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Choose your Profession</label>
                <Form.Control
                  as="select"
                  onChange={(event) => setProfession(event.target.value)}
                >
                  <option>Select</option>
                  <option>Artist</option>
                  <option>Photographer</option>
                  <option>Team Player</option>
                  <option>Full Stack</option>
                </Form.Control>
              </div>

              <button type="submit" className="btn ">
                Register
              </button>
              <p onClick={handleClick}>Already registered log in?</p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </div>
  )
}

export default Registration
