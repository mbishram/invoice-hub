// ** React Imports
import { ReactElement } from "react";

// ** Third Party Imports
import {
  Controller,
  ControllerProps,
  ControllerRenderProps,
  FieldValues,
  RefCallBack,
  UseControllerReturn,
} from "react-hook-form";

// Needed props for @mui fields
type FieldControllerMuiFieldProps<TRegister extends FieldValues> = Omit<
  ControllerRenderProps<TRegister>,
  "ref"
> & { inputRef: RefCallBack };

type FieldControllerProps<TRegister extends FieldValues> = Partial<
  Pick<ControllerProps<TRegister>, "name" | "control">
> & {
  render: (
    controlProps:
      | FieldControllerMuiFieldProps<TRegister>
      | Record<string, undefined>,
    data: UseControllerReturn<TRegister> | Record<string, undefined>,
  ) => ReactElement;
  ControlProps?: Omit<
    ControllerProps<TRegister>,
    "render" | "name" | "control"
  >;
};

export default function FieldController<TRegister extends FieldValues>(
  props: FieldControllerProps<TRegister>,
) {
  // Vars
  // Condition to check if control is set, which mean it is react-hook-form field
  const isReactHook = "control" in props && !!props.control;

  // If it's react-hook-form component props and name props is missing, throw an error.
  if (isReactHook && !props.name) {
    throw new Error("Properties 'name' are required!");
  }

  // Check if all required properties are set
  if (isReactHook && props.name) {
    return (
      <Controller
        control={props.control}
        render={(data) =>
          props.render({ ...data.field, inputRef: data.field.ref }, data)
        }
        name={props.name}
        {...props.ControlProps}
      />
    );
  }

  // Handle render if it's not react-hook-form field
  return props.render({}, {});
}
