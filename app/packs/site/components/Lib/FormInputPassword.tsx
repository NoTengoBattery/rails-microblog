import React, { ReactElement } from 'react'
import { Form } from 'react-bootstrap'

export declare interface FormInputTextProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  field: string,
  isNew: boolean,
  label: string,
  muted?: string
}

const FormInputText = ({ changeHandler, field, isNew, label, muted }: FormInputTextProps): ReactElement => {
  return (
    <Form.Group className="mb-3" controlId={field}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="password" autoComplete={`${isNew ? 'new-' : ''}password`} onChange={changeHandler} placeholder={`Type your ${label.toLowerCase()}`} />
      {muted && <Form.Text className="text-muted">{muted}</Form.Text>}
    </Form.Group>
  )
}

export default FormInputText
