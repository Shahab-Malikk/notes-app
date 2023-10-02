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
export declare type FoodCreateFormInputValues = {
    id?: string;
    name?: string;
};
export declare type FoodCreateFormValidationValues = {
    id?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FoodCreateFormOverridesProps = {
    FoodCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FoodCreateFormProps = React.PropsWithChildren<{
    overrides?: FoodCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FoodCreateFormInputValues) => FoodCreateFormInputValues;
    onSuccess?: (fields: FoodCreateFormInputValues) => void;
    onError?: (fields: FoodCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FoodCreateFormInputValues) => FoodCreateFormInputValues;
    onValidate?: FoodCreateFormValidationValues;
} & React.CSSProperties>;
export default function FoodCreateForm(props: FoodCreateFormProps): React.ReactElement;
