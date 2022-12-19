import React from 'react';
import {ButtonForCounter} from "./components/ButtonForCounter";
import {WindowShower} from "./components/WindowShower";
import {Input} from "./components/Input";

export type CounterListPropsType = {
    counter: number
    setCounter: (counter: number) => void
    sumCount: () => void
    resetValue: () => void
    startValue: number | string
    maxValue: number | string
    sumMaxValue: () => void
    sumStartValue: () => void
}

export const CounterList = (props: CounterListPropsType) => {
    let {
        counter,
        sumStartValue,
        sumMaxValue,
        setCounter,
        sumCount,
        resetValue,
        maxValue,
        startValue
    } = props

    const sumCountHandler = () => sumCount()
    const resetValueHandler = () => resetValue()
    const sumMaxValueHandler = () => sumMaxValue()
    const sumStartValueHandler = () => sumStartValue()
    if (startValue === maxValue) {

    }

    return (
        <div>
            <div>
                <div>
                    Max Value: <Input title={maxValue} setTitle={() => {
                }}/>
                    <ButtonForCounter maxValue={maxValue} counter={counter} name={'+'} callBack={sumMaxValueHandler}/>
                </div>
                <div>
                    Start Value: <Input title={startValue} setTitle={() => {
                }}/>
                    <ButtonForCounter maxValue={maxValue} startValue={startValue} counter={counter} name={'+'}
                                      callBack={sumStartValueHandler}/>
                </div>
                <div>
                    <ButtonForCounter startValue={startValue} counter={counter} name={'SET'} callBack={() => {
                    }}/>
                </div>
            </div>
            <div className={'s'}>
                <WindowShower name={counter}/>
                <ButtonForCounter maxValue={maxValue} counter={counter} name={'INC'} callBack={sumCountHandler}/>
                <ButtonForCounter counter={counter} name={'RESET'} callBack={resetValueHandler}/>
            </div>

        </div>
    );
};
