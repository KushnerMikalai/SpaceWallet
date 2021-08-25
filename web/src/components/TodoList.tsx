import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const TodoList: React.FC = () => {
  const {page, limit, error, todos, loading} = useTypedSelector(state => state.todo)
  const pages = [1, 2, 3, 4, 5]
  const { fetchTodos, setTodoPage } = useActions()

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page]) // eslint-disable-line react-hooks/exhaustive-deps

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {loading ?
        <h1 style={{
          height: '180px',
          margin: 0,
          cursor: 'progress'
        }}>Loading todos...</h1> :
        <ul style={{margin: 0}}>
          {todos.map(todo => <li key={todo.id}>{todo.id} - {todo.title}</li>)}
        </ul>
      }
      <div style={{display: 'flex', marginTop: '10px'}}>
        {pages.map(p =>
          <div
            key={p}
            onClick={() => setTodoPage(p)}
            style={{
              border:p === page ? '2px solid green' :  '1px solid gray',
              padding: 10,
              cursor: 'pointer'
            }}
          >
            {p}
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoList
