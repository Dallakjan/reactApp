// import { useState } from 'react';
// // import Accordion from './components/Accordion';
// import Dropdown from './components/Dropdown';
// // import Search from './components/Search';
// import Translate from './components/Translate';

// const items = [
//   {
//     title: 'What is React',
//     content: 'React is front end javascript framework',
//   },
//   {
//     title: 'Why use React',
//     content: 'React is a fast and simple framework',
//   },
//   {
//     title: 'How to use React',
//     content: 'Use React components',
//   },
// ];

// // const options = [
// //   {
// //     label: 'The Color Red',
// //     value: 'red',
// //   },
// //   {
// //     label: 'The Color Green',
// //     value: 'green',
// //   },
// //   {
// //     label: 'The Shade of Blue',
// //     value: 'blue',
// //   },
// // ];

// function App() {
//   // const [selected, setSelected] = useState(options[0]);
//   // const [showDropdown, setShowDropdown] = useState(true);

//   return (
//     <div>
//       {/* <Search /> */}
//       <Translate />
//       {/* <button onClick={() => setShowDropdown(!showDropdown)}>
//         Toggle Dropdown
//       </button>
//       {showDropdown ? (
//         <Dropdown
//           options={options}
//           selected={selected}
//           onSelectedChange={setSelected}
//         />
//       ) : null} */}
//       {/* <Accordion items={items} /> */}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import axios from 'axios';
const { useState, useEffect } = React;

const URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Add code here to fetch some users with axios and the URL variable
    // then update the 'users' piece of state
    axios.get(URL).then(res => setUsers(res.data));
  }, [users]);

  console.log(users);

  const renderedUsers = users.map(user => {
    return <li key={user.id}>{user.name}</li>;
  });

  return <ul>{renderedUsers}</ul>;
};

export default App;
