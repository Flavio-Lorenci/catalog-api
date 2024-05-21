import { Module } from '@nestjs/common';
import { CatalogController } from './controller/catalog.controller';
import { CatalogService } from './service/catalog.service';
import { Animal } from './domain/model/animal.schema';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';

const AnimalSchema = SchemaFactory.createForClass(Animal);

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Animal.name,
        schema: AnimalSchema,
      },
    ]),
  ],
  controllers: [CatalogController],
  providers: [CatalogService],
})
export class CatalogModule {}
