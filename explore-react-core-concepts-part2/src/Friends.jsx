import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'
export default function Friends(){

    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setFriends(data))
    }, [])

    return(
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(frend => <Friend friend={frend}></Friend>)
            }
        </div>
    )
}
/*
1. state to hold data
2. use effect with dependency array 
3. use fetch to load data
4. set loaded data to the state
5. display data on the component
*/