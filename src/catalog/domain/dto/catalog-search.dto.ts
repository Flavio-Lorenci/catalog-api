import { IsOptional, IsString } from 'class-validator';

export class CatalogSearch {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  species: string;
}
