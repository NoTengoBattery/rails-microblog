import React, { ReactElement } from 'react'
import { Form } from 'react-bootstrap'

export declare interface FormInputPasswordProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  errors?: { [key: string]: [string]; },
  field: string,
  isNew: boolean,
  label: string,
  muted?: string
}

const FormPasswordText = ({ changeHandler, errors, field, isNew, label, muted }: FormInputPasswordProps): ReactElement => {
  const myErrors = Object.prototype.hasOwnProperty.call(errors, field) ? errors[field] : []
  const errorFields = () => {
    const fields = []
    for (let i = 0; i < myErrors.length; i++) {
      const message = myErrors[i]
      fields.push(<Form.Text key={`${field}-error-${i}`} className="text-danger d-block mt-0">{`${label} ${message}`}</Form.Text>)
    }
    return fields
  }
  return (
    <Form.Group className="mb-3" controlId={field}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="password" autoComplete={`${isNew ? 'new-' : ''}password`} onChange={changeHandler} placeholder={`Type your ${label.toLowerCase()}`} />
      {muted && <Form.Text className="text-muted d-block mt-0">{muted}</Form.Text>}
      {errorFields()}
    </Form.Group>
  )
}

export default FormPasswordText
