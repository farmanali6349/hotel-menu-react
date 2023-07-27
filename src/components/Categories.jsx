import React from 'react'
import './Categories.css'

export default function Categories({ categories, filterItems}) {
  return (
    <ul>
        <li onClick={()=> filterItems('all')}>All</li>
        {categories.map(category => {
            return <li onClick={()=> filterItems(category)} >{category}</li>;
        })}
    </ul>
  )
}
