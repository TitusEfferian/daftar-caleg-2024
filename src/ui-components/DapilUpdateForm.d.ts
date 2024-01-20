/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import { GridProps, TextFieldProps } from '@aws-amplify/ui-react';
import { Dapil } from '../models';
export declare type EscapeHatchProps = {
  [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
  [key: string]: string;
};
export declare type Variant = {
  variantValues: VariantValues;
  overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type DapilUpdateFormInputValues = {
  kode_dapil?: string;
  nama_dapil?: string;
};
export declare type DapilUpdateFormValidationValues = {
  kode_dapil?: ValidationFunction<string>;
  nama_dapil?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DapilUpdateFormOverridesProps = {
  DapilUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
  kode_dapil?: PrimitiveOverrideProps<TextFieldProps>;
  nama_dapil?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DapilUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: DapilUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    dapil?: Dapil;
    onSubmit?: (fields: DapilUpdateFormInputValues) => DapilUpdateFormInputValues;
    onSuccess?: (fields: DapilUpdateFormInputValues) => void;
    onError?: (fields: DapilUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DapilUpdateFormInputValues) => DapilUpdateFormInputValues;
    onValidate?: DapilUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function DapilUpdateForm(props: DapilUpdateFormProps): React.ReactElement;
