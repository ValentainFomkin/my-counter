import React from 'react';

export type InputPropsType = {
    title: string | number
    // setTitle: (title: string | number) => void
}

export const Input = (props: InputPropsType) => {


    let {title} = props

    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }
    return (
        <input value={title}
            // onChange={onChangeHandler}
        />
    );
};
