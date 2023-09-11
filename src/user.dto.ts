import {IsNotEmpty, IsString} from "class-validator";
import {PartialType} from '@nestjs/mapped-types'

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
}