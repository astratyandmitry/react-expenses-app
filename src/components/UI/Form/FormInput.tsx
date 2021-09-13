import React from 'react'

interface FormInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: any;

  onInputChanged (e: React.ChangeEvent<HTMLInputElement>): void,
}

function FormInput ({ name, value, label, placeholder, type = 'text', onInputChanged }: FormInputProps) {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="block text-xs font-medium uppercase text-gray-400 mb-1">{label}</label>
      )}
      <input
        className="bg-gray-50 text-sm border p-3 rounded block w-full"
        id={name} type={type} placeholder={placeholder} value={value}
        onChange={onInputChanged}
      />
    </div>
  )
}

export default FormInput
