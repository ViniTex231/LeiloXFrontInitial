import React from "react";
import "./Input.css";

interface BasicInputProps {
  inputStyle: string;
  inputType: string;
  inputPlaceholder: string;
  register: any;
  inputName: string;
  isRequired: boolean;
  errors: any;
  isActive?: boolean;
}

const Input: React.FC<BasicInputProps> = ({
  inputStyle,
  inputType,
  inputPlaceholder,
  register,
  inputName,
  isRequired,
  errors,
  isActive = true,
}) => {
  return (
    <div className="input-container">
      <input
        type={inputType}
        className={`input-field ${inputStyle}`}
        placeholder={inputPlaceholder}
        {...register(inputName, { required: isRequired })}
        disabled={!isActive}
      />
      {errors[inputName] && <span className="error-message">Este campo é obrigatório</span>}
    </div>
  );
};

export default Input;