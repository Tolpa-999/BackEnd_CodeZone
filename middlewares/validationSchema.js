// import { body } from "express-validator"
const { body } = require('express-validator')
const validationSchema = () => {
    return [
        body('title')
            .notEmpty()
            .withMessage("title is required")
            .isLength({ min: 2 })
            .withMessage("at least 2 digits"),
        body('price')
            .notEmpty()
            .withMessage('price is required')
    ]
}


module.exports = validationSchema