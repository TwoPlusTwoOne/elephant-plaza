import React, { Component } from 'react'
import './App.css'
import { Login } from './Login'
import { login } from './loginController'
import './mongodb'
import { mongoProxy } from './proxies/mongoProxy'

export class App extends Component {

  state = {
    authenticated: false,
    error: '',
  }

  handleLogin = ({ username, password }) => {
    const result = login(username, password)

    console.log({ result })

    if (result) this.setState({ authenticated: true })
    else this.setState({ error: 'sip' })
  }

  render() {
    console.log('mongoProxy:', mongoProxy.getUri())
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hola Bambi :)
          </p>
          {
            this.state.authenticated
              ? <img alt={'Nada aqui'} src={'/b232f589-f9e0-457f-8fac-18c837af4e3d.JPG'}/>
              : <Login error={this.state.error} onLogin={this.handleLogin}/>
          }
        </header>
      </div>
    )
  }
}