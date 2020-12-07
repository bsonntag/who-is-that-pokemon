import { IDescription } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IGrowthRate {
  id: number;
  name: string;
  formula: string;
  descriptions: IDescription[];
  levels: IGrowthRateExperienceLevel[];
  pokemon_species: Array<INamedApiResource>;
}

export interface IGrowthRateExperienceLevel {
  level: number;
  experience: number;
}
