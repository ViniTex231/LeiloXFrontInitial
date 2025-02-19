import type { ChangeEvent } from "react";
import "./InputOptions.css"

interface InputOptionsProps {
    label: string
    value: string
    onChange: (value: string) => void
    options: string[]
}

export function InputOptions({ label, value, onChange, options }: InputOptionsProps) {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value)
    }

    return (
        <div className="input-container">
            <label className="input-label">{label}</label>
            <select className="input-field" value={value} onChange={handleChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}