import React, { ReactElement } from 'react'
import { Form } from 'react-bootstrap'

export declare interface FormInputAreaProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  errors?: { [key: string]: [string]; },
  field: string,
  label: string,
  muted?: string
}

const FormInputArea = ({ changeHandler, errors, field, label, muted }: FormInputAreaProps): ReactElement => {
  const myErrors = errors && Object.prototype.hasOwnProperty.call(errors, field) ? errors[field] : []
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
      <Form.Control as="textarea" rows={3} type={field} autoComplete={field} onChange={changeHandler} placeholder={`Type your ${label.toLowerCase()}`} />
      {muted && <Form.Text className="text-muted">{muted}</Form.Text>}
      {errorFields()}
    </Form.Group>
  )
}

export default FormInputArea
