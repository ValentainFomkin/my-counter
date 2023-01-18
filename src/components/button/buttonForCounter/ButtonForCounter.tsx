import React from 'react';

export type ButtonPropsType = {
    name: string
    callBack: () => void
    counter?: number
    maxValue?: number | string
    startValue?: number | string
}

export const ButtonForCounter = (props: ButtonPropsType) => {
    let {name, callBack, counter, maxValue, startValue} = props

    const onClickHandler = () => {
        callBack()
    }


    // const disabledButtonHandler = () => {
    //     if (startValue! > maxValue!)
    // }

    return (
        <button disabled={counter === maxValue || startValue! >= maxValue!}
                onClick={onClickHandler}>{name}</button>
    );
};