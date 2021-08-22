
import React, { ReactElement } from 'react'
import { Card, CardProps } from 'react-bootstrap'
import { User } from '../ContextAPI/ContextProvider'

interface UserCardProps extends CardProps {
    user?: User
}

const UserCard = ({ user }: UserCardProps): ReactElement => {
  return (
        <Card style={{ width: '18rem' }}>  <Card.Body>
            <Card.Title>{user?.username}</Card.Title>
            <Card.Text>
                Followers: {user?.followers}<br />
                Following: {user?.following}
            </Card.Text>
        </Card.Body>
        </Card>
  )
}
export default UserCard
