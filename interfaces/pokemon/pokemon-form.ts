import { IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IPokemonForm {
  id: number;
  name: string;
  order: number;
  form_order: number;
  is_default: boolean;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
  pokemon: INamedApiResource;
  sprites: IPokemonFormSprites;
  version_group: INamedApiResource;
  names: IName[];
  form_names: IName[];
}

export interface IPokemonFormSprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
}
