import React from 'react'
import "./InputField.scss"

const InputField = ({ placeHolder }: { placeHolder: string; }) => {
    return (
        <div className='input_field' >
            <input type="text" placeholder={placeHolder} />
        </div>
    )
}

export default InputField
