import React, { InputHTMLAttributes } from "react";
import InputWrapper from "../inputWrapper/InputWrapper";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  errorMessage?: string;
  type?: React.HTMLInputTypeAttribute;
  value: string | number;
  name: string;
  onChangeValue(value: string): void;
}
const InputText = (props: Props) => {
  const {
    title,
    errorMessage,
    type = "text",
    value,
    onChangeValue,
    name,
  } = props;
  const onChangeEvent = (e: React.FormEvent<HTMLInputElement>) => {
    onChangeValue(e.currentTarget.value);
  };
  return (
    <InputWrapper title={title} errorMessage={errorMessage || ""}>
      <input
        {...props}
        name={name}
        className={`h-8 pl-2 border focus:border-blue focus:outline-none rounded-md border-${
          errorMessage ? "error" : "slate-950"
        } ${props.className} ${props.disabled ? "opacity-30" : ""}`}
        type={type}
        value={value}
        onChange={onChangeEvent}
      />
    </InputWrapper>
  );
};

export default InputText;
