import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>
        {todo.text}
      </span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </Button>
      </div>
    </div>
  )
}

function Todolist() {
  const [todos, setTodos] = React.useState([
    {
      text: 'Skartovat složky 297 - 299',
      isDone: false,
    },
    {
      text: 'Zkontrolovat novou vězeňkyni na její cele',
      isDone: false,
    },
    {
      text: 'Vytřít prázdné cely',
      isDone: false,
    },
  ])
  const markTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isDone = true
    setTodos(newTodos)
  }

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="todolist">
      <div className="container">
        <h1 className="text-left mb-4">Úkoly od majora</h1>
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Todolist
