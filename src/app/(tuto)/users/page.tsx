import {
  User

} from './types'

import React from 'react'

export default async function Users (): Promise<React.JSX.Element> {
  const response = await fetch('http://localhost:3001/users')

  const users = await response.json()
  return (
    <>

      <h1>Utilisateurs</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <h2>{user.username}</h2>
            <p>{user.name}
              <br /><i>{user.email}</i>
            </p>

          </li>
        ))}
      </ul>

    </>
  )
}
