import React from 'react'
import "./InputField.scss"

const InputField = ({ placeHolder, isWhiteBG }: { placeHolder: string; isWhiteBG: boolean; }) => {
    return (
        <div className={`input_field ${isWhiteBG ? "white_bg" : ""}`} >
            <input type="text" placeholder={placeHolder} />
        </div>
    )
}

export default InputField
