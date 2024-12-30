import { 
    Controller,
    Get, 
    Post, 
    Delete, 
    Put, 
    Body, 
    Param,
    ConflictException,
    NotFoundException,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('api/tasks')
export class TasksController {
    constructor(private taskService: TasksService) { }

    @ApiResponse({ status: 200, description: 'Return all tasks' })
    @Get()
    findAll() {
        return this.taskService.findAll();
    }

    @ApiResponse({ status: 200, description: 'Return a task by id' })
    @ApiResponse({ status: 500, description: 'error server' })
    @Get(':id')
    async findOne(@Param('id') id: string) {
        const taskId = await this.taskService.findOne(id);
        if (!taskId) return new NotFoundException('Task not found');
        return taskId;
    }

    @ApiResponse({ status: 201, description: 'Create a task' })
    @ApiResponse({ status: 409, description: 'Task already exist' })
    @ApiResponse({ status: 400, description: 'Title is required' })
    @Post()
    async create(@Body() body: CreateTaskDto) {
        try {
            return await this.taskService.create(body);
        } catch (error) {
            if (error.code == 11000) {
                throw new ConflictException('Task already exist');
            }
            throw error;
        }
    }

    @ApiResponse({ status: 204, description: 'Delete a task' })
    @ApiResponse({ status: 500, description: 'error server' })
    @Delete(':id')
    async delete(@Param('id') id: string) {
        const task = await this.taskService.delete(id);
        if (!task) throw new NotFoundException('Task not found');
        return task;
    }

    @ApiResponse({ status: 200, description: 'Update a task' })
    @ApiResponse({ status: 500, description: 'error server' })
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateTaskDto) {
        const task = await this.taskService.update(id, body);
        if (!task) throw new NotFoundException('Task not found');
        return task;
    }
}
