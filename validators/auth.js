import { check } from 'express-validator'
import { validateResults } from '../utils/handleValidator.js'

const validatorRegister = [
    check("name")
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 50 }),
    check("age")
        .exists()
        .notEmpty()
        .isNumeric(),
    check("password")
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 20 }),
    check("email")
        .exists()
        .notEmpty()
        .isEmail(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorLogin = [
    check("password")
        .exists()
        .notEmpty()
        .isLength({ min: 3, max: 20 }),
    check("email")
        .exists()
        .notEmpty()
        .isEmail(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

export {
    validatorRegister,
    validatorLogin
}