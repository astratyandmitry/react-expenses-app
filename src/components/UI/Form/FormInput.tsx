import React from 'react'

interface FormInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
}

function FormInput ({ name, label, placeholder, type = "text" }: FormInputProps) {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="block text-xs font-medium uppercase text-gray-400 mb-1">{label}</label>
      )}
      <input id={name} type={type} placeholder={placeholder} className="bg-gray-50 text-sm border p-3 rounded block w-full"/>
    </div>
  )
}

export default FormInput
