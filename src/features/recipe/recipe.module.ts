import { Module } from '@nestjs/common';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';

@Module({
  imports: [RecipeModule],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {}
