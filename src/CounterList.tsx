import React, {useEffect} from 'react';
import {ButtonForCounter} from "./components/button/buttonForCounter/ButtonForCounter";
import {WindowShower} from "./components/windowShower/WindowShower";
import {Input} from "./components/input/Input";
import s from './CounterList.module.css'

export type CounterListPropsType = {
    counter: number
    sumCount: () => void
    resetValue: () => void
    startValue: number | string
    maxValue: number | string
    // setMaxValue: (maxValue: number | string) => void
    sumMaxValue: () => void
    sumStartValue: () => void
    setLSMaxValueAndStartValue: () => void
    getLSMaxValueAndStartValueAndCounter: () => void
    minusMaxValue: () => void
    minusStartValue: () => void
    setError: (error: string) => void
    error: string

}

export const CounterList = (props: CounterListPropsType) => {
    let {
        counter,
        sumStartValue,
        sumMaxValue,
        sumCount,
        resetValue,
        maxValue,
        // setMaxValue,
        startValue,
        setLSMaxValueAndStartValue,
        getLSMaxValueAndStartValueAndCounter,
        minusMaxValue,
        minusStartValue,
        error,
        setError,
    } = props


    useEffect(() => {
        getLSMaxValueAndStartValueAndCounter()
    }, [])

    const sumCountHandler = () => sumCount()
    const resetValueHandler = () => resetValue()
    const sumMaxValueHandler = () => sumMaxValue()
    const minusMaxValueHandler = () => minusMaxValue()

    const sumStartValueHandler = () => sumStartValue()
    const minusStartValueHandler = () => minusStartValue()


    const setLSMaxValueAndStartValueHandler = () => setLSMaxValueAndStartValue()

    if (startValue >= maxValue) {
        setError('Start value must be less the Max value')
    } else {
        setError('')
    }

    return (
        <div className={s.container}>
            <div className={s.maxValue}>
                <div className={s.maxValueInput}><span>Max Value:</span> <Input title={maxValue}/></div>
                <div className={s.maxValueButtons}>
                    <div className={s.maxValueButtonPlus}><ButtonForCounter maxValue={maxValue} name={'+'}
                                                                            callBack={sumMaxValueHandler}/>
                    </div>
                    <div className={s.maxValueButtonMinus}><ButtonForCounter maxValue={maxValue} name={'-'}
                                                                             callBack={minusMaxValueHandler}/>
                    </div>
                </div>
            </div>
            <div className={s.startValue}>
                <div className={error ? s.startValueInputError : s.startValueInput}><span>Start Value:</span> <Input
                    title={startValue}/>
                </div>
                <div className={s.errorForStartValue}>
                    {error}
                </div>
                <div className={s.startValueButtons}>
                    <div className={s.startValueButtonPlus}><ButtonForCounter maxValue={maxValue}
                                                                              startValue={startValue}
                                                                              counter={counter} name={'+'}
                                                                              callBack={sumStartValueHandler}/></div>
                    <div className={s.startValueButtonMinus}><ButtonForCounter counter={counter} name={'-'}
                                                                               callBack={minusStartValueHandler}/></div>
                </div>

            </div>
            <div className={s.setValue}>
                <div className={error ? s.setValueError : s.setValueButton}>
                    <ButtonForCounter maxValue={maxValue} startValue={startValue}
                                      counter={counter} name={'SET VALUES'}
                                      callBack={setLSMaxValueAndStartValueHandler}/>
                </div>
            </div>

            {counter !== maxValue ?
                <div className={counter === maxValue ? s.windowShowerFinish : s.windowShower}>
                    <WindowShower name={counter}/>
                </div>
                : <div className={s.finish}><h2>finish</h2></div>}
            <div className={s.windowShowerButtons}>
                <div className={counter === maxValue ? s.windowShowerButtonsDisable : s.windowShowerButtonInc}>
                    <ButtonForCounter startValue={startValue} maxValue={maxValue}
                                      counter={counter} name={'INC'}
                                      callBack={sumCountHandler}/>
                </div>
                <div className={s.windowShowerButtonReset}>
                    <ButtonForCounter startValue={startValue} counter={counter} name={'RES'}
                                      callBack={resetValueHandler}/>
                </div>
            </div>


        </div>
    );
};
