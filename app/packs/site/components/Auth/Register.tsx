import React, { Fragment, ReactElement } from 'react'
import { Button, Form } from 'react-bootstrap'
import FormInputPassword from '../Lib/FormInputPassword'
import FormInputText from '../Lib/FormInputText'
import AxiosWrapper from '../utils/Requests/AxiosWrapper'
import { Redirect } from 'react-router-dom'
import { useStatus } from '../ContextAPI/ContextProvider'

const Register = (): ReactElement => {
  const [status, setStatus] = useStatus()
  const [disable, setDisable] = React.useState(false)
  const [errors, setErrors] = React.useState({})
  const [twixy, setTwixy] = React.useState({ email: '', full_name: '', username: '', password: '', password_confirmation: '' })

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setDisable(true)
    AxiosWrapper.post('api/v1/twixies', { twixy })
      .then(() => { console.info('Authenticated!') })
      .catch((ans) => { setErrors(ans.response.data.errors) })
    setDisable(false)
  }

  const handleTwixy = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTwixy(Object.assign({}, twixy, { [e.currentTarget.id]: e.currentTarget.value }))
  }

  return (
    status.user
      ? <Redirect to="/" />
      : <Fragment>
      <h1>Register into Twixo!</h1>
      <Form onSubmit={handleSubmit}>
        <FormInputText changeHandler={handleTwixy} errors={errors} field="username" label="User name" />
        <FormInputText changeHandler={handleTwixy} errors={errors} field="full_name" label="Full name" />
        <FormInputText changeHandler={handleTwixy} errors={errors} field="email" label="Email" muted="We never share your email address." />
        <FormInputPassword changeHandler={handleTwixy} errors={errors} field="password" isNew={true} label="Password" muted="Use a strong or random password." />
        <FormInputPassword changeHandler={handleTwixy} errors={errors} field="password_confirmation" isNew={true} label="Password confirmation" />
        <Button disabled={disable} variant="primary" type="submit">Register</Button>
      </Form>
      <a href="/login">Login</a>
    </Fragment>
  )
}

export default Register
