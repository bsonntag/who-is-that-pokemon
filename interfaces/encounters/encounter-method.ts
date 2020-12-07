import { IName } from '../utility/common-models';

export interface IEncounterMethod {
  id: number;
  name: string;
  order: number;
  names: IName[];
}
