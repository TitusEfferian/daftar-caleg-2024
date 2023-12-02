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
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDapilMutationVariables,
  APITypes.DeleteDapilMutation
>;
export const createCaleg = /* GraphQL */ `mutation CreateCaleg(
  $input: CreateCalegInput!
  $condition: ModelCalegConditionInput
) {
  createCaleg(input: $input, condition: $condition) {
    id
    name
    gender
    city
    img_src
    ex_koruptor
    ex_koruptor_source
    dapil
    no
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCalegMutationVariables,
  APITypes.CreateCalegMutation
>;
export const updateCaleg = /* GraphQL */ `mutation UpdateCaleg(
  $input: UpdateCalegInput!
  $condition: ModelCalegConditionInput
) {
  updateCaleg(input: $input, condition: $condition) {
    id
    name
    gender
    city
    img_src
    ex_koruptor
    ex_koruptor_source
    dapil
    no
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCalegMutationVariables,
  APITypes.UpdateCalegMutation
>;
export const deleteCaleg = /* GraphQL */ `mutation DeleteCaleg(
  $input: DeleteCalegInput!
  $condition: ModelCalegConditionInput
) {
  deleteCaleg(input: $input, condition: $condition) {
    id
    name
    gender
    city
    img_src
    ex_koruptor
    ex_koruptor_source
    dapil
    no
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCalegMutationVariables,
  APITypes.DeleteCalegMutation
>;
