import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MinLength } from "class-validator";

export class AddUserDto{
    @IsString()
    @MinLength(2, { message: 'UserName must have atleast 2 characters.' })
    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    @IsEmail(null, { message: 'Please provide valid Email.' })
    userEmail: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^0[34]\d{8}$/)
    userPhone: number;
    
    @IsNotEmpty()
    @IsString()
    userAddress: string;

    @IsNotEmpty()
    @IsNumber()
    userTypeId: number;
}