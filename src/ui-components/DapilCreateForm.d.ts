/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from 'react';
import { GridProps, TextFieldProps } from '@aws-amplify/ui-react';
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
export declare type DapilCreateFormInputValues = {
  kode_dapil?: string;
  nama_dapil?: string;
};
export declare type DapilCreateFormValidationValues = {
  kode_dapil?: ValidationFunction<string>;
  nama_dapil?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DapilCreateFormOverridesProps = {
  DapilCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  kode_dapil?: PrimitiveOverrideProps<TextFieldProps>;
  nama_dapil?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DapilCreateFormProps = React.PropsWithChildren<
  {
    overrides?: DapilCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DapilCreateFormInputValues) => DapilCreateFormInputValues;
    onSuccess?: (fields: DapilCreateFormInputValues) => void;
    onError?: (fields: DapilCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DapilCreateFormInputValues) => DapilCreateFormInputValues;
    onValidate?: DapilCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function DapilCreateForm(props: DapilCreateFormProps): React.ReactElement;
