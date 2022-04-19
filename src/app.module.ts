import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NotesModule } from "./notes/notes.module";

@Module({
  imports: [
    NotesModule,
    MongooseModule.forRoot(
      process.env.MONGODB_STORE_URI || "mongodb://mongo:27017/notes"
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
