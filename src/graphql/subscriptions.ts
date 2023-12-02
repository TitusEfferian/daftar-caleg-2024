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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDapilSubscriptionVariables,
  APITypes.OnDeleteDapilSubscription
>;
export const onCreateCaleg = /* GraphQL */ `subscription OnCreateCaleg($filter: ModelSubscriptionCalegFilterInput) {
  onCreateCaleg(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCalegSubscriptionVariables,
  APITypes.OnCreateCalegSubscription
>;
export const onUpdateCaleg = /* GraphQL */ `subscription OnUpdateCaleg($filter: ModelSubscriptionCalegFilterInput) {
  onUpdateCaleg(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCalegSubscriptionVariables,
  APITypes.OnUpdateCalegSubscription
>;
export const onDeleteCaleg = /* GraphQL */ `subscription OnDeleteCaleg($filter: ModelSubscriptionCalegFilterInput) {
  onDeleteCaleg(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCalegSubscriptionVariables,
  APITypes.OnDeleteCalegSubscription
>;
