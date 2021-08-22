import React, { Fragment, PropsWithChildren, ReactElement, ReactNode } from 'react'
import { Redirect } from 'react-router-dom'
import { useStatus } from '../ContextAPI/ContextProvider'

const Guarded = ({ children }: PropsWithChildren<ReactNode>): ReactElement => {
  const [status, setStatus] = useStatus()
  const content = () => {
    if (status.user) { return children } else { return <a href="/register">You need to register or login to continue.</a> }
  }
  return (
    <Fragment>
      {content()}
    </Fragment>)
}
export default Guarded
