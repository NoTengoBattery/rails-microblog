import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Twexts from './Twexts/Twexts'

const App: React.FunctionComponent = (): ReactElement => {
  return (
      <Switch>
        <Route exact path="/" component={Twexts} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
  )
}

export default App
