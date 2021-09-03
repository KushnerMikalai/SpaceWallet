import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { useGetAppQuery } from './store/services/appService'
import { useChackTokensQuery } from './store/services/authService'

const App = () => {
  useChackTokensQuery(null)
  useGetAppQuery(null)

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
