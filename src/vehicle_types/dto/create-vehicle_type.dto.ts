import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateVehicleTypeDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3, { message: 'VehicleType must have atleast 3 characters.' })
    vehicleType:string
}
