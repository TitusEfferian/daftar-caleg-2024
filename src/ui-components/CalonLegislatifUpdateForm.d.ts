/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CalonLegislatif } from "../API.ts";
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
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CalonLegislatifUpdateFormInputValues = {
    name?: string;
    party?: string;
    gender?: string;
    city?: string;
    img_src?: string;
    ex_koruptor?: boolean;
    ex_koruptor_source?: string;
    dapil?: string;
    no?: number;
};
export declare type CalonLegislatifUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    party?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    img_src?: ValidationFunction<string>;
    ex_koruptor?: ValidationFunction<boolean>;
    ex_koruptor_source?: ValidationFunction<string>;
    dapil?: ValidationFunction<string>;
    no?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CalonLegislatifUpdateFormOverridesProps = {
    CalonLegislatifUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    party?: PrimitiveOverrideProps<TextFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    img_src?: PrimitiveOverrideProps<TextFieldProps>;
    ex_koruptor?: PrimitiveOverrideProps<SwitchFieldProps>;
    ex_koruptor_source?: PrimitiveOverrideProps<TextFieldProps>;
    dapil?: PrimitiveOverrideProps<TextFieldProps>;
    no?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CalonLegislatifUpdateFormProps = React.PropsWithChildren<{
    overrides?: CalonLegislatifUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    calonLegislatif?: CalonLegislatif;
    onSubmit?: (fields: CalonLegislatifUpdateFormInputValues) => CalonLegislatifUpdateFormInputValues;
    onSuccess?: (fields: CalonLegislatifUpdateFormInputValues) => void;
    onError?: (fields: CalonLegislatifUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CalonLegislatifUpdateFormInputValues) => CalonLegislatifUpdateFormInputValues;
    onValidate?: CalonLegislatifUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CalonLegislatifUpdateForm(props: CalonLegislatifUpdateFormProps): React.ReactElement;
