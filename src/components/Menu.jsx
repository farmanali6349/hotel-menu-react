import React from 'react'
import './Menu.css'
import MenuItem from './MenuItem'
import Categories from './Categories'


export default function Menu({items, filterItems, categories}) {
  return (
    <div className="menu-box">
        <Categories 
        filterItems = {filterItems}
        categories = {categories}
        />
    <section className='menu'>
        {items.map((item) => {
            return (
                <MenuItem 
                    img = {item.img}
                    title = {item.title}
                    desc = {item.desc}
                    category = {item.category}
                    price = {item.price}
                />
            )
        })}
    </section>
    </div>
  )
}
