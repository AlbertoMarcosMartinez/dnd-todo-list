import React, { useState } from 'react'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'
import Column from './components/column/column'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Hacer la compra' },
    { id: '2', text: 'Limpiar la casa' },
    { id: '3', text: 'Hacer la tarea' },
    { id: '4', text: 'Estudiar para el examen' },
    { id: '5', text: 'Leer un libro' },
    { id: '6', text: 'Hacer ejercicio' },
    { id: '7', text: 'Cocinar la cena' }
  ])

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (active.id !== over.id) {
      const oldIndex = tasks.findIndex(task => task.id === active.id)
      const newIndex = tasks.findIndex(task => task.id === over.id)

      setTasks(arrayMove(tasks, oldIndex, newIndex))
    }
  }

  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <Column tasks={tasks} />
      </DndContext>
    </div>
  )
}

export default App
