import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserTypeDto {
    @IsString()
    @MinLength(2, { message: 'User Type must have atleast 2 characters.' })
    @IsNotEmpty()
    userType: string
}
