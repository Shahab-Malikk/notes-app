/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Hotel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HotelUpdateFormInputValues = {
    id?: string;
    name?: string;
    email?: string;
};
export declare type HotelUpdateFormValidationValues = {
    id?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HotelUpdateFormOverridesProps = {
    HotelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HotelUpdateFormProps = React.PropsWithChildren<{
    overrides?: HotelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    hotel?: Hotel;
    onSubmit?: (fields: HotelUpdateFormInputValues) => HotelUpdateFormInputValues;
    onSuccess?: (fields: HotelUpdateFormInputValues) => void;
    onError?: (fields: HotelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HotelUpdateFormInputValues) => HotelUpdateFormInputValues;
    onValidate?: HotelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HotelUpdateForm(props: HotelUpdateFormProps): React.ReactElement;
