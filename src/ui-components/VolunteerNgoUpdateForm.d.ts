/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { VolunteerNgo } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type VolunteerNgoUpdateFormInputValues = {
    id?: string;
};
export declare type VolunteerNgoUpdateFormValidationValues = {
    id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VolunteerNgoUpdateFormOverridesProps = {
    VolunteerNgoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type VolunteerNgoUpdateFormProps = React.PropsWithChildren<{
    overrides?: VolunteerNgoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    volunteerNgo?: VolunteerNgo;
    onSubmit?: (fields: VolunteerNgoUpdateFormInputValues) => VolunteerNgoUpdateFormInputValues;
    onSuccess?: (fields: VolunteerNgoUpdateFormInputValues) => void;
    onError?: (fields: VolunteerNgoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VolunteerNgoUpdateFormInputValues) => VolunteerNgoUpdateFormInputValues;
    onValidate?: VolunteerNgoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VolunteerNgoUpdateForm(props: VolunteerNgoUpdateFormProps): React.ReactElement;
