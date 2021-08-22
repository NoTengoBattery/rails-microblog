import React, { Fragment, ReactElement } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import FormInputArea from '../Lib/FormInputArea'
import Guarded from '../Lib/Guarded'
import AxiosWrapper from '../utils/Requests/AxiosWrapper'

const NewTwixt = (): ReactElement => {
  const [disable, setDisable] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [errors, setErrors] = React.useState({})
  const [twixt, setTwixt] = React.useState({ text: '' })

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setDisable(true)
    AxiosWrapper.post('api/v1/twixt', { twixt })
      .then(() => {
        setSuccess(true)
        console.info('Authenticated!')
      })
      .catch((ans) => { setErrors(ans.response.data.errors) })
    setDisable(false)
  }

  const handleTwixt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTwixt(Object.assign({}, twixt, { [e.currentTarget.id]: e.currentTarget.value }))
  }

  return (
    <Guarded>
      {success
        ? <Redirect to="/" />
        : <Fragment>
        <h1>Create a new twixt</h1>
        <Form onSubmit={handleSubmit}>
          <FormInputArea changeHandler={handleTwixt} errors={errors} field="text" label="Twixt" />
          <Button disabled={disable} variant="primary" type="submit">Send</Button>
        </Form>
      </Fragment>}
    </Guarded>
  )
}

export default NewTwixt
