import { UseFormRegisterReturn } from "react-hook-form";

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
    <div>
      <label htmlFor={label}>{text}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        value={value}
      />
    </div>
  );
};

export default Input