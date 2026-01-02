import { defineAction, type ActionAPIContext } from 'astro:actions';
import { z } from 'astro/zod';
import ky from 'ky';



const login=()=>{

  const input= z.object({
      email: z.string().email(),
      password:z.string().min(6)
    })



  const handler=async (inp:z.infer<typeof input>,ctx:ActionAPIContext) => {

        const res=await ky.post(`${import.meta.env.PUBLIC_SERVER_ORIGIN}/v1/auth/login`,{
           body:JSON.stringify(inp),
           headers:{
            // Accept:'application/json',
            "Content-type":"application/json"
           }
        })

         console.log(await res.json())

    console.log(inp)

        //console.log(new Response(await res.blob()))

       return `Hello, ${inp.email}!`
    }


  return defineAction({handler,input,accept:'form'})

}

export const server = {

  login:login()

}