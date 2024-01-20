/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateDapil = /* GraphQL */ `subscription OnCreateDapil($filter: ModelSubscriptionDapilFilterInput) {
  onCreateDapil(filter: $filter) {
    id
    kode_dapil
    nama_dapil
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDapilSubscriptionVariables,
  APITypes.OnCreateDapilSubscription
>;
export const onUpdateDapil = /* GraphQL */ `subscription OnUpdateDapil($filter: ModelSubscriptionDapilFilterInput) {
  onUpdateDapil(filter: $filter) {
    id
    kode_dapil
    nama_dapil
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDapilSubscriptionVariables,
  APITypes.OnUpdateDapilSubscription
>;
export const onDeleteDapil = /* GraphQL */ `subscription OnDeleteDapil($filter: ModelSubscriptionDapilFilterInput) {
  onDeleteDapil(filter: $filter) {
    id
    kode_dapil
    nama_dapil
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDapilSubscriptionVariables,
  APITypes.OnDeleteDapilSubscription
>;
export const onCreateCalonLegislatif = /* GraphQL */ `subscription OnCreateCalonLegislatif(
  $filter: ModelSubscriptionCalonLegislatifFilterInput
) {
  onCreateCalonLegislatif(filter: $filter) {
    id
    name
    party
    gender
    city
    img_src
    ex_koruptor
    ex_koruptor_source
    dapil
    no
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCalonLegislatifSubscriptionVariables,
  APITypes.OnCreateCalonLegislatifSubscription
>;
export const onUpdateCalonLegislatif = /* GraphQL */ `subscription OnUpdateCalonLegislatif(
  $filter: ModelSubscriptionCalonLegislatifFilterInput
) {
  onUpdateCalonLegislatif(filter: $filter) {
    id
    name
    party
    gender
    city
    img_src
    ex_koruptor
    ex_koruptor_source
    dapil
    no
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCalonLegislatifSubscriptionVariables,
  APITypes.OnUpdateCalonLegislatifSubscription
>;
export const onDeleteCalonLegislatif = /* GraphQL */ `subscription OnDeleteCalonLegislatif(
  $filter: ModelSubscriptionCalonLegislatifFilterInput
) {
  onDeleteCalonLegislatif(filter: $filter) {
    id
    name
    party
    gender
    city
    img_src
    ex_koruptor
    ex_koruptor_source
    dapil
    no
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCalonLegislatifSubscriptionVariables,
  APITypes.OnDeleteCalonLegislatifSubscription
>;
