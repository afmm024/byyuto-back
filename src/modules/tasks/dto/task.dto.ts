import { IsNotEmpty } from "class-validator";

export class TaskDTO {

    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    readonly content: string;

}