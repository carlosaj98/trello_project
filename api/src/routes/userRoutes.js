const express = require('express')
const { body } = require('express-validator')

const registerValidationSchema = [
	body('username')
	.notEmpty()
	.withMessage('Your username is required')
	.isString()
	.withMessage('Your username have to be one or more words'),

	body('password')
	.notEmpty()
	.withMessage('Your password is required')
	.isString()
	.withMessage('Your password have to be one or more words'),

]

const loginValidationSchema = [
	body('username')
		.notEmpty()
		.withMessage('Your username is required'),
	body('password')
		.notEmpty()
		.withMessage('Your password is required'),
]

const UserControllers = require('../controllers/userController')

const router = express.Router()

router.post(
	'/signup',
	registerValidationSchema,
	UserControllers.register
)
router.post(
	'/signin',
	loginValidationSchema,
	UserControllers.login
)

module.exports = router