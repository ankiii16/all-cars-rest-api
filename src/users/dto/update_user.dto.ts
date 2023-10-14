import { PartialType } from "@nestjs/mapped-types";
import { AddUserDto } from "./add_user.dto";

export class UpdateUserDto extends PartialType(AddUserDto){}