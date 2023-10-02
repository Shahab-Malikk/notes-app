/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ReservationRequest } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReservationRequestUpdateFormInputValues = {
    id?: string;
    status?: string;
};
export declare type ReservationRequestUpdateFormValidationValues = {
    id?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReservationRequestUpdateFormOverridesProps = {
    ReservationRequestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReservationRequestUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReservationRequestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reservationRequest?: ReservationRequest;
    onSubmit?: (fields: ReservationRequestUpdateFormInputValues) => ReservationRequestUpdateFormInputValues;
    onSuccess?: (fields: ReservationRequestUpdateFormInputValues) => void;
    onError?: (fields: ReservationRequestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReservationRequestUpdateFormInputValues) => ReservationRequestUpdateFormInputValues;
    onValidate?: ReservationRequestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReservationRequestUpdateForm(props: ReservationRequestUpdateFormProps): React.ReactElement;
