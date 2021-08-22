import React, { ReactElement, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import { useStatus } from './ContextAPI/ContextProvider'
import Twexts from './Twexts/Twexts'
import AxiosWrapper from './utils/Requests/AxiosWrapper'

const App = (): ReactElement => {
  const [status, setStatus] = useStatus()
  useEffect(() => {
    AxiosWrapper.post('api/v1/twixies/sign_in')
      .then((ans) => {
        setStatus({ user: ans.data.twixy })
        console.info('Authenticated!')
      })
      .catch(() => { console.error('Unable to authenticate') })
  }, [status.user?.username])

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
