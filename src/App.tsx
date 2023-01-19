import React, {useState} from 'react';
import './App.module.css';
import {CounterList} from "./CounterList";
import s from './App.module.css'


function App() {
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [counter, setCounter] = useState<number>(0)
    const [error, setError] = useState('')


    const sumCount = () => setCounter(counter + 1)

    const resetValue = () => setCounter(startValue)

    const sumMaxValue = () => setMaxValue(maxValue + 1)

    const minusMaxValue = () => setMaxValue(maxValue - 1)

    const sumStartValue = () => setStartValue(startValue + 1)

    const minusStartValue = () => setStartValue(startValue - 1)


    const setLSMaxValueAndStartValue = () => {
        if (startValue !== maxValue || startValue > maxValue) {
            localStorage.setItem('max-value', JSON.stringify(maxValue))
            localStorage.setItem('start-value', JSON.stringify(startValue))
            localStorage.setItem('counter', JSON.stringify(startValue))
            setCounter(startValue)
        }
    }


    const getLSMaxValueAndStartValueAndCounter = () => {
        const maxValueAsString = localStorage.getItem('max-value')
        const startValueAsString = localStorage.getItem('start-value')
        const counterValueAsString = localStorage.getItem('counter')
        if (maxValueAsString && startValueAsString && counterValueAsString) {
            const newMaxValue = JSON.parse(maxValueAsString)
            const newStartValue = JSON.parse(startValueAsString)
            const newCounterValue = JSON.parse(counterValueAsString)
            setMaxValue(newMaxValue)
            setStartValue(newStartValue)
            setCounter(newCounterValue)
        }
    }

    return (
        <div className={s.app}>
            {/*<button onClick={setLSMaxValue}>set</button>*/}
            <CounterList
                setError={setError}
                error={error}
                counter={counter}
                sumCount={sumCount}
                resetValue={resetValue}
                maxValue={maxValue}
                // setMaxValue={setMaxValue}
                startValue={startValue}
                sumMaxValue={sumMaxValue}
                minusMaxValue={minusMaxValue}
                sumStartValue={sumStartValue}
                minusStartValue={minusStartValue}
                setLSMaxValueAndStartValue={setLSMaxValueAndStartValue}
                getLSMaxValueAndStartValueAndCounter={getLSMaxValueAndStartValueAndCounter}
            />
        </div>
    );
}

export default App;

// const [value, setValue] = useState(0)
// const incLocalstorage = () => setValue(value + 1)
// const setToLocalStorage = () => {
//     //code
//     localStorage.setItem('counterValue', JSON.stringify(value))
//     // localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
// }
// // const getFromLocalStorage = () => {
// //     let valueAsString = localStorage.getItem('counterValue')
// //     if (valueAsString) {
// //         let newValue = JSON.parse(valueAsString)
// //         setValue(newValue)
// //     }
// // }
//
// const clearLocalStorage = () => {
//     localStorage.clear()
//     setValue(0)
// }
// const removeLocalStorage = () => {
//     localStorage.removeItem('counterValue')
// }
// useEffect(() => {
//     let valueAsString = localStorage.getItem('counterValue')
//     if (valueAsString) {
//         let newValue = JSON.parse(valueAsString)
//         setValue(newValue)
//     }
// }, [])

// <h1>{value}</h1>
// <button onClick={incLocalstorage}>+</button>
// <button onClick={setToLocalStorage}>set to local storage</button>
// <button onClick={getFromLocalStorage}>get from local storage</button>
// <button onClick={clearLocalStorage}>clear local storage</button>
// <button onClick={removeLocalStorage}>remove local storage</button>