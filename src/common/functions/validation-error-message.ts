import { ValidationArguments } from "class-validator";

export const errorMessage = {
    isNotEmpty: 'O campo $property é obrigatório!',
    isString: 'O campo $property precisa ser uma string!',
    minLength: 'O campo $property precisa ter no mínimo $constraint1 caracteres!',
    maxLength:  'O campo $property precisa ter no máximo $constraint1 caracteres!',
    isEmail: 'O $property deve ser um endereço de e-mail valido!',
    isDate: 'A Data informada não é valida!',
    maxDate: (args: ValidationArguments) => {
        const date = new Date(args.constraints[0])
        return `A data máxima permitida para ${args.property} é ${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    },
}