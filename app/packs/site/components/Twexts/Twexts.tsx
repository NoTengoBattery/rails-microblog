import React, { ReactElement } from 'react'
import { Button } from 'react-bootstrap'
import Guarded from '../Lib/Guarded'

const Twexts = (): ReactElement => {
  return (
  <Guarded>
    <h1>Twixo</h1>
        <a href="/twixt">Write a twixt</a>
  </Guarded>
  )
}

export default Twexts
