/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NgoCreateFormInputValues = {
    id?: string;
    name?: string;
};
export declare type NgoCreateFormValidationValues = {
    id?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NgoCreateFormOverridesProps = {
    NgoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NgoCreateFormProps = React.PropsWithChildren<{
    overrides?: NgoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NgoCreateFormInputValues) => NgoCreateFormInputValues;
    onSuccess?: (fields: NgoCreateFormInputValues) => void;
    onError?: (fields: NgoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NgoCreateFormInputValues) => NgoCreateFormInputValues;
    onValidate?: NgoCreateFormValidationValues;
} & React.CSSProperties>;
export default function NgoCreateForm(props: NgoCreateFormProps): React.ReactElement;
