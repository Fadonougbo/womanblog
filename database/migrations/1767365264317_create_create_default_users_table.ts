import User from '#models/user'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'create_default_users'

  async up() {

    await User.create({
      email:'doe@gmail.com',
      fullName:'doe',
      password:'johndoe@johndoe'

    })

  }

  async down() {
          const admin=await User.findBy({email:'doe@gmail.com'})

          await admin?.delete()
      }
}