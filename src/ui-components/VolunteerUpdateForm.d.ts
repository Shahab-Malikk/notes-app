/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Volunteer } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VolunteerUpdateFormInputValues = {
    id?: string;
    name?: string;
    email?: string;
};
export declare type VolunteerUpdateFormValidationValues = {
    id?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VolunteerUpdateFormOverridesProps = {
    VolunteerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VolunteerUpdateFormProps = React.PropsWithChildren<{
    overrides?: VolunteerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    volunteer?: Volunteer;
    onSubmit?: (fields: VolunteerUpdateFormInputValues) => VolunteerUpdateFormInputValues;
    onSuccess?: (fields: VolunteerUpdateFormInputValues) => void;
    onError?: (fields: VolunteerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VolunteerUpdateFormInputValues) => VolunteerUpdateFormInputValues;
    onValidate?: VolunteerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VolunteerUpdateForm(props: VolunteerUpdateFormProps): React.ReactElement;
