import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import './task.css'
import { CSS } from '@dnd-kit/utilities'

const task = ({ id, task }) => {

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

    const style = { 
        transform: CSS.Transform.toString(transform),
        transition,
    }
  return (
    <div className="task" ref={setNodeRef} style={style} {...attributes} {...listeners}>
         
         <input type="checkbox" id={id} name={task} value={task} />
         <label htmlFor={id}>{task}</label>
    </div>
  )
} 

export default task