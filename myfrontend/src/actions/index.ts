import { defineAction, type ActionAPIContext } from 'astro:actions';
import { z } from 'astro/zod';
import ky from 'ky';
import type { ApiResponseType } from '../../types';



const login=()=>{

  const input= z.object({
      email: z.string().email(),
      password:z.string().min(6)
    })


// ,ctx:ActionAPIContext
  const handler=async (inp:z.infer<typeof input>) => {


        const res=await ky.post(`${import.meta.env.PUBLIC_SERVER_ORIGIN}/v1/auth/login`,{
           body:JSON.stringify(inp),
           headers:{
             Accept:'application/json',
             "Content-type":"application/json"
           }
        })

        const data=await res.json<ApiResponseType>()


       return data
    }


  return defineAction({handler,input,accept:'form'})

}

export const server = {

  login:login()
}