import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './features/recipe/recipe.module';
import { UserModule } from './features/user/user.module';
import dbConfig from './dbConfig';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), RecipeModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
