import React from 'react'
import UserList from '../components/UserList'
import TodoList from '../components/TodoList'
import AuthForm from '../components/AuthForm'

const Index: React.FC = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <AuthForm />
      <UserList />
      <hr />
      <TodoList />
    </div>
  )
}

export default Index
