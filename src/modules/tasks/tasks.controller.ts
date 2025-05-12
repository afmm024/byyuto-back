import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskEntity } from './entities/task.entity';
import { TaskDTO } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(
        private readonly taskService: TasksService
    ) {

    }

    @Get()
    index(): Promise<TaskEntity[]> {
        return this.taskService.findAll();
    }

    @Post('create')
    async create(@Body() entitytData: TaskDTO){
        return await this.taskService.create(entitytData);
    }

    @Post(':id/delete')
    async delete(@Param('id') id){
        return await this.taskService.delete(id);
    }
}
