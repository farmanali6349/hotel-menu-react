import { useState } from 'react';
import './App.css';
import data from './data'
import Menu from './components/Menu';

const tempArr = [];
data.forEach(item => {
  tempArr.push(item.category);
});
const categories = tempArr.filter((value, index) => (tempArr.indexOf(value) == index));

function App() {
  const [menuItems, setMenuItems] = useState(data)
  
  const filterItems = (category) => {
    if(category == 'all') {
      setMenuItems(data);
    } else {
      const filteredItems = data.filter(item => (item.category === category))
      setMenuItems(filteredItems)
    }
  }

  return (
    <main>
      <h1>My Hotel Menu</h1>
      <div></div>
      <Menu 
      items = {menuItems}
      filterItems = {filterItems}
      categories = {categories}
      />
    </main>
  );
}

export default App;
