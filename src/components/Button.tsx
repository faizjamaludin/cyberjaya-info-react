import React from 'react'

interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export const PrimaryButton = ({ label, onClick, type }: ButtonProps) => {
    return (
        <button type={type} onClick={onClick} className='text-sm font-normal text-secondary-200 bg-primary border border-primary hover:translate-x-px hover:translate-y-px rounded-md px-4 py-2 shadow-lg'>{label}</button>
    )
}

export const SecondaryButton = () => {

}
