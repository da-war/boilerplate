import React from "react";
import { useFormikContext } from "formik";
import DropDown from "../DropDown";
import ErrorMessage from "../ErrorMessage";
import { SelectedItem } from "@/constants/types";

interface Props {
  data: Array<SelectedItem>;
  placeholder?: string;
  name: string;
}

const AppFormDropdown: React.FC<Props> = ({
  data,
  placeholder = "Select Item",
  name,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <DropDown
        data={data}
        placeholder={placeholder}
        onSelectItem={(item: object) => setFieldValue(name, item)}
        value={values[name]}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormDropdown;
