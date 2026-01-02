import type { APIRoute } from 'astro'


export const prerender = false;

export const POST: APIRoute = ({ params, request,cookies }) => {

  return new Response(

    JSON.stringify({
      
      name: 'Astro',
      url: 'https://astro.build/',
      
    })

  )


}
