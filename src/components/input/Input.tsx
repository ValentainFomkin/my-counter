import React from 'react';

export type InputPropsType = {
    title: string | number
    // setTitle: (title: string | number) => void
}

export const Input = (props: InputPropsType) => {
    
    let {title} = props

    return (
        <input value={title}
            // onChange={onChangeHandler}
        />
    );
};
