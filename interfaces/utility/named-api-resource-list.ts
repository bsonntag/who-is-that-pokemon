export interface INamedApiResource {
  name: string;
  url: string;
}

export interface INamedApiResourceList {
  count: number;
  next: string;
  previous: string;
  results: Array<INamedApiResource>;
}
