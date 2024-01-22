/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
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
    _version
    _deleted
    _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListDapilsQueryVariables, APITypes.ListDapilsQuery>;
export const syncDapils = /* GraphQL */ `query SyncDapils(
  $filter: ModelDapilFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncDapils(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncDapilsQueryVariables, APITypes.SyncDapilsQuery>;
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
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCalonLegislatifQueryVariables, APITypes.GetCalonLegislatifQuery>;
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCalonLegislatifsQueryVariables,
  APITypes.ListCalonLegislatifsQuery
>;
export const syncCalonLegislatifs = /* GraphQL */ `query SyncCalonLegislatifs(
  $filter: ModelCalonLegislatifFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCalonLegislatifs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCalonLegislatifsQueryVariables,
  APITypes.SyncCalonLegislatifsQuery
>;
