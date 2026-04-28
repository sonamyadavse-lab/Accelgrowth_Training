import React from "react";

interface Props {
  label: string;
  type: string;
  register: any;
  name: string;
  error?: string;
}

const InputField: React.FC<Props> = ({ label, type, register, name, error }) => {
  return (
    <div className="input-group">
      <label>{label}</label>

      <input type={type} {...register(name)} />

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default InputField;