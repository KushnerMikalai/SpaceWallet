import React, { useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const Index: React.FC = () => {
  const { account } = useTypedSelector(state => state.app)
  const { fetchLogin, fetchApp } = useActions()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await fetchLogin({ email, password })
    fetchApp()
  }

  const formStyle = {
    border: '1px solid #ccc',
    padding: '1rem',
    fontSize: '20px',
    margin: '0 auto',
    width: '40rem',
    minHeight: '300px',
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={formStyle}
      >
        <label>
          <span>Email:</span>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          <span>Password:</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button>Auth</button>
      </form>
      {JSON.stringify(account)}
    </div>
  )
}

export default Index
