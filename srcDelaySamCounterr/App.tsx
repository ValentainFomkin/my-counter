import React, {useState} from 'react';
import './App.css';
import {CounterList} from "./CounterList";


function App() {
    const [maxValue, setMaxValue] = useState<number>(1)
    const [startValue, setStartValue] = useState<number>(0)
    const [counter, setCounter] = useState<number>(0)


    const sumCount = () => {
        setCounter(counter + 1)
    }

    const resetValue = () => {
        setCounter(0)
    }

    const sumMaxValue = () => {
        setMaxValue(maxValue + 1)
    }

    const sumStartValue = () => {
        setStartValue(1 + startValue)
        setCounter(startValue + 1)
    }


    return (
        <div className="App">
            <CounterList
                counter={counter}
                setCounter={setCounter}
                sumCount={sumCount}
                resetValue={resetValue}
                maxValue={maxValue}
                startValue={startValue}
                sumMaxValue={sumMaxValue}
                sumStartValue={sumStartValue}
            />

        </div>
    );
}

export default App;
