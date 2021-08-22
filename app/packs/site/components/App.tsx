import React, { ReactElement, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import NewTwixt from './Twexts/NewTwixt'
import Twexts from './Twexts/Twexts'

const App = (): ReactElement => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Twexts} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <Route exact path="/twixt" component={NewTwixt} />
      </Switch>
    </Container>
  )
}

export default App
