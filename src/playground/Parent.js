import React, { useState, useRef, useEffect } from 'react';

function Parent() {
   
    const initialUsers = [{id: 1, name: 'harry', email: 'harry@master.com', active: true},
    {id: 2, name: 'sabrina', email: 'sabrina@sexy.com', active: false},
    {id: 3, name: 'kacka', email: 'kacka@cute.com', active: false}]
    
    const [users, setUsers] = useState(initialUsers)

    const nextId = useRef(4)

    const handleCreate = (name, email) => {
            setUsers([...users, {
                id: nextId.current,
                name,
                email
            }])
            nextId.current += 1;
    }

    const handleUpdate = (id, name, email) => {
        const index = users.findIndex(user => user.id === id);
        const newUsers = [...users];
        newUsers[index] = { id, name, email };
        setUsers(newUsers);
    }

    const handleDelete = (id) => {
        const newUsers = users.filter(user => user.id !== id);
        setUsers(newUsers);
    }

    const handleChangeStatus = (id) => {
        setUsers(users.map(user => user.id === id ? 
            {...user, active: !user.active } : user
        ));
    }

    return (
        <>
        <UserList users={users} 
        onUpdate={handleUpdate} 
        onDelete={handleDelete}
        onChangeStatus={handleChangeStatus}/>
        <CreateUser onCreate={handleCreate}/>
        </>
    )
}

const DeleteUser = ({ id, onDelete}) => {
    return (
    <button onClick={() => onDelete(id)}>delete</button>
    )
}

const UserList = ({ users, onUpdate, onDelete, onChangeStatus }) => {

    return (
        <ul>
            {users.map(user => <User key={user.id}
                user={user} onUpdate={onUpdate} onDelete={onDelete} onChangeStatus={onChangeStatus}
            />)}
        </ul>
    )
}

const User = ({ user, onUpdate, onDelete, onChangeStatus }) => {

    useEffect(() => {
        console.log('mount');
        return () => console.log('unmount');
    }, [])

    return (
        <li key={user.id}>
                {user.id}<span style={{ cursor: 'pointer', backgroundColor: user.active ? 'green': 'white'}} onClick={() => onChangeStatus(user.id)}>{user.name}</span> {user.email}{' '}
                <UpdateUser id={user.id} onUpdate={onUpdate}/>
                <DeleteUser id={user.id} onDelete={onDelete}/>
               </li>
    )
}

const CreateUser = ({ onCreate }) => {

    const [user, setUser] = useState({
        name: '',
        email: ''
    });
    const {name, email} = user;

    const handleInput = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
        <input name="name" placeholder="name" onChange={handleInput} value={name}/>
        <input name="email" placeholder="email" onChange={handleInput} value={email}/>
        <button onClick={() => { setUser({name: '', email: ''}); onCreate(name, email)}}>add</button>
        </>
    );
}


const UpdateUser = ({ id, onUpdate }) => {

    const [user, setUser] = useState({
        name: '',
        email: ''
    });
    const {name, email} = user;

    const handleInput = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
        <input name="name" placeholder="name" onChange={handleInput} value={name}/>
        <input name="email" placeholder="email" onChange={handleInput} value={email}/>
        <button onClick={() => { setUser({name: '', email: ''}); onUpdate(id, name, email)}}>update</button>
        </>
    );
}

export default Parent




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
