import { IsDate, IsEmail, IsOptional, IsString, MaxDate, MaxLength, MinLength } from "class-validator";
import { TransformStringToDate } from "src/common/functions/transfotm-string-to-date";
import { errorMessage } from "src/common/functions/validation-error-message";

export class UpdatePeopleDto{
    
    @IsString({message: errorMessage.isString})
    @MaxLength(100,{message: errorMessage.maxLength})
    @MinLength(2,{message: errorMessage.minLength})
    @IsOptional()
    readonly name?: string;
     
    @IsEmail({message: errorMessage.isEmail})
    @IsString({message: errorMessage.isString})
    @IsOptional()
    readonly email?: string;

    @IsDate({message: errorMessage.isDate})
    @MaxDate(new Date(),{message: errorMessage.maxDate})
    @TransformStringToDate()
    @IsOptional()
    readonly birthDate?: Date;
}