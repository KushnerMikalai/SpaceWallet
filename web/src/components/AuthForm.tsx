import React, { useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Index: React.FC = () => {
  const { account } = useTypedSelector(state => state.app)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(`email => ${email}`)
    console.log(`password => ${password}`)
    // TODO FETCH AUTH
  }

  const formStyle = {
    border: '1px solid #ccc',
    padding: '1rem',
    margin: '1rem',
    width: '40rem'
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
