import { body } from 'express-validator'

export const userValidation = [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
]

// export const registerValidation = [
//     body('email').isEmail(),
//     body('password').isLength({ min: 5 }),
// ]

export const reactionValidation = [
    // body('comment').isLength({ min: 3 }).isString(),
    body('user_id').isInt(),
    body('comment').isString(),
    body('grade').isInt(),
]

export const pageValidation = [
    body('name').isJSON(),
    body('descr').isJSON(),
    // body('photo').isString(),
]