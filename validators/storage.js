import { check } from 'express-validator'
import { validateResults } from '../utils/handleValidator.js'

const validatorGetItem = [
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

export {
    validatorGetItem
}