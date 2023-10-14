import { IsInt, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class AddVehicleDto{
    @IsString()
    @MinLength(2, { message: 'vehicleName must have atleast 2 characters.' })
    @IsNotEmpty()
    vehicleName: string;
    @IsString()
    @MinLength(10, { message: 'vehicleDescription must have atleast 10 characters.' })
    @IsNotEmpty()
    vehicleDescription: string;
    @IsInt()
    @IsNotEmpty()
    vehiclePriceWeekly: number;
    @IsInt()
    @IsNotEmpty()
    vehicleTypeId: number;
    @IsInt()
    @IsNotEmpty()
    vehicleUseTypeId: number;
    @IsInt()
    @IsNotEmpty()
    userId: number
}