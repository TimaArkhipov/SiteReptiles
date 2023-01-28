import { body } from 'express-validator'

export const userValidation = [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }).isString(),
]

export const reactionValidation = [
    body('user_id').isInt(),
    body('comment').isString(),
    body('grade').isInt(),
]

export const postValidation = [
    body('name').isJSON(),
    body('descr').isJSON(),
    // body('photo').isString(),
]