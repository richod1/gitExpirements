"use client"

import {useState} from 'react'


export default function Form(){
    const [status,setStatus]=useState<String>('typing')
    const [answer,setAnswer]=useState<string>("")
    const [error,setError]=useState<any>(null)

    {status=="success"?<h1>That is correct</h1>:<h1>That is wrong</h1>}

    async function handleSubmit(event:any){
        event.preventDefault()
        setStatus("submitting")
        try{
            await setSubmitForm(answer)
            setStatus("success")

        }catch(error:any){
            setStatus("typing")
            setError(error)

        }
    }

    function handleTeaxtAreaChange(event:any){
        setAnswer(event.target.value)
    }
    return(
        <div>
            <h2>Welcome to city quiz</h2>
            <h3> In which city is there a billboard that turns air into drinkable water?</h3>
            <form onSubmit={handleSubmit}>
                <textarea value={answer} onChange={handleTeaxtAreaChange}
                    disabled={status==='submitting'}/>
                    <br/>

                    <button disabled={
                        answer.length===0|| status==="submitting"

                    }>Submit</button>
                    {error !== null && 
                    <p className="Error">
                        {error.message}
                    </p>
                    }

            </form>

        </div>

    )
}

function setSubmitForm(answer:string){
    return new Promise<void>((resolve,reject)=>{
        setTimeout(()=>{
            let shouldError=answer.toLowerCase() !=='lima';
            if(shouldError){
                reject(new Error("Good guess but that is wrong"))
            }else{
                resolve()
            }

        },1500)
    })

}