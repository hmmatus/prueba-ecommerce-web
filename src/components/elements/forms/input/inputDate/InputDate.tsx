import { SyntheticEvent } from "react";
import InputWrapper from "../inputWrapper/InputWrapper";
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";

interface Props extends ReactDatePickerProps {
  title: string;
  errorMessage?: string;
  type?: React.HTMLInputTypeAttribute;
  name: string;
}
const InputDate = (props: Props) => {
  const { title, errorMessage = "", onChange } = props;
  const onChangeEvent = (
    date: Date,
    event: SyntheticEvent<any, Event> | undefined
  ) => {
    onChange(date, event);
  };
  return (
    <InputWrapper title={title} errorMessage={errorMessage}>
      <ReactDatePicker
        className={`w-full h-8 pl-2 border focus:border-blue focus:outline-none rounded-md border-${
          errorMessage ? "error" : "slate-950"
        } ${props.className}`}
        {...props}
        onChange={onChangeEvent}
      />
    </InputWrapper>
  );
};

export default InputDate;
