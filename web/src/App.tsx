import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { useActions } from './hooks/useActions'

const App = () => {
  const { fetchApp } = useActions()

  useEffect(() => {
    fetchApp()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
