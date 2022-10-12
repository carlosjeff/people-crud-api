import { errorMessage } from './../../common/functions/validation-error-message';
import { IsDate, IsEmail, IsNotEmpty, IsString, MaxDate, MaxLength, MinLength } from 'class-validator'
import { TransformStringToDate } from 'src/common/functions/transfotm-string-to-date';

export class CreatePeopleDto{

    @IsString({message: errorMessage.isString})
    @MaxLength(100,{message: errorMessage.maxLength})
    @MinLength(2,{message: errorMessage.minLength})
    @IsNotEmpty({message: errorMessage.isNotEmpty})
    readonly name: string;
     
    @IsEmail({message: errorMessage.isEmail})
    @IsString({message: errorMessage.isString})
    @IsNotEmpty({message: errorMessage.isNotEmpty})
    readonly email: string;

    @IsDate({message: errorMessage.isDate})
    @MaxDate(new Date(),{message: errorMessage.maxDate})
    @IsNotEmpty({message: errorMessage.isNotEmpty})
    @TransformStringToDate()
    readonly birthDate: Date;
}