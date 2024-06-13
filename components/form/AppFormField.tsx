import React from "react";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "../ErrorMessage";

import { useFormikContext } from "formik";

interface AppFormFieldProps {
  name: string;
}

const AppFormField: React.FC<AppFormFieldProps> = ({ name, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
