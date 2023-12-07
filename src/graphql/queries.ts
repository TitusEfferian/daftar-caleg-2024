/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDapil = /* GraphQL */ `query GetDapil($id: ID!) {
  getDapil(id: $id) {
    id
    kode_dapil
    nama_dapil
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetDapilQueryVariables, APITypes.GetDapilQuery>;
export const listDapils = /* GraphQL */ `query ListDapils(
  $filter: ModelDapilFilterInput
  $limit: Int
  $nextToken: String
) {
  listDapils(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      kode_dapil
      nama_dapil
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDapilsQueryVariables,
  APITypes.ListDapilsQuery
>;
export const getCalonLegislatif = /* GraphQL */ `query GetCalonLegislatif($id: ID!) {
  getCalonLegislatif(id: $id) {
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
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCalonLegislatifQueryVariables,
  APITypes.GetCalonLegislatifQuery
>;
export const listCalonLegislatifs = /* GraphQL */ `query ListCalonLegislatifs(
  $filter: ModelCalonLegislatifFilterInput
  $limit: Int
  $nextToken: String
) {
  listCalonLegislatifs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCalonLegislatifsQueryVariables,
  APITypes.ListCalonLegislatifsQuery
>;
