import React, { Component } from 'react'
import './App.css'

export class Login extends Component {

  state = {
    username: '',
    password: '',
  }

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit(e) {
    e.preventDefault()
    const { username, password } = this.state
    this.props.onLogin({ username, password })
  }

  handleChange = (field, e) => {
    this.setState({ [field]: e.target.value })
  }

  render() {
    const { error } = this.props

    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={(e) => this.handleChange('username', e)}
            type={'text'}
            placeholder={'Tu nombre'}
            value={this.state.username}
          />
          <input
            onChange={(e) => this.handleChange('password', e)}
            type={'password'}
            placeholder={'Nuestra fecha'}
            value={this.state.password}
          />
          <button type={'submit'}>Mandale cumbia</button>
        </form>
        {
          error &&
          <div>Nop. Intenta de vuelta. :o</div>
        }
      </div>
    )
  }
}