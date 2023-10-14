import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateVehicleUseTypeDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3, { message: 'VehicleUseType must have atleast 3 characters.' })
    vehicleUseType: string
}
