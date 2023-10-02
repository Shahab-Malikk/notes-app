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
export declare type VolunteerNgoCreateFormInputValues = {
    id?: string;
};
export declare type VolunteerNgoCreateFormValidationValues = {
    id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VolunteerNgoCreateFormOverridesProps = {
    VolunteerNgoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VolunteerNgoCreateFormProps = React.PropsWithChildren<{
    overrides?: VolunteerNgoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VolunteerNgoCreateFormInputValues) => VolunteerNgoCreateFormInputValues;
    onSuccess?: (fields: VolunteerNgoCreateFormInputValues) => void;
    onError?: (fields: VolunteerNgoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VolunteerNgoCreateFormInputValues) => VolunteerNgoCreateFormInputValues;
    onValidate?: VolunteerNgoCreateFormValidationValues;
} & React.CSSProperties>;
export default function VolunteerNgoCreateForm(props: VolunteerNgoCreateFormProps): React.ReactElement;
