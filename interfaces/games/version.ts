import { IName } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IVersion {
  id: number;
  name: string;
  names: IName[];
  version_group: INamedApiResource;
}
