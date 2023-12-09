import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDapil = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dapil, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly kode_dapil: string;
  readonly nama_dapil: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDapil = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dapil, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly kode_dapil: string;
  readonly nama_dapil: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Dapil = LazyLoading extends LazyLoadingDisabled ? EagerDapil : LazyDapil

export declare const Dapil: (new (init: ModelInit<Dapil>) => Dapil) & {
  copyOf(source: Dapil, mutator: (draft: MutableModel<Dapil>) => MutableModel<Dapil> | void): Dapil;
}

type EagerCalonLegislatif = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CalonLegislatif, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly party: string;
  readonly gender: string;
  readonly city: string;
  readonly img_src: string;
  readonly ex_koruptor: boolean;
  readonly ex_koruptor_source?: string | null;
  readonly dapil: string;
  readonly no: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCalonLegislatif = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CalonLegislatif, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly party: string;
  readonly gender: string;
  readonly city: string;
  readonly img_src: string;
  readonly ex_koruptor: boolean;
  readonly ex_koruptor_source?: string | null;
  readonly dapil: string;
  readonly no: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CalonLegislatif = LazyLoading extends LazyLoadingDisabled ? EagerCalonLegislatif : LazyCalonLegislatif

export declare const CalonLegislatif: (new (init: ModelInit<CalonLegislatif>) => CalonLegislatif) & {
  copyOf(source: CalonLegislatif, mutator: (draft: MutableModel<CalonLegislatif>) => MutableModel<CalonLegislatif> | void): CalonLegislatif;
}