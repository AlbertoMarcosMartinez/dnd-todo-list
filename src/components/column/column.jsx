import React from 'react'
import './column.css'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Task from '../task/task'

const Column = ({ tasks }) => {
  return (
    <div className="column">
      <SortableContext items={tasks.map(task => task.id)} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Task key={task.id} id={task.id} task={task.text} />
        ))}
      </SortableContext>
    </div>
  )
}

export default Column