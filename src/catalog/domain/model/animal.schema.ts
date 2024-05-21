import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Animal {
  @Prop()
  public name: string;

  @Prop()
  public species: string;

  @Prop()
  public family: string;

  @Prop()
  public habitat: string;

  @Prop()
  public placeOfFound: string;

  @Prop()
  public diet: string;

  @Prop()
  public description: string;

  @Prop()
  public weightKg: number;

  @Prop()
  public heightCm: number;

  @Prop()
  public image: string;
}
