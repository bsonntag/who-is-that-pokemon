import { IApiResource } from '../utility/api-resource';
import { IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IStat {
  id: number;
  name: string;
  name_index: number;
  is_battle_only: boolean;
  affecting_moves: IMoveStatAffectSets;
  affecting_natures: INatureStatAffectSets;
  characteristics: IApiResource;
  move_damage_class: INamedApiResource;
  names: IName[];
}

export interface IMoveStatAffectSets {
  increase: IMoveStatAffect[];
  decrease: IMoveStatAffect[];
}

export interface IMoveStatAffect {
  change: number;
  move: INamedApiResource;
}

export interface INatureStatAffectSets {
  increase: Array<INamedApiResource>;
  decrease: Array<INamedApiResource>;
}
