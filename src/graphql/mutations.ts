/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createDapil = /* GraphQL */ `mutation CreateDapil(
  $input: CreateDapilInput!
  $condition: ModelDapilConditionInput
) {
  createDapil(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDapilMutationVariables,
  APITypes.CreateDapilMutation
>;
export const updateDapil = /* GraphQL */ `mutation UpdateDapil(
  $input: UpdateDapilInput!
  $condition: ModelDapilConditionInput
) {
  updateDapil(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDapilMutationVariables,
  APITypes.UpdateDapilMutation
>;
export const deleteDapil = /* GraphQL */ `mutation DeleteDapil(
  $input: DeleteDapilInput!
  $condition: ModelDapilConditionInput
) {
  deleteDapil(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDapilMutationVariables,
  APITypes.DeleteDapilMutation
>;
export const createCalonLegislatif = /* GraphQL */ `mutation CreateCalonLegislatif(
  $input: CreateCalonLegislatifInput!
  $condition: ModelCalonLegislatifConditionInput
) {
  createCalonLegislatif(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCalonLegislatifMutationVariables,
  APITypes.CreateCalonLegislatifMutation
>;
export const updateCalonLegislatif = /* GraphQL */ `mutation UpdateCalonLegislatif(
  $input: UpdateCalonLegislatifInput!
  $condition: ModelCalonLegislatifConditionInput
) {
  updateCalonLegislatif(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCalonLegislatifMutationVariables,
  APITypes.UpdateCalonLegislatifMutation
>;
export const deleteCalonLegislatif = /* GraphQL */ `mutation DeleteCalonLegislatif(
  $input: DeleteCalonLegislatifInput!
  $condition: ModelCalonLegislatifConditionInput
) {
  deleteCalonLegislatif(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCalonLegislatifMutationVariables,
  APITypes.DeleteCalonLegislatifMutation
>;
