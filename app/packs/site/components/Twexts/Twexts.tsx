import React, { Dispatch, ReactElement } from 'react'
import { ApplicationStatus, Dispatcher, useStatus } from '../ContextAPI/ContextProvider'
import Guarded from '../Lib/Guarded'
import UserCard from '../Lib/UserCard'

const Twexts = (): ReactElement => {
  const [status, setStatus]: [ApplicationStatus, Dispatcher] = useStatus()
  return (
    <Guarded>
      <h1>Twixo</h1>
      <a href="/twixt">Write a twixt</a>
      <UserCard user={status.user} mine={true}></UserCard>
    </Guarded>
  )
}

export default Twexts
