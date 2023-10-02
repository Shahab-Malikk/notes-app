/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Ngo } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NgoUpdateFormInputValues = {
    id?: string;
    name?: string;
};
export declare type NgoUpdateFormValidationValues = {
    id?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NgoUpdateFormOverridesProps = {
    NgoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NgoUpdateFormProps = React.PropsWithChildren<{
    overrides?: NgoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ngo?: Ngo;
    onSubmit?: (fields: NgoUpdateFormInputValues) => NgoUpdateFormInputValues;
    onSuccess?: (fields: NgoUpdateFormInputValues) => void;
    onError?: (fields: NgoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NgoUpdateFormInputValues) => NgoUpdateFormInputValues;
    onValidate?: NgoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NgoUpdateForm(props: NgoUpdateFormProps): React.ReactElement;
