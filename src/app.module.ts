import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot('cluster0-shard-00-02.pd4yr.mongodb.net:27017'),
    ],
})
export class AppModule {}
