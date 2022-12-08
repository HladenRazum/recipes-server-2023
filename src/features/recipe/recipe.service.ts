import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipeService {
  async findAll(): Promise<any> {
    return 'ALL RECIPES';
  }
}
