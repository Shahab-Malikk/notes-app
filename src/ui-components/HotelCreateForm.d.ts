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
export declare type HotelCreateFormInputValues = {
    id?: string;
    name?: string;
    email?: string;
};
export declare type HotelCreateFormValidationValues = {
    id?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HotelCreateFormOverridesProps = {
    HotelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HotelCreateFormProps = React.PropsWithChildren<{
    overrides?: HotelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HotelCreateFormInputValues) => HotelCreateFormInputValues;
    onSuccess?: (fields: HotelCreateFormInputValues) => void;
    onError?: (fields: HotelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HotelCreateFormInputValues) => HotelCreateFormInputValues;
    onValidate?: HotelCreateFormValidationValues;
} & React.CSSProperties>;
export default function HotelCreateForm(props: HotelCreateFormProps): React.ReactElement;
