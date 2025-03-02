import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Todo } from './types';

const toDo: Todo = {
  name: 'something',
  priority: 1,
  completed: false,
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App toDo={toDo} />
  </StrictMode>,
)
