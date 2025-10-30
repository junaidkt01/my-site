import React from 'react'
import "./InputField.scss"

const TextareaField = ({ label, placeHolder, isWhiteBG }: { label: string; placeHolder: string; isWhiteBG: boolean; }) => {
    return (
        <div className={`textarea_field ${isWhiteBG ? "white_bg" : ""}`} >
            {/* <label htmlFor="">{label}</label> */}
            <textarea placeholder={placeHolder} />
        </div>
    )
}

export default TextareaField;
