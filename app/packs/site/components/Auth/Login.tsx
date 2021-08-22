import React, { Fragment, ReactElement } from 'react'
import { Button, Form } from 'react-bootstrap'
import FormInputPassword from '../Lib/FormInputPassword'
import FormInputText from '../Lib/FormInputText'
import AxiosWrapper from '../utils/Requests/AxiosWrapper'
import { Redirect } from 'react-router-dom'
import { useStatus } from '../ContextAPI/ContextProvider'

const Login = (): ReactElement => {
  const [status, setStatus] = useStatus()
  const [disable, setDisable] = React.useState(false)
  const [twixy, setTwixy] = React.useState({ username: '', password: '' })

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setDisable(true)
    AxiosWrapper.post('api/v1/twixies/sign_in', { twixy })
      .then((ans) => {
        setStatus({ user: ans.data.twixy })
        console.info('Authenticated!')
      }
      )
      .catch(() => { console.error('Unable to authenticate') })
    setDisable(false)
  }

  const handleTwixy = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTwixy(Object.assign({}, twixy, { [e.currentTarget.id]: e.currentTarget.value }))
  }

  return (
    <Fragment>
      <h1>Login into Twixo!</h1>
      <Form onSubmit={handleSubmit}>
        <FormInputText changeHandler={handleTwixy} field="username" label="User name" />
        <FormInputPassword changeHandler={handleTwixy} field="password" isNew={true} label="Password" />
        <Button disabled={disable} variant="primary" type="submit">Login</Button>
      </Form>
      {status.user && <Redirect to="/" />}
    </Fragment>
  )
}

export default Login
