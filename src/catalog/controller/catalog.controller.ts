import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CatalogService } from '../service/catalog.service';
import { from, Observable } from 'rxjs';
import { AnimalView } from '../interface/animal.interface';
import { AnimalDto } from '../domain/dto/animal.dto';
import { CatalogSearch } from '../domain/dto/catalog-search.dto';

@Controller('/api')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get('/catalog')
  public getCatalog(
    @Query() catalogSearch: CatalogSearch,
  ): Observable<AnimalView[]> {
    return from(this.catalogService.getCatalog(catalogSearch));
  }

  @Post('/create')
  @UsePipes(new ValidationPipe())
  public createNewArticle(@Body() animal: AnimalDto): Observable<AnimalView> {
    return from(this.catalogService.createNewArticle(animal));
  }

  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  public updateItemFromCatalog(
    @Param('id') id: string,
    @Body() animalDto: AnimalDto,
  ): Observable<AnimalView> {
    return this.catalogService.updateArticleFromCatalog(id, animalDto);
  }

  @Delete('/delete/:id')
  public deleteItemById(@Param('id') id: string) {
    return this.catalogService.deleteArticleById(id);
  }
}
