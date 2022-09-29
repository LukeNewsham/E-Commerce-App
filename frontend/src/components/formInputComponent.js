import { useState } from 'react';

export default function FormInput(props) {

    const [focused, setFocused] = useState(false);
    const handleFocus = (e) => {
        setFocused(true)
    };

    //JSX -------------------
    return (
        <div className='input'>
            <input type={props.type}
                id={props.id}
                value={props.value}
                placeholder={props.placeholder}
                pattern={props.pattern}
                required
                onChange={props.onChange}
                onBlur={handleFocus}
                focused={focused.toString()} />
            <span> {props.errorMessage} </span>
            <br />

        </div>
    )
}