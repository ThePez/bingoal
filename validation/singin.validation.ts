import User from 'models/User';
import { checkSchema, ValidationChain } from 'express-validator';

const SignInValidation: ValidationChain[] = checkSchema({
    email: {
        isEmail: {
            errorMessage: 'Invalid email'
        },
    },
    password: {
        isLength: {
            options: {
                min: 8
            },
            errorMessage: 'Must be at least 8 characters'
        }
    }
});

export default SignInValidation;