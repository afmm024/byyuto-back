import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskEntity } from './entities/task.entity';
import { TaskDTO } from './dto/task.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
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
