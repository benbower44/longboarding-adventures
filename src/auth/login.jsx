import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./login.css"
import { getUserByEmail } from "../components/services/userServices"

export const Login = () => {
    const [email, set] = useState("")
    const navigate = useNavigate()
  
    const handleLogin = (e) => {
      e.preventDefault()
  
      return getUserByEmail(email).then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0]
          localStorage.setItem(
            "longboarder",
            JSON.stringify({
              id: user.id,
            })
          )
  
          navigate("/")
        } else {
          window.alert("Invalid login")
        }
      })
    }
  
    return (
      <main className="auth-container">
        <section>
          <form className="auth-form" onSubmit={handleLogin}>
            <h1 className="header">Longboarding</h1>
            <h2>Please sign in</h2>
            <fieldset className="auth-fieldset">
              <div>
                <input
                  type="email"
                  value={email}
                  className="auth-form-input"
                  onChange={(evt) => set(evt.target.value)}
                  placeholder="Email address"
                  required
                  autoFocus
                />
              </div>
            </fieldset>
            <fieldset className="auth-fieldset">
              <div>
                <button type="submit" className="auth-button">Sign in</button>
              </div>
            </fieldset>
          </form>
        </section>
        <section className="register-link">
          <Link to="/register">Not a member? Register here</Link>
        </section>
      </main>
    )
  }
  