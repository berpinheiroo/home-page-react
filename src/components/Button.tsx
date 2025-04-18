import { MouseEventHandler } from "react";

interface ButtonProps {
    text: string;
    onClick: () => MouseEventHandler;
}

export const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className="button">
            {text}
        </button>
    );
}