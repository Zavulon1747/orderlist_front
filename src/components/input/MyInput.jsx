import React from 'react';
import cl from "./InputForm.module.css";

const MyInput = ({value, setValue}) => {
    return (
        <div>
            <input className={cl.inputField} type="text" value={value} onChange={e => setValue(e.target.value)}/>

        </div>
    );
};

export default MyInput;