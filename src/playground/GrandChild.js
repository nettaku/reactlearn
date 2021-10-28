import React, { Component, useContext } from 'react';
import DataContext from './dataContext';

export default function GrandChild() {

    const count = useContext(DataContext);

    return (
        <div>
            GrandChild count displayed form GrandChild: {count}
        </div>
    )
}

// export default class GrandChild extends Component {
//     render() {
//         return (
//             <DataContext.Consumer>
//               { count =>
//               <div>
//                 GrandChild count displayed form GrandChild: {count}
//               </div>}
//             </DataContext.Consumer>
//         )
//     }
// }