import Accordion from './components/Accordion';

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

function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
