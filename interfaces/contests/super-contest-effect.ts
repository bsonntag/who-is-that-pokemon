import { IFlavorText } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface ISuperContestEffect {
  id: number;
  name: string;
  flavor_text_entries: IFlavorText[];
  moves: Array<INamedApiResource>;
}
