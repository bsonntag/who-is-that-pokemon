import { IEffect, IFlavorText } from '../utility/common-models';

export interface IContestEffect {
  id: number;
  appeal: number;
  jam: number;
  effect_entries: IEffect[];
  flavor_text_entries: IFlavorText[];
}
