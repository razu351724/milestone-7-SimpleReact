// export default function Todo({task}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// conditional rendering option 1:
// export default function Todo({task, isDone}){
    
//         if(isDone === true){
//             return <li>Finished: {task}</li>
//         }
//         else{
//             return <li> work one: {task}</li>
//         } 
// }

// conditional rendering option 2
// export default function Todo({task, isDone}){
//     if(isDone === true){
//      return <li>Finished: {task}</li>
//     }
//     return <li> work one: {task}</li>
// }

// conditional rendering 3: Ternary operator
// export default function Todo(task, isDone){
//     return(
//         <li> Finished: {isDone? 'Learn React': 'work on'}</li>
//     )
// }

// // conditional rendering option 4: && 
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone && ": Done"}</li>
//     )
// }

// conditional rendering option 5: ||
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone || ": Do it"}</li>
//     )
// }

// conditional rendering option 2 এর কপি 6
export default function Todo({task, isDone}){
    let listItem;
    if(isDone === true){
     listItem = <li>Finished: {task}</li>
    }
    else{
        listItem = <li> work one: {task}</li>
    }
    return listItem
}