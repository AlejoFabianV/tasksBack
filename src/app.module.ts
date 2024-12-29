import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot('mongodb+srv://verhagenalejo:Independiente28-@cluster0.pd4yr.mongodb.net'),
    ],
})
export class AppModule {}
