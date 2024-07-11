"use client"


import {User} from  '@/app/interfaces/User'
import {useState,useEffect} from 'react'


export default function Users(){
    const [users,setUsers]=useState<User[]>([])
    const [loading,setLoading]=useState<Boolean>(true)
    const [error,setError]=useState<string|null>(null)

    useEffect(()=>{
        const fetchUsers=async()=>{
            try{
                const response=await fetch('https://jsonplaceholder.typicode.com/users')
                if(!response){
                    throw new Error('Data failed')
                }

                const data :User[]=await response.json();
                setUsers(data);
            }catch(error:any){
                setError(error.message)

            }finally{
                setLoading(false)
            }
        }
        fetchUsers();
    }, [])

    {loading?<p>Loading...</p>:<p>Error : {error}</p>}
    return(
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>
                        {user.name} === {user.email}
                    </li>
                ))}
            </ul>
        </div>

    )
}