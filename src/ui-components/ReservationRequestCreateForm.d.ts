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
export declare type ReservationRequestCreateFormInputValues = {
    id?: string;
    status?: string;
};
export declare type ReservationRequestCreateFormValidationValues = {
    id?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReservationRequestCreateFormOverridesProps = {
    ReservationRequestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReservationRequestCreateFormProps = React.PropsWithChildren<{
    overrides?: ReservationRequestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReservationRequestCreateFormInputValues) => ReservationRequestCreateFormInputValues;
    onSuccess?: (fields: ReservationRequestCreateFormInputValues) => void;
    onError?: (fields: ReservationRequestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReservationRequestCreateFormInputValues) => ReservationRequestCreateFormInputValues;
    onValidate?: ReservationRequestCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReservationRequestCreateForm(props: ReservationRequestCreateFormProps): React.ReactElement;
