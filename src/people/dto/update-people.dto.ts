import { IsDate, IsEmail, IsString, MaxDate, MaxLength, MinLength } from "class-validator";
import { TransformStringToDate } from "src/common/functions/transfotm-string-to-date";

export class UpdatePeopleDto{
    
    @IsString()
    @MaxLength(100)
    @MinLength(2)
    readonly name?: string;
     
    @IsEmail()
    @IsString()
    readonly email?: string;

    @IsDate()
    @MaxDate(new Date())
    @TransformStringToDate()
    readonly birthDate?: Date;
}