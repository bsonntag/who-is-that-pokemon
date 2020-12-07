import { IEffect } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IItemFlingEffect {
  id: number;
  name: string;
  effect_entries: IEffect[];
  items: Array<INamedApiResource>;
}
