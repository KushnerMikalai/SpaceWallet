import React from 'react'
import UserList from '../components/UserList'
import TodoList from '../components/TodoList'

const Index: React.FC = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <UserList />
      <hr />
      <TodoList />
    </div>
  )
}

export default Index
