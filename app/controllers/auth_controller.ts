import User from '#models/user'
import { createLoginValidator } from '#validators/womenblog/login'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {


  /**
   * Handle form submission for the create action
   */
  async login({ request }: HttpContext) {

    // try {
    //   const {email,password}=await request.validateUsing(createLoginValidator)
    //   const user=await User.verifyCredentials(email,password)
    //   const token=await User.accessTokens.create(user)

    //   console.log(token)

    // }catch(err){

    //   console.log(err,request.all())
    // }
     
      //console.log(request.all())
      const {email,password}=await request.validateUsing(createLoginValidator)

    const user=await User.verifyCredentials(email,password)

    const token=await User.accessTokens.create(user)


    return {
        success:true,
        token      
      }

  }

}