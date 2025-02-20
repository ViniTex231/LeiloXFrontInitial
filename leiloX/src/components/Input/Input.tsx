import type { ChangeEvent, CSSProperties } from "react"
import "./Input.css"

interface InputFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  style?: CSSProperties
  disabled: boolean
}

export function InputField({ label, value, onChange, placeholder, style, disabled}: InputFieldProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input type="text" className="input-field" value={value} onChange={handleChange} placeholder={placeholder} style={style} disabled={disabled} />
    </div>
  )
}

