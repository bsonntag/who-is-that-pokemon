import { IDescription } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IMoveCategory {
  id: number;
  name: string;
  moves: Array<INamedApiResource>;
  descriptions: IDescription[];
}
