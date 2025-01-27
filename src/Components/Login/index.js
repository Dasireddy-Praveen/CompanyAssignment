import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const url = 'https://fakestoreapi.com/auth/login'

    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'GET',
    })
    const jsondate = await response.json()
    console.log(jsondate)
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password} = this.state

    return (
      <form className="form-container" onSubmit={this.submitForm}>
        <div className="login-container">
          <h1 className="login-heading">Login</h1>
          <label htmlFor="username" className="user-name">
            Username
          </label>
          <br />
          <input
            value={username}
            onChange={this.onChangeUsername}
            id="username"
            className="name-input"
            type="text"
          />
          <br />
          <label htmlFor="password" className="user-name">
            Password
          </label>
          <br />
          <input
            value={password}
            onChange={this.onChangePassword}
            id="password"
            className="name-input"
            type="password"
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
      </form>
    )
  }
}

export default Login
