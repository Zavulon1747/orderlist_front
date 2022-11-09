import React from 'react';
import cl from './InputForm.module.css'

const InputForm = ({post, setPost, value, setValue}) => {

    const addValue = () => {
        const newPost = {
            id: Date.now(),
            name: value
        }
        setPost([...post, newPost])
        setValue('')
    }

    return (
        <div>
            <div>
                <input className={cl.inputField} type="text" value={value} onChange={e => setValue(e.target.value)}/>
                <button onClick={addValue}>Добавить</button>
            </div>
            <div className={cl.listProds}>
                <h3>{post.map((post, index) =>
                    <div className={cl.itemProd}>{index+1}) "{post.name}" - {post.amount} штук. От "{post.department}". Цена по прошлой продаже: {post.priceOfSelling} руб.</div>
                )}</h3>
            </div>
        </div>
    );
};

export default InputForm;