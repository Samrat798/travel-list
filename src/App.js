import { useState } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

// const initialItems = [
//   { id: 1, description: 'Passports', quantity: 2, packed: false },
//   { id: 2, description: 'Socks', quantity: 12, packed: true },
//   { id: 3, description: 'Charger', quantity: 1, packed: false },
// ];

function App() {
  const [items, setItems] = useState([]);

  function handelAddItem(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handelAddItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
