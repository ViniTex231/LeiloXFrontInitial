import React from "react";
import './ConfirmButton.css'

interface ButtonProps {
    text: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button", disabled = false }) => {
    return (
        <button className="custom-button" type={type} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button