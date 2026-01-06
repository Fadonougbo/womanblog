import User from '#models/user'
import { createLoginValidator } from '#validators/womenblog/login'
import type { HttpContext } from '@adonisjs/core/http'
// import { errors as validationErrors } from '@vinejs/vine'
// import { errors as authErrors } from '@adonisjs/auth'


export default class AuthController {


  /**
   * Handle form submission for the create action
   */
  async login({ request }: HttpContext) {

    try{

         const {email,password}=await request.validateUsing(createLoginValidator)

        const user=await User.verifyCredentials(email,password)

        const token=await User.accessTokens.create(user)

        return {
            success:true,
            status:200,
            token      
          }


    }catch(e){

      const errors=new Map()
     

      const messages=e.code==='E_VALIDATION_ERROR'? e.messages: []


       for(const msg of messages){

        errors.set(msg.field,msg.message)

      }


      return {
        success:false,
        status:e.status,
        code:e.code,
        message:'Email ou mot de passe incorrect',
        errors:Object.fromEntries(errors),
        inputs:request.only(['email'])
      }

    }



  }

}