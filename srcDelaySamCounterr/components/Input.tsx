import React, {ChangeEvent} from 'react';

export type InputPropsType = {
    title: string | number
    setTitle: (title: string) => void
}

export const Input = (props: InputPropsType) => {

    let {title, setTitle} = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        <input value={title} onChange={onChangeHandler}/>
    );
};
