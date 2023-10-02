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
export declare type NgoHotelCreateFormInputValues = {
    id?: string;
};
export declare type NgoHotelCreateFormValidationValues = {
    id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NgoHotelCreateFormOverridesProps = {
    NgoHotelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NgoHotelCreateFormProps = React.PropsWithChildren<{
    overrides?: NgoHotelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NgoHotelCreateFormInputValues) => NgoHotelCreateFormInputValues;
    onSuccess?: (fields: NgoHotelCreateFormInputValues) => void;
    onError?: (fields: NgoHotelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NgoHotelCreateFormInputValues) => NgoHotelCreateFormInputValues;
    onValidate?: NgoHotelCreateFormValidationValues;
} & React.CSSProperties>;
export default function NgoHotelCreateForm(props: NgoHotelCreateFormProps): React.ReactElement;
