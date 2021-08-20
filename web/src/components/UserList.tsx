import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const UserList: React.FC = () => {
  const {users, error, loading} = useTypedSelector(state => state.user)
  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return <h1>Loading users...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map(user =>
        <div key={user.id}>{user.name}</div>
      )}
    </div>
  )
}

export default UserList