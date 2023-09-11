import { Injectable } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "./user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Person, PersonDocument } from "./person.schema";
import { Model } from "mongoose";

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Person.name) private userModel: Model<PersonDocument>
  ) {}

  async create(payload: CreateUserDto): Promise<Person> {
    return await this.userModel.create(payload);
  }

  async findOne(id: string): Promise<Person | null> {
    return this.userModel.findById(id).exec();
  }

  async update(
    id: string,
    updatePersonDto: UpdateUserDto
  ): Promise<Person | null> {
    return this.userModel
      .findByIdAndUpdate(id, updatePersonDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Person | null> {
    return this.userModel.findByIdAndRemove(id).exec();
  }
}
