import { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

const items = [
  {
    title: 'What is React',
    content: 'React is front end javascript framework',
  },
  {
    title: 'Why use React',
    content: 'React is a fast and simple framework',
  },
  {
    title: 'How to use React',
    content: 'Use React components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Shade of Blue',
    value: 'blue',
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Search /> */}
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
      {/* <Accordion items={items} /> */}
    </div>
  );
}

export default App;
