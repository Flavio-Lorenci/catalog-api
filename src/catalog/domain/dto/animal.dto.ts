import { IsOptional, IsString } from 'class-validator';

export class AnimalDto {
  @IsString()
  @IsOptional()
  public name: string;

  @IsString()
  @IsOptional()
  public species: string;

  @IsString()
  @IsOptional()
  public family: string;

  @IsString()
  @IsOptional()
  public habitat: string;

  @IsString()
  @IsOptional()
  public placeOfFound: string;

  @IsString()
  @IsOptional()
  public diet: string;

  @IsString()
  @IsOptional()
  public description: string;

  @IsOptional()
  public weightKg: number;

  @IsOptional()
  public heightCm: number;

  @IsString()
  @IsOptional()
  public image: string;
}
