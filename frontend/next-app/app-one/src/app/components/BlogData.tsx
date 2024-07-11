
"use client"
import {Blog} from '../interfaces/Blog'
import {useState,useEffect} from 'react'

 const BlogData:React.FC=()=>{

    const [comments,setComments]=useState<Blog[]>([])
    const [loading,setLoading]=useState<Boolean>(true)
    const [error,setError]=useState<string|null>(null)
    useEffect(()=>{
        const fetcher=async()=>{
            try{
                const response=await fetch('https://jsonplaceholder.typicode.com/comments');
                if(!response){
                    throw new Error("failed to fetch data")
                }
                const data:Blog[]=await response.json();
                setComments(data)


            }catch(error:any){
                setError(error.message)

            }finally{
                setLoading(false)

            }
        }
        fetcher();
    },[])

    {loading?<p>Loading</p>:<p>Error: {error}</p>}
    return(
        <div>
            <h1>Post Comments</h1>
            <ul>
                {comments.map((comment)=>(
                    <li key={comment.id}>
                        {comment.description}
                        {comment.name}
                        {comment.email}
                    </li>
                    
                ))}
            </ul>

        </div>

    )
}

export default BlogData;