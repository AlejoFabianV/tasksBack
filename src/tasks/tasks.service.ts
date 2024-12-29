import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Task } from 'src/schemas/task.schema';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) { }

    findAll() {
        return this.taskModel.find();
    }

    async findOne(id: string) {
        return this.taskModel.findById(id)
    }

    async create(createTask: CreateTaskDto) {
        const newTask = new this.taskModel(createTask);
        if (newTask.title === '') {
            throw new Error('Title is required');
        }
        else {
            return newTask.save();
        }
    }

    async delete(id: string) {
        return this.taskModel.findByIdAndDelete(id)
    }

    async update(id: string, task: UpdateTaskDto) {
        //new true para que el objeto devuelva el nuevo dato
        return this.taskModel.findByIdAndUpdate(id, task, { new: true });
    }
}
