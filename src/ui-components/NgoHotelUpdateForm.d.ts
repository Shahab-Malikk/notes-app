/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NgoHotel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NgoHotelUpdateFormInputValues = {
    id?: string;
};
export declare type NgoHotelUpdateFormValidationValues = {
    id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NgoHotelUpdateFormOverridesProps = {
    NgoHotelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NgoHotelUpdateFormProps = React.PropsWithChildren<{
    overrides?: NgoHotelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ngoHotel?: NgoHotel;
    onSubmit?: (fields: NgoHotelUpdateFormInputValues) => NgoHotelUpdateFormInputValues;
    onSuccess?: (fields: NgoHotelUpdateFormInputValues) => void;
    onError?: (fields: NgoHotelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NgoHotelUpdateFormInputValues) => NgoHotelUpdateFormInputValues;
    onValidate?: NgoHotelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NgoHotelUpdateForm(props: NgoHotelUpdateFormProps): React.ReactElement;
