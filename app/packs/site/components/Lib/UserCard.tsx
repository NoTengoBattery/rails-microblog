
import React, { ReactElement, useState } from 'react'
import { Button, Card, CardProps } from 'react-bootstrap'
import { User } from '../ContextAPI/ContextProvider'
import AxiosWrapper from '../utils/Requests/AxiosWrapper'

interface UserCardProps extends CardProps {
    user?: User,
    mine: boolean
}

const UserCard = ({ user, mine }: UserCardProps): ReactElement => {
  const [follows, setFollows] = useState(user?.following)
  const follow = () => {
    AxiosWrapper.post('api/v1/follows', { follow: { username: user?.username } })
      .then(() => { setFollows(true) })
  }
  const unfollow = () => {
    AxiosWrapper.patch('api/v1/follows', { follow: { username: user?.username } })
      .then(() => { setFollows(false) })
  }
  return (
        <Card style={{ width: '18rem' }}>  <Card.Body>
            <Card.Title>{user?.fullName} (@{user?.username})</Card.Title>
            <Card.Text>
                Followers: {
                    mine ? <a href="/followers">{user?.followers}</a> : user?.followers
                }<br />
                Following: {
                    mine ? <a href="/following">{user?.followings}</a> : user?.followings
                }
            </Card.Text>
            {follows ? <Button onClick={unfollow}>Unfollow</Button> : <Button onClick={follow}>Follow</Button>}
        </Card.Body>
        </Card>
  )
}
export default UserCard
