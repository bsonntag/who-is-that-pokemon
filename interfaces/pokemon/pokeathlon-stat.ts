import { IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IPokeathlonStat {
  id: number;
  name: string;
  names: IName[];
  affecting_natures: INaturePokeathlonStatAffectSets;
}

export interface INaturePokeathlonStatAffectSets {
  increase: INaturePokeathlonStatAffect[];
  decrease: INaturePokeathlonStatAffect[];
}

export interface INaturePokeathlonStatAffect {
  max_change: number;
  nature: INamedApiResource;
}
