import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { Response } from "express";
import { CreateUserDto, UpdateUserDto } from "./user.dto";
import { isValidObjectId } from "./helper";

@Controller("api")
export class AppController {
  constructor(private readonly userService: AppService) {}

  @Post()
  async create(@Body() payload: CreateUserDto, @Res() res: Response) {
    const user = await this.userService.create(payload);

    return res.status(HttpStatus.OK).json({
      success: true,
      data: user,
      message: "User created successfully",
    });
  }

  @Get(":id")
  async findOne(@Param("id") id: string, @Res() res: Response) {
    // check if id is valid uuid
    if (!isValidObjectId(id)) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message: "invalid id",
      });
    }

    const user = await this.userService.findOne(id);

    if (user) {
      return res.status(HttpStatus.OK).json({
        success: true,
        data: user,
        message: "record fetched successfully",
      });
    }

    return res.status(HttpStatus.NOT_FOUND).json({
      success: false,
      message: "User not found",
    });
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() payload: UpdateUserDto,
    @Res() res: Response
  ) {
    if (!isValidObjectId(id)) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message: "invalid id",
      });
    }

    const user = await this.userService.update(id, payload);

    if (!user) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: "error updating record",
      });
    }

    return res.status(HttpStatus.OK).json({
      success: true,
      data: user,
      message: "record updated successfully",
    });
  }

  @Delete(":id")
  async remove(@Param("id") id: string, @Res() res: Response) {
    if (!isValidObjectId(id)) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message: "invalid id",
      });
    }

    const user = await this.userService.remove(id);

    if (!user) {
      return res.status(HttpStatus.NOT_FOUND).json({
        success: false,
        message: "error deleting record",
      });
    }

    return res.status(HttpStatus.OK).json({
      success: true,
      data: user,
      message: "record deleted successfully",
    });
  }
}
