interface ButtonProps {
    text: string;
    onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className="button">
            {text}
        </button>
    );
}