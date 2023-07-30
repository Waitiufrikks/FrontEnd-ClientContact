import { UseFormRegisterReturn } from "react-hook-form";
import StyledDivInput from "./style";

interface IInput {
  text: string;
  label: string;
  type: string;
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  value?: string;
}
const Input = ({
  id,
  type,
  placeholder,
  label,
  text,
  register,
  value,
}: IInput) => {
  return (
    <StyledDivInput>
      <label htmlFor={label}>{text}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        value={value}
      />
    </StyledDivInput>
  );
};

export default Input