import React, { ReactElement } from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Twexts from './Twexts/Twexts'

const App = (): ReactElement => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Twexts} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Container>
  )
}

export default App
