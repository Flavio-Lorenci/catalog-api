import { Injectable } from '@nestjs/common';
import { Animal } from '../domain/model/animal.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, map, Observable } from 'rxjs';
import { AnimalView } from '../interface/animal.interface';
import { AnimalDto } from '../domain/dto/animal.dto';
import { CatalogSearch } from '../domain/dto/catalog-search.dto';

@Injectable()
export class CatalogService {
  constructor(
    @InjectModel(Animal.name)
    private animalModel: Model<Animal>,
  ) {}

  public getCatalog(catalogSearch?: CatalogSearch): Observable<AnimalView[]> {
    const query: any = {};
    if (catalogSearch) {
      if (catalogSearch.name) {
        query.name = { $regex: new RegExp(catalogSearch.name, 'i') };
      }
      if (catalogSearch.species) {
        query.species = catalogSearch.species;
      }
    }
    return from(this.animalModel.find(query)).pipe(
      map((animals: any) => animals.map((el: any) => this.toDto(el))),
    );
  }

  public createNewArticle(animal: AnimalDto): Observable<AnimalView> {
    return from(this.animalModel.create(animal)).pipe(
      map((animal) => this.toDto(animal)),
    );
  }

  public updateArticleFromCatalog(
    id: string,
    updateUserDto: AnimalDto,
  ): Observable<AnimalView> {
    return from(
      this.animalModel.findByIdAndUpdate(id, updateUserDto, { new: true }),
    ).pipe(map((animal) => this.toDto(animal)));
  }

  public deleteArticleById(id: string) {
    return this.animalModel.findByIdAndDelete(id);
  }

  private toDto(animal: any): AnimalView {
    return {
      id: animal._id,
      name: animal.name,
      species: animal.species,
      family: animal.family,
      habitat: animal.habitat,
      placeOfFound: animal.placeOfFound,
      diet: animal.diet,
      description: animal.description,
      weightKg: animal.weightKg,
      heightCm: animal.heightCm,
      image: animal.image,
    };
  }
}
