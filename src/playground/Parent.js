import React, { useState } from "react";

function Parent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    if (e.target.name === "username") setUsername(e.target.value);
    else setPassword(e.target.value);
  };

  const handleReset = (e) => {
    if (e.target.preveious.name === "username") setUsername("");
    else setPassword("");
  };

  return (
    <div>
      <input name="username" onChange={handleInput} />
      <button onClick={handleReset}>초기화</button>
      <br />
      <input name="password" onChange={handleInput} />
      <button onClick={handleReset}>초기화</button>
      <div>{`username: ${username} password: ${password}`}</div>
    </div>
  );
}

export default Parent;

// const DataContext = React.createContext();

// export default function Parent() {

//     const [count, setCount] = useState(0);

//         return (
//             <DataContext.Provider value={count}>
//               <div>
//                 Parent{' '}
//                 <button onClick={() => {
//                     setCount(count +1 )
//                 }}>+</button> count displayed from Parent: {count}
//                 <Child />
//               </div>
//             </DataContext.Provider>
//         )
// }

// export default class Parent extends Component {

//     state = {
//         count: 0
//     };

//     render() {
//         return (
//             <DataContext.Provider value={this.state.count}>
//               <div>
//                 Parent{' '}
//                 <button onClick={() => {
//                     this.setState({
//                         count: this.state.count + 1
//                     })
//                 }}>+</button> count displayed from Parent: {this.state.count}
//                 <Child />
//               </div>
//             </DataContext.Provider>
//         )
//     }
// }
