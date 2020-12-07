import { IGenerationGameIndex, IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IType {
  id: number;
  name: string;
  damage_relations: ITypeRelations;
  game_indices: IGenerationGameIndex[];
  generation: INamedApiResource;
  move_damage_class: INamedApiResource;
  names: IName[];
  pokemon: ITypePokemon[];
  moves: INamedApiResource;
}

export interface ITypePokemon {
  slot: number;
  pokemon: INamedApiResource;
}

export interface ITypeRelations {
  no_damage_to: Array<INamedApiResource>;
  half_damage_to: Array<INamedApiResource>;
  double_damage_to: Array<INamedApiResource>;
  no_damage_from: Array<INamedApiResource>;
  half_damage_from: Array<INamedApiResource>;
  double_damage_from: Array<INamedApiResource>;
}
