import React, { ReactElement, useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'
import Guarded from '../Lib/Guarded'
import UserCard from '../Lib/UserCard'
import AxiosWrapper from '../utils/Requests/AxiosWrapper'

const Follwers = (): ReactElement => {
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    AxiosWrapper.get(`api/v1/followers?page=${page}`)
      .then((ans) => {
        setList(ans.data)
        if (ans.data.length === 0) setPage(page > 1 ? page - 1 : 1)
      })
  }, [list.length, page])
  const userList = () => {
    const users = []
    for (const i in list) {
      users.push(<UserCard key={`user-${i}`} user={list[i]} mine={false} />)
    }
    return users
  }
  return (
    <Guarded>
      <h1>Following</h1>
      {userList()}
      <Pagination>
        <Pagination.First onClick={() => { setPage(1) }} />
        <Pagination.Prev onClick={() => { setPage(page > 1 ? page - 1 : 1) }} />
        <Pagination.Ellipsis disabled key="before" />
        <Pagination.Item active>{page}</Pagination.Item>
        <Pagination.Ellipsis disabled key="after" />
        <Pagination.Next onClick={() => { setPage(page + 1) }} />
      </Pagination>
    </Guarded>
  )
}

export default Follwers
