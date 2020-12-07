import { IEffect, IName, IVerboseEffect } from '../utility/common-models';
import { INamedApiResource } from '../utility/named-api-resource-list';

export interface IAbility {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: INamedApiResource;
  names: IName[];
  effect_entries: IVerboseEffect[];
  effect_changes: IAbilityEffectChange[];
  flavor_text_entries: IAbilityFlavorText[];
  pokemon: IAbilityPokemon[];
}

export interface IAbilityEffectChange {
  effect_entries: IEffect[];
  version_group: INamedApiResource;
}

export interface IAbilityFlavorText {
  flavor_text: string;
  language: INamedApiResource;
  version_group: INamedApiResource;
}

export interface IAbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: INamedApiResource;
}
