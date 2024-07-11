import Button from '@/app/components/Button'
import UserList from '@/app/components/Users'
import BlogData from "@/app/components/BlogData"
import Form from "@/app/components/Form"
// optimise data fetching


export default function Home(){
  return(
    <main>
      <h1>Hello to Next play Ground</h1>
      <Button/>
      <UserList/>

      <br/>
      <BlogData/>

      <Form/>

      
    </main>
  )
}

