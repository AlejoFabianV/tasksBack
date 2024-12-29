import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps: true}) //esto hace que cuando cree una tarea tambien se agraga la propiedad createdAt y updateAt
export class Task {

    @Prop({
        type: String, 
        required: true, 
        trim: true, 
        unique: true
    })
    title: string;

    @Prop({
        type: String, 
        trim: true,
    })
    description: string;

    @Prop({
        type: Boolean, 
        default: false
    })
    completed: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);