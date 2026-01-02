/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.group(()=>{

  router.post('/login','#controllers/auth_controller.login')

}).prefix('v1/auth')

router.get('/token',()=>'')
router.post('/doe',()=>JSON.stringify('test'))



// router.get('/v1/auth/login', async () => {

//   return {
//     hello: 'world',
//   }

// })

// router.post('/v1/auth/login', async () => {

//   return {
//     hello: 'world',
//   }


// })
