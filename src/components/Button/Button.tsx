import React from "react";
import s from './button.module.css'


type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
    onClick?: () => void;
    name: string;
    type?: ButtonType;
}

export const Button: React.FC<ButtonProps> = ({ onClick, name,type }) => {
    const handleClick = () => {onClick && onClick();};

    return <button type={type ? type :'button'} className={s.button} onClick={handleClick}>{name}</button>;
};



