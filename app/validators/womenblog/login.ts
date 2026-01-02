import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new login.
 */
export const createLoginValidator = vine.compile(

  vine.object({
    email:vine.string().minLength(2).email().exists({
      table:'users',
      column:'email'
    }),
    password:vine.string().minLength(6)
  })

)

/**
 * Validator to validate the payload when updating
 * an existing login.
 */
export const updateLoginValidator = vine.compile(
  vine.object({})
)