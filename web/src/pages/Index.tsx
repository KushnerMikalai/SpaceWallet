import React from 'react'
import AuthForm from '../components/AuthForm'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Index: React.FC = () => {
  const { error } = useTypedSelector(state => state.auth)

  return (
    <div>
      <AuthForm />
      {error}
    </div>
  )
}

export default Index
