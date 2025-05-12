import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskEntity)
        private taskRepository: Repository<TaskEntity>
    ) {

    }

    async findAll(): Promise<TaskEntity[]> {
        return await this.taskRepository.find();
    }

    async create(entity: TaskEntity): Promise<TaskEntity> {
        return await this.taskRepository.save(entity);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.taskRepository.delete(id);
    }
}
