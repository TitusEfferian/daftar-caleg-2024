/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDapilInput = {
  id?: string | null,
  kode_dapil: string,
  nama_dapil: string,
};

export type ModelDapilConditionInput = {
  kode_dapil?: ModelStringInput | null,
  nama_dapil?: ModelStringInput | null,
  and?: Array< ModelDapilConditionInput | null > | null,
  or?: Array< ModelDapilConditionInput | null > | null,
  not?: ModelDapilConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Dapil = {
  __typename: "Dapil",
  id: string,
  kode_dapil: string,
  nama_dapil: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDapilInput = {
  id: string,
  kode_dapil?: string | null,
  nama_dapil?: string | null,
};

export type DeleteDapilInput = {
  id: string,
};

export type CreateCalegInput = {
  id?: string | null,
  name: string,
  gender: string,
  city: string,
  img_src: string,
  ex_koruptor: boolean,
  ex_koruptor_source?: string | null,
  dapil: string,
  no: number,
};

export type ModelCalegConditionInput = {
  name?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  city?: ModelStringInput | null,
  img_src?: ModelStringInput | null,
  ex_koruptor?: ModelBooleanInput | null,
  ex_koruptor_source?: ModelStringInput | null,
  dapil?: ModelStringInput | null,
  no?: ModelIntInput | null,
  and?: Array< ModelCalegConditionInput | null > | null,
  or?: Array< ModelCalegConditionInput | null > | null,
  not?: ModelCalegConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Caleg = {
  __typename: "Caleg",
  id: string,
  name: string,
  gender: string,
  city: string,
  img_src: string,
  ex_koruptor: boolean,
  ex_koruptor_source?: string | null,
  dapil: string,
  no: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCalegInput = {
  id: string,
  name?: string | null,
  gender?: string | null,
  city?: string | null,
  img_src?: string | null,
  ex_koruptor?: boolean | null,
  ex_koruptor_source?: string | null,
  dapil?: string | null,
  no?: number | null,
};

export type DeleteCalegInput = {
  id: string,
};

export type ModelDapilFilterInput = {
  id?: ModelIDInput | null,
  kode_dapil?: ModelStringInput | null,
  nama_dapil?: ModelStringInput | null,
  and?: Array< ModelDapilFilterInput | null > | null,
  or?: Array< ModelDapilFilterInput | null > | null,
  not?: ModelDapilFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelDapilConnection = {
  __typename: "ModelDapilConnection",
  items:  Array<Dapil | null >,
  nextToken?: string | null,
};

export type ModelCalegFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  city?: ModelStringInput | null,
  img_src?: ModelStringInput | null,
  ex_koruptor?: ModelBooleanInput | null,
  ex_koruptor_source?: ModelStringInput | null,
  dapil?: ModelStringInput | null,
  no?: ModelIntInput | null,
  and?: Array< ModelCalegFilterInput | null > | null,
  or?: Array< ModelCalegFilterInput | null > | null,
  not?: ModelCalegFilterInput | null,
};

export type ModelCalegConnection = {
  __typename: "ModelCalegConnection",
  items:  Array<Caleg | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionDapilFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  kode_dapil?: ModelSubscriptionStringInput | null,
  nama_dapil?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDapilFilterInput | null > | null,
  or?: Array< ModelSubscriptionDapilFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCalegFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  img_src?: ModelSubscriptionStringInput | null,
  ex_koruptor?: ModelSubscriptionBooleanInput | null,
  ex_koruptor_source?: ModelSubscriptionStringInput | null,
  dapil?: ModelSubscriptionStringInput | null,
  no?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCalegFilterInput | null > | null,
  or?: Array< ModelSubscriptionCalegFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateDapilMutationVariables = {
  input: CreateDapilInput,
  condition?: ModelDapilConditionInput | null,
};

export type CreateDapilMutation = {
  createDapil?:  {
    __typename: "Dapil",
    id: string,
    kode_dapil: string,
    nama_dapil: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDapilMutationVariables = {
  input: UpdateDapilInput,
  condition?: ModelDapilConditionInput | null,
};

export type UpdateDapilMutation = {
  updateDapil?:  {
    __typename: "Dapil",
    id: string,
    kode_dapil: string,
    nama_dapil: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDapilMutationVariables = {
  input: DeleteDapilInput,
  condition?: ModelDapilConditionInput | null,
};

export type DeleteDapilMutation = {
  deleteDapil?:  {
    __typename: "Dapil",
    id: string,
    kode_dapil: string,
    nama_dapil: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCalegMutationVariables = {
  input: CreateCalegInput,
  condition?: ModelCalegConditionInput | null,
};

export type CreateCalegMutation = {
  createCaleg?:  {
    __typename: "Caleg",
    id: string,
    name: string,
    gender: string,
    city: string,
    img_src: string,
    ex_koruptor: boolean,
    ex_koruptor_source?: string | null,
    dapil: string,
    no: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCalegMutationVariables = {
  input: UpdateCalegInput,
  condition?: ModelCalegConditionInput | null,
};

export type UpdateCalegMutation = {
  updateCaleg?:  {
    __typename: "Caleg",
    id: string,
    name: string,
    gender: string,
    city: string,
    img_src: string,
    ex_koruptor: boolean,
    ex_koruptor_source?: string | null,
    dapil: string,
    no: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCalegMutationVariables = {
  input: DeleteCalegInput,
  condition?: ModelCalegConditionInput | null,
};

export type DeleteCalegMutation = {
  deleteCaleg?:  {
    __typename: "Caleg",
    id: string,
    name: string,
    gender: string,
    city: string,
    img_src: string,
    ex_koruptor: boolean,
    ex_koruptor_source?: string | null,
    dapil: string,
    no: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetDapilQueryVariables = {
  id: string,
};

export type GetDapilQuery = {
  getDapil?:  {
    __typename: "Dapil",
    id: string,
    kode_dapil: string,
    nama_dapil: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDapilsQueryVariables = {
  filter?: ModelDapilFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDapilsQuery = {
  listDapils?:  {
    __typename: "ModelDapilConnection",
    items:  Array< {
      __typename: "Dapil",
      id: string,
      kode_dapil: string,
      nama_dapil: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCalegQueryVariables = {
  id: string,
};

export type GetCalegQuery = {
  getCaleg?:  {
    __typename: "Caleg",
    id: string,
    name: string,
    gender: string,
    city: string,
    img_src: string,
    ex_koruptor: boolean,
    ex_koruptor_source?: string | null,
    dapil: string,
    no: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCalegsQueryVariables = {
  filter?: ModelCalegFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCalegsQuery = {
  listCalegs?:  {
    __typename: "ModelCalegConnection",
    items:  Array< {
      __typename: "Caleg",
      id: string,
      name: string,
      gender: string,
      city: string,
      img_src: string,
      ex_koruptor: boolean,
      ex_koruptor_source?: string | null,
      dapil: string,
      no: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDapilSubscriptionVariables = {
  filter?: ModelSubscriptionDapilFilterInput | null,
};

export type OnCreateDapilSubscription = {
  onCreateDapil?:  {
    __typename: "Dapil",
    id: string,
    kode_dapil: string,
    nama_dapil: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDapilSubscriptionVariables = {
  filter?: ModelSubscriptionDapilFilterInput | null,
};

export type OnUpdateDapilSubscription = {
  onUpdateDapil?:  {
    __typename: "Dapil",
    id: string,
    kode_dapil: string,
    nama_dapil: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDapilSubscriptionVariables = {
  filter?: ModelSubscriptionDapilFilterInput | null,
};

export type OnDeleteDapilSubscription = {
  onDeleteDapil?:  {
    __typename: "Dapil",
    id: string,
    kode_dapil: string,
    nama_dapil: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCalegSubscriptionVariables = {
  filter?: ModelSubscriptionCalegFilterInput | null,
};

export type OnCreateCalegSubscription = {
  onCreateCaleg?:  {
    __typename: "Caleg",
    id: string,
    name: string,
    gender: string,
    city: string,
    img_src: string,
    ex_koruptor: boolean,
    ex_koruptor_source?: string | null,
    dapil: string,
    no: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCalegSubscriptionVariables = {
  filter?: ModelSubscriptionCalegFilterInput | null,
};

export type OnUpdateCalegSubscription = {
  onUpdateCaleg?:  {
    __typename: "Caleg",
    id: string,
    name: string,
    gender: string,
    city: string,
    img_src: string,
    ex_koruptor: boolean,
    ex_koruptor_source?: string | null,
    dapil: string,
    no: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCalegSubscriptionVariables = {
  filter?: ModelSubscriptionCalegFilterInput | null,
};

export type OnDeleteCalegSubscription = {
  onDeleteCaleg?:  {
    __typename: "Caleg",
    id: string,
    name: string,
    gender: string,
    city: string,
    img_src: string,
    ex_koruptor: boolean,
    ex_koruptor_source?: string | null,
    dapil: string,
    no: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
