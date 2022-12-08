import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './features/recipe/recipe.module';
import { UserModule } from './features/user/user.module';

@Module({
  imports: [RecipeModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}